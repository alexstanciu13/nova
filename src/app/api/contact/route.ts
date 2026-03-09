import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASS,
  },
});

// Route by subject: technical support → support@, everything else → contact@
function getRecipient(subject: string): string {
  if (subject === "Suport tehnic") return "support@trynova.ro";
  return "contact@trynova.ro";
}

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Câmpuri lipsă." }, { status: 400 });
  }

  const to = getRecipient(subject);

  try {
    await transporter.sendMail({
      from: `"Nova Website" <${process.env.ZOHO_SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[Nova Contact] ${subject} — ${name}`,
      text: `Nume: ${name}\nEmail: ${email}\nSubiect: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0D1F5C;border-bottom:2px solid #EEF2FF;padding-bottom:12px;">
            Mesaj nou prin formularul Nova
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px 0;color:#6B7A9A;width:100px;">Nume</td><td style="padding:8px 0;color:#0D1F5C;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Email</td><td style="padding:8px 0;color:#0051CC;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Subiect</td><td style="padding:8px 0;color:#0D1F5C;">${subject}</td></tr>
          </table>
          <div style="background:#F8FAFF;border-left:3px solid #0051CC;padding:16px;border-radius:4px;white-space:pre-wrap;color:#0D1F5C;line-height:1.6;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top:20px;color:#6B7A9A;font-size:12px;">
            Răspunde direct la acest email pentru a contacta ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Eroare la trimitere." }, { status: 500 });
  }
}
