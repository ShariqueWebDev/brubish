"use server"

import { sendContactForm } from "./ContactForm";

export const handleformasubmit = async (formData: FormData) => {
  
            const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

        const response = await sendContactForm(
            name,
            email,
            phone,
            message
        );

        if (response) {
              return true  
         }
        else {
            return false
        }

}
