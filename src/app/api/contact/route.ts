import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const {
      name = "",
      email = "",
      phone = "",
      subject = "",
      message = "",
      website = "",
    } = body;

    // Honeypot anti-spam :
    // un humain normal ne remplit jamais ce champ.
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 },
      );
    }

    if (!name.trim()) {
      return NextResponse.json(
        { error: "Le nom est obligatoire." },
        { status: 400 },
      );
    }

    if (!email.trim() || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "L’adresse e-mail est invalide." },
        { status: 400 },
      );
    }

    if (!subject.trim()) {
      return NextResponse.json(
        { error: "Veuillez sélectionner le type de demande." },
        { status: 400 },
      );
    }

    if (!message.trim() || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Le message est trop court." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Le message est trop long." },
        { status: 400 },
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
      CONTACT_TO_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASSWORD ||
      !CONTACT_TO_EMAIL
    ) {
      console.error("Configuration SMTP incomplète.");

      return NextResponse.json(
        { error: "Le service de messagerie est temporairement indisponible." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const subjectLabels: Record<string, string> = {
      soin: "Demande concernant un soin",
      formation: "Demande concernant une formation",
      financement: "Demande de financement de formation",
      autre: "Autre demande",
    };

    const readableSubject =
      subjectLabels[subject] ?? "Nouvelle demande depuis Uttara";

    await transporter.sendMail({
      from: `"Site Uttara" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Uttara] ${readableSubject}`,
      text: `
Nouvelle demande depuis le site Uttara

Nom : ${name}
E-mail : ${email}
Téléphone : ${phone || "Non renseigné"}
Objet : ${readableSubject}

Message :
${message}
      `.trim(),
      html: `
        <h2>Nouvelle demande depuis le site Uttara</h2>

        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone || "Non renseigné")}</p>
        <p><strong>Objet :</strong> ${escapeHtml(readableSubject)}</p>

        <hr />

        <p><strong>Message :</strong></p>
        <p style="white-space: pre-line;">
          ${escapeHtml(message)}
        </p>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur formulaire contact :", error);

    return NextResponse.json(
      { error: "Une erreur est survenue lors de l’envoi." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}