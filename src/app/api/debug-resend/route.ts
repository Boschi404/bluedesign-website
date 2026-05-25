import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
  // Security: only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  
  return NextResponse.json({
    status: 'debug-endpoint',
    env_check: {
      has_resend_api_key: !!apiKey,
      api_key_preview: apiKey ? `${apiKey.slice(0, 10)}...` : 'NOT SET',
      has_turnstile_site_key: !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      has_turnstile_secret_key: !!process.env.TURNSTILE_SECRET_KEY,
      node_env: process.env.NODE_ENV,
    },
    instructions: {
      test_email: 'Send a POST request to /api/contact with form data',
      localhost: 'http://localhost:3000/api/contact',
      env_setup: 'Make sure .env file has RESEND_API_KEY and Turnstile keys',
    },
  });
}

export async function POST(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send test email
    const response = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: 'Test email from Bluedesign',
      html: '<p>Test email to verify Resend is working</p>',
    });

    return NextResponse.json({
      success: true,
      message: 'Test email sent',
      response,
      next_steps: [
        '1. Check if you received an email at delivered@resend.dev',
        '2. If yes, Resend is working - test the contact form',
        '3. If no, check your RESEND_API_KEY in .env',
      ],
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        hint: 'Check that RESEND_API_KEY is set in .env',
      },
      { status: 500 }
    );
  }
}
