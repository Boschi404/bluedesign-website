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

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
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

    if (!token || typeof token !== 'string' || token.trim().length === 0) {
      return NextResponse.json({ error: 'Security token missing' }, { status: 400 });
    }

    const isValidToken = await verifyTurnstile(token);
    if (!isValidToken) {
      return NextResponse.json({ error: 'Security verification failed' }, { status: 403 });
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

    const emailContent = `
Nuovo messaggio dal sito web

----------------------------------------
DATI CONTATTO
----------------------------------------
Nome: ${sanitizedName}${sanitizedSurname ? ' ' + sanitizedSurname : ''}
Email: ${sanitizedEmail}
Telefono: ${sanitizedPhone || 'Non fornito'}

----------------------------------------
MESSAGGIO
----------------------------------------
${sanitizedMessage}
    `.trim();

    if (resend) {
      await resend.emails.send({
        from: 'Bluedesign <onboarding@resend.dev>',
        to: 'info@bluedesign.it',
        subject: `Nuovo contatto da ${sanitizedName}`,
        text: emailContent,
        replyTo: sanitizedEmail,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}