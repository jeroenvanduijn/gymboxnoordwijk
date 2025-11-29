import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // Initialize Resend at runtime, not at build time
  const resend = new Resend(process.env.RESEND_API_KEY || '');

  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    // Map subject to Dutch labels
    const subjectLabels: { [key: string]: string } = {
      algemeen: 'Algemene vraag',
      intro: 'Gratis Intro',
      lidmaatschap: 'Lidmaatschap',
      tarieven: 'Tarieven',
      anders: 'Iets anders'
    };

    const subjectLabel = subjectLabels[subject] || subject;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Resend's test email (always works)
      to: ['welcome@crossfitleiden.com'],
      replyTo: email,
      subject: `Website Contact: ${subjectLabel} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #E25C2A 0%, #E4572E 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #E25C2A;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 12px;
                border-radius: 4px;
                border-left: 3px solid #E25C2A;
              }
              .message {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Nieuw Contact Formulier</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">CrossFit Leiden Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">📋 Onderwerp</div>
                  <div class="value">${subjectLabel}</div>
                </div>

                <div class="field">
                  <div class="label">👤 Naam</div>
                  <div class="value">${name}</div>
                </div>

                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>

                <div class="field">
                  <div class="label">💬 Bericht</div>
                  <div class="value message">${message}</div>
                </div>

                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

                <p style="color: #666; font-size: 14px; margin: 0;">
                  Je kunt direct antwoorden op dit bericht - het gaat naar: <strong>${email}</strong>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email succesvol verzonden', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verzenden van je bericht. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
