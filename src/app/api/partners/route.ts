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

export async function POST(req: NextRequest) {
  const { name, company, email, phone, clients, partnership } = await req.json();

  if (!name || !email || !phone || !clients) {
    return NextResponse.json({ error: "Câmpuri lipsă." }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Nova Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: "contact@trynova.ro",
      replyTo: `"${name}" <${email}>`,
      subject: `[Nova Parteneri] Aplicație nouă — ${name}${company ? ` (${company})` : ""}`,
      text: `Nume: ${name}\nCompanie: ${company || "—"}\nEmail: ${email}\nTelefon: ${phone}\nClienți: ${clients}\nTip parteneriat: ${partnership || "Nespecificat"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0D1F5C;border-bottom:2px solid #EEF2FF;padding-bottom:12px;">
            Aplicație partener nouă
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px 0;color:#6B7A9A;width:130px;">Nume</td><td style="padding:8px 0;color:#0D1F5C;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Companie</td><td style="padding:8px 0;color:#0D1F5C;">${company || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Email</td><td style="padding:8px 0;color:#0051CC;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Telefon</td><td style="padding:8px 0;color:#0D1F5C;">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Clienți actuali</td><td style="padding:8px 0;color:#0D1F5C;">${clients}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7A9A;">Tip parteneriat</td><td style="padding:8px 0;color:#0D1F5C;font-weight:600;">${partnership || "Nespecificat"}</td></tr>
          </table>
          <p style="margin-top:20px;color:#6B7A9A;font-size:12px;">
            Răspunde direct la acest email pentru a contacta aplicantul.
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
