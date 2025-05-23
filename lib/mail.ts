import nodemailer, { Transporter } from "nodemailer";

interface SendMailOptions {
  to: string;
  name: string;
  subject: string;
  body: string;
}

interface SendMailResult {
  success: boolean;
  error?: string;
}

export async function sendmail({
  to,
  name,
  subject,
  body,
}: SendMailOptions): Promise<SendMailResult> {
  const transporter: Transporter = nodemailer.createTransport({
    host: "lax028.hawkhost.com",
    port: 587,
    auth: {
      user: "info@demo-web.live",
      pass: "=D,g8ojJ~H!T",
    },
  });

  try {
    // Verify transporter connection
    await transporter.verify();
  } catch (error) {
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    // Send email
    const sendResult = await transporter.sendMail({
      from: `${name} <info@demo-web.live>`,
      to,
      subject,
      html: body,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Email sending failed" };
  }
}
