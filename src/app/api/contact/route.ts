import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sanitize(input: unknown) {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').slice(0, 5000).trim();
}

async function verifyTurnstile(token?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV === 'development') return true;
    return false;
  }

  if (!token) return false;

  try {
    const fd = new FormData();
    fd.append('secret', secret);
    fd.append('response', token);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: fd });
    const json = await res.json();
    return !!json.success;
  } catch (err) {
    console.error('Turnstile verify error', err);
    return false;
  }
}

const disableTurnstileInDev = process.env.DISABLE_TURNSTILE_IN_DEV === '1' || process.env.NEXT_PUBLIC_DISABLE_TURNSTILE_IN_DEV === '1';
const turnstileEnabled = Boolean(
  process.env.TURNSTILE_SECRET_KEY &&
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
  !disableTurnstileInDev
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = sanitize(body.name);
    const surname = sanitize(body.surname);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const message = sanitize(body.message);
    const token = typeof body.token === 'string' ? body.token : undefined;
    const websiteHoneypot = sanitize(body.website);

    // Honeypot
    if (websiteHoneypot) {
      return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 403 });
    }

    if (!name) return NextResponse.json({ success: false, error: 'Name required' }, { status: 400 });
    if (!email || !validateEmail(email)) return NextResponse.json({ success: false, error: 'Valid email required' }, { status: 400 });
    if (!message) return NextResponse.json({ success: false, error: 'Message required' }, { status: 400 });

    // Optional Turnstile verification only when explicitly enabled.
    if (turnstileEnabled) {
      const ok = await verifyTurnstile(token);
      if (!ok) return NextResponse.json({ success: false, error: 'Security verification failed' }, { status: 403 });
    }

    const fullName = `${name} ${surname}`.trim();
    const dateStr = new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' });

    const text = `Nuovo messaggio dal sito Bluedesign\n\nNome: ${fullName}\nEmail: ${email}\nTelefono: ${phone || 'Non fornito'}\nData: ${dateStr}\n\nMessaggio:\n${message}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5">
        <h2>Nuovo messaggio dal sito BlueDesign</h2>
        <p><strong>Nome:</strong> ${fullName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
        <p><strong>Data:</strong> ${dateStr}</p>
        <hr />
        <h3>Messaggio</h3>
        <p>${message}</p>
      </div>
    `;

    if (resend) {
      await resend.emails.send({
        from: 'BlueDesign <onboarding@resend.dev>',
        to: 'info@bluedesign.biz',
        replyTo: email,
        subject: `Nuovo messaggio da ${fullName}`,
        text,
        html,
      });

      // Confirmation to user
      try {
        await resend.emails.send({
          from: 'BlueDesign <onboarding@resend.dev>',
          to: email,
          subject: 'Abbiamo ricevuto il tuo messaggio',
          html: `
            <div style="font-family: Arial, sans-serif; line-height:1.5">
              <h2>Grazie per averci contattato, ${name}!</h2>
              <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
              <hr />
              <p style="font-size:12px;color:#666">Bluedesign – Studio d'Architettura & Showroom</p>
            </div>
          `,
        });
      } catch (confirmErr) {
        console.warn('Could not send confirmation email to user:', confirmErr);
      }

      return NextResponse.json({ success: true });
    }

    console.warn('RESEND_API_KEY not configured; skipping email send.');
    console.log('Email to:', 'info@bluedesign.biz');
    console.log('Subject:', `Nuovo messaggio da ${fullName}`);
    console.log('Text:', text);

    return NextResponse.json({ success: true, warning: 'RESEND_API_KEY not configured' });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}