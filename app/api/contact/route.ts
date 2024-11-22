import nodemailer from 'nodemailer';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // Read the body as a string
  // Parse the string as JSON if needed
  const { subject, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or an app-specific password
    },
  });
  try {
    // Send the email
    await transporter.sendMail({
      from: 'support@mindmolt.com',
      to: 'support@mindmolt.com',
      subject: subject,
      text: message,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    // Send success response
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
    });
  }
}
