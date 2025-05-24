"use server";

import { sendmail } from "../../../lib/mail";
import { contactFormTemplate } from "../Contact/contactFormTemplate";

interface SendFuncProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEnquiry({
  name,
  email,
  phone,
  message,
}: SendFuncProps): Promise<boolean> {
  const emailBody = contactFormTemplate({
    name,
    email,
    phone,
    message,
  });

  try {
    await sendmail({
      to: "sales@brubish.com",
      name: "Brubish",
      subject: "Contact Form Enquiry (Brubish)",
      body: emailBody,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
}
