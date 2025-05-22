"use server";

import { sendmail } from "./sendmail";

export const sendContactForm = async (
  name: string,
  email: string,
  phone: string,
  message = "",
  doctor = ""
) => {
  try {
    await sendmail({
      to: "bml.e.works@gmail.com",
      name: name,
      subject: "Contact Form Submission From Brubish Engineering Works",
      body: `
        <div>
          <h3>Name: ${name}</h3>
          <h3>Email: ${email}</h3>
          <h3>Phone: ${phone}</h3>
          ${message ? `<h3>Message: ${message}</h3>` : ""}
          ${doctor ? `<h3>Doctor: ${doctor}</h3>` : ""}
        </div>
      `,
      attachments: [], // Add this line
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
