import nodemailer from "nodemailer";

export async function sendmail({ to, name, subject, body, attachments }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.team.website@gmail.com",
      pass: "rupi cvcd ikfn wtki",
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    // console.error("Error verifying transporter:", error);
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    // Send email
    const sendResult = await transporter.sendMail({
      from: "HospitalityKonnect",
      to,
      subject,
      html: body,
      attachments: attachments && attachments.length ? attachments : undefined,
    });

    return { success: true };
  } catch (error) {
    // console.error("Error sending email:", error);
    return { success: false, error: "Email sending failed" };
  }
}