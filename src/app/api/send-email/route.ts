// Example for App Router with route.ts (TypeScript)
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587, // or 465 for SSL
    secure: false, // true for port 465
    auth: {
      user: "aipalmrobotics@gmail.com",
      pass: "kfro xktw acep advo",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Ai palm" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
