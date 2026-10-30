import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { inquirySchema } from '@/lib/inquiry';

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const parsed = inquirySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid inquiry' }, { status: 400 });
  }

  const { name, email, phone, message } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'Owens Academy <contact@owensacademy.org>',
    to: ['owensacademy@hotmail.com'],
    replyTo: email,
    subject: `New dance inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  });

  if (error) {
    console.error('Resend API error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
  }

  return NextResponse.json({ id: data.id });
}
