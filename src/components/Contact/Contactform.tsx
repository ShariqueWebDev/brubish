"use client"
// import { handleformasubmit } from '@/lib/actions';
import { sendContactForm } from '@/lib/ContactForm';
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from './Button';
import { handleformasubmit } from '@/lib/actions';
// import Button from './Button';


const Contactform = () => {

    const ref=useRef<HTMLFormElement>()

    return (
        <div className="relative p-3 border-t-4 border-b-4 border-primary rounded-lg shadow-lg sm:p-12">
            <form ref={ref}  action={async formData => {
                console.log("STARTED FUNCTIION");
                
                const name = formData.get("name");
                const email = formData.get("email");
                const phone = formData.get("phone");
                const message = formData.get("message");

                const newErrors = {};
                console.log("AA gya  reset karn111e");
            
                    if (!name) {
                        newErrors.name = "Name is required";

                    }
                    if (!email) {
                        newErrors.email = "Email is required";
                    }
            
                    if (!phone) {
                        newErrors.phone = "Phone is required";
                    } else if (!/^\d{10}$/.test(phone)) {
                        newErrors.phone = "Phone must be a valid 10-digit number";
                    }
                    if (!message) {
                        newErrors.message = "Message is required";
                    }
                    if (Object.keys(newErrors).length > 0) {
                        const errorMessages = Object.values(newErrors).join("\n");
                        alert(errorMessages);
                        console.log(errorMessages,"sssddd");
                        return
                    }
                    console.log("AA gya  reset karne");
                    
                   const status =  await handleformasubmit(formData)
                   if (status) {
                    alert("SUCCESSFULLY SENT")
                    ref.current?.reset()
                   }
                   else {

                       alert("Failed to send email")
                    }
            }} >
                <div className="mb-6">
                    <input
                        type="text"
                        required
                        name="name"
                        placeholder="Your Name"
                        className="border rounded-md text-gray-800 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-3 px-4 w-full text-base focus:border-primary outline-none"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="email"
                        required
                        name="email"
                        placeholder="Your Email"
                        className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border rounded-md text-gray-800  py-3 px-4 w-full text-base focus:border-primary outline-none"
                    />
                </div>
                <div className="mb-6 flex gap-2 w-full">
                    <input
                        type="number"
                        required
                        name="phone"
                        placeholder="9876543210"
                        className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border rounded-md text-gray-800  py-3 px-4 w-full text-base focus:border-primary outline-none"
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        rows="6"
                        required
                        name="message"
                        placeholder="Your Message"
                        className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border rounded-md text-gray-800 py-3 px-4 w-full text-base focus:border-primary outline-none"
                    ></textarea>
                </div>
           
                   <Button/>
                
            </form>
        </div>
    )
}

export default Contactform