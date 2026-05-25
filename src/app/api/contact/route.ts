import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const ipRateLimit = new Map<string, RateLimitEntry>();
const emailRateLimit = new Map<string, number>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const EMAIL_RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function cleanRateLimitMaps() {
  const now = Date.now();
  if (ipRateLimit.size > 1000) {
    for (const [key, value] of ipRateLimit.entries()) {
      if (now > value.resetTime) {
        ipRateLimit.delete(key);
      }
    }
  }
  if (emailRateLimit.size > 1000) {
    for (const [key, value] of emailRateLimit.entries()) {
      if (now - value > EMAIL_RATE_LIMIT_WINDOW) {
        emailRateLimit.delete(key);
      }
    }
  }
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  cleanRateLimitMaps();
  const now = Date.now();
  const entry = ipRateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    ipRateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= 1) {
    return true;
  }

  entry.count++;
  return false;
}

function isEmailRateLimited(email: string): boolean {
  cleanRateLimitMaps();
  const now = Date.now();
  const lastSubmission = emailRateLimit.get(email);

  if (!lastSubmission || now - lastSubmission > EMAIL_RATE_LIMIT_WINDOW) {
    emailRateLimit.set(email, now);
    return false;
  }

  return true;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('TURNSTILE_SECRET_KEY not configured. Bypassing Turnstile validation in development mode.');
      return true;
    }
    console.error('TURNSTILE_SECRET_KEY not configured');
    return false;
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);

    const result = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body: formData }
    );

    const outcome = await result.json() as { success: boolean };
    return outcome.success === true;
  } catch {
    return false;
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeString(input: string): string {
  return input.slice(0, 5000).replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, surname, email, phone, message, token, website } = body;

    // Honeypot spam protection
    if (website && website.trim() !== '') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 403 });
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Token verification is active only if TURNSTILE_SECRET_KEY is configured
    const hasTurnstile = !!process.env.TURNSTILE_SECRET_KEY;
    if (hasTurnstile) {
      if (!token || typeof token !== 'string' || token.trim().length === 0) {
        return NextResponse.json({ error: 'Security token missing' }, { status: 400 });
      }

      const isValidToken = await verifyTurnstile(token);
      if (!isValidToken) {
        return NextResponse.json({ error: 'Security verification failed' }, { status: 403 });
      }
    }

    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    if (isEmailRateLimited(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Email already submitted recently. Please try again later.' },
        { status: 429 }
      );
    }

    const sanitizedName = sanitizeString(name);
    const sanitizedSurname = surname ? sanitizeString(surname) : '';
    const sanitizedEmail = sanitizeString(email);
    const sanitizedPhone = phone ? sanitizeString(phone) : '';
    const sanitizedMessage = sanitizeString(message);

    const emailContentText = `
Nuovo messaggio dal modulo di contatto Bluedesign

DATI CONTATTO
Nome: ${sanitizedName} ${sanitizedSurname}
Email: ${sanitizedEmail}
Telefono: ${sanitizedPhone || 'Non fornito'}
Data Invio: ${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}

MESSAGGIO
${sanitizedMessage}
    `.trim();

    const emailHtmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuovo Contatto dal Sito Web</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f6f9fc;
        color: #333333;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      .wrapper {
        width: 100%;
        background-color: #f6f9fc;
        padding: 40px 20px;
        box-sizing: border-box;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border: 1px solid #eef2f6;
      }
      .header {
        background-color: #0a0a0f;
        padding: 40px 30px;
        text-align: center;
        border-bottom: 3px solid #c9a962;
      }
      .header h1 {
        color: #ffffff;
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 0.15em;
        margin: 0;
        text-transform: uppercase;
      }
      .header p {
        color: #c9a962;
        font-size: 12px;
        margin: 8px 0 0 0;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .content {
        padding: 40px 30px;
      }
      .section-title {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #8b8b9c;
        margin-bottom: 16px;
        border-bottom: 1px solid #eef2f6;
        padding-bottom: 8px;
      }
      .info-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      .info-table td {
        padding: 12px 0;
        vertical-align: top;
      }
      .info-table td.label {
        width: 120px;
        font-size: 13px;
        font-weight: 500;
        color: #6b6b7b;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .info-table td.value {
        font-size: 15px;
        color: #1a1a2e;
        font-weight: 400;
      }
      .info-table td.value a {
        color: #c9a962;
        text-decoration: none;
        font-weight: 500;
      }
      .message-box {
        background-color: #f8fafc;
        border-left: 3px solid #c9a962;
        padding: 20px 24px;
        border-radius: 4px;
        font-size: 15px;
        line-height: 1.6;
        color: #2d3748;
        white-space: pre-wrap;
        font-style: italic;
      }
      .footer {
        background-color: #f8fafc;
        padding: 24px 30px;
        text-align: center;
        font-size: 12px;
        color: #a0a0b0;
        border-top: 1px solid #eef2f6;
      }
      .footer p {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <h1>BLUEDESIGN</h1>
          <p>Studio d'Architettura & Showroom</p>
        </div>
        <div class="content">
          <div class="section-title">Dati Contatto</div>
          <table class="info-table">
            <tr>
              <td class="label">Mittente:</td>
              <td class="value"><strong>${sanitizedName} ${sanitizedSurname}</strong></td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td class="label">Telefono:</td>
              <td class="value">${sanitizedPhone ? `<a href="tel:${sanitizedPhone}">${sanitizedPhone}</a>` : '<em>Non fornito</em>'}</td>
            </tr>
            <tr>
              <td class="label">Data Invio:</td>
              <td class="value">${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}</td>
            </tr>
          </table>

          <div class="section-title">Messaggio del Cliente</div>
          <div class="message-box">${sanitizedMessage}</div>
        </div>
        <div class="footer">
          <p>Questo messaggio è stato inviato in modo sicuro dal modulo di contatto del sito web Bluedesign.</p>
        </div>
      </div>
    </div>
  </body>
</html>
    `.trim();

    if (resend) {
      await resend.emails.send({
        from: 'Bluedesign <no-reply@bluedesign.biz>',
        to: 'info@bluedesign.biz',
        subject: `Nuovo contatto da ${sanitizedName} ${sanitizedSurname}`,
        text: emailContentText,
        html: emailHtmlContent,
        replyTo: sanitizedEmail,
      });
    } else {
      console.warn('RESEND_API_KEY not configured. Bypassing email sending. Email details:');
      console.log('TO: info@bluedesign.biz');
      console.log('SUBJECT:', `Nuovo contatto da ${sanitizedName} ${sanitizedSurname}`);
      console.log('CONTENT TEXT:\n', emailContentText);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}