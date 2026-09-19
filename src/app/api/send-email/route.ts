import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, phoneNumber, country, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn('RESEND_API_KEY not configured - email not sent');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const phoneDisplay = phoneNumber 
      ? (country ? `(${country}) ${phoneNumber}` : phoneNumber)
      : '';

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@example.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background: #f9fafb;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #12141A;
                color: #F2F3F5;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #ffffff;
                padding: 20px;
                border-radius: 0 0 8px 8px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: 600;
                color: #374151;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              }
              .value {
                color: #1f2937;
                margin-top: 4px;
              }
              .message-box {
                background: #f9fafb;
                padding: 15px;
                border-radius: 6px;
                margin-top: 8px;
                border-left: 3px solid #3D9CFF;
              }
              a {
                color: #3D9CFF;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 18px; font-weight: 600;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${firstName} ${lastName}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                ${company ? `
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                
                ${phoneDisplay ? `
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value">${phoneDisplay}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
