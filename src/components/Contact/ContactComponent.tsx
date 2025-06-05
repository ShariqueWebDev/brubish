"use client";
import React, { useState } from "react";
import Homemap from "@/components/Home/Map";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import {
  ChevronRight,
  Loader2Icon,
  Mail,
  MailIcon,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  User,
} from "lucide-react";

import { sendContactEnquiry } from "../Contact/sendContactEnquiry";
// import { message } from "antd";
import Swal from "sweetalert2";

const ContactComp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Update formData based on input name and value
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update formData based on the input name
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendContactEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      if (response) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        // toast.success("Form Submitted!");
        setLoading(false);
        Swal.fire({
          title: "Email have been sent successfully!",
          icon: "success",
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Some error occured!",
        icon: "error",
        draggable: true,
      });
      // toast("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sjcntainer">
      <Ftwzbanner title="Contact Us" />
      <div className="md:px-20 px-5  text-white py-8 md:py-16 flex flex-col lg:flex-row gap-14 lg:gap-14">
        <div className="space-y-2 w-full lg:w-[60%]">
          <div className="space-y-4">
            <h2
              className="text-3xl lg:text-4xl heading-all gradientHeading text-gray-800 font-bold tracking-wide"
              data-aos="fade-up"
            >
              GET IN TOUCH
            </h2>
            <p
              className="tracking-wider leading-relaxed text-gray-600 text-[0.9rem] lg:text-[0.95rem] "
              data-aos="fade-up"
            >
              Need to get in touch? We'd love to hear from you! Please fill out
              the form or email{" "}
              <a href="mailto:sales@brubish.com" className="text-primary">
                sales@brubish.com
              </a>{" "}
              &{" "}
              <a href="mailto:spares@brubish.com" className="text-primary">
                spares@brubish.com
              </a>
              , and our customer service team will respond within shortly.
            </p>
          </div>
          {/* <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-4 lg:gap-5">
            {data.map((item, index) => (
              <div key={index} data-aos="fade-up">
                <ContactCard item={item} />
              </div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 !mt-7 ">
            <div
              data-aos="fade-up"
              className="bg-gray-100
       flex items-center gap-5 px-3 py-4 rounded-xl "
            >
              <div>
                <div
                  className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg"
                  data-aos="fade-up"
                >
                  <MapPin color="#ffb200" />
                </div>
              </div>
              <div>
                <h3
                  className="text-lightGolden text-lg uppercase font-semibold tracking-wider text-gray-900"
                  data-aos="fade-up"
                >
                  Address
                </h3>
                <p
                  className="text-sm tracking-wide text-gray-600"
                  data-aos="fade-up"
                >
                  Plot No D-9/10 ,Duvvada, Vishakhapatnam, Andhra Pradesh-530049
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-gray-100
       flex items-center gap-5 px-3 py-4 rounded-xl "
            >
              <div>
                <div
                  className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg"
                  data-aos="fade-up"
                >
                  <Phone color="#ffb200" />
                </div>
              </div>
              <div>
                <h3
                  className="text-lightGolden text-lg uppercase font-semibold tracking-wider text-gray-900"
                  data-aos="fade-up"
                >
                  Phone
                </h3>
                <p
                  className="text-sm tracking-wide text-gray-600"
                  data-aos="fade-up"
                >
                  +91 7901790164
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-gray-100
       flex items-center gap-5 px-3 py-4 rounded-xl "
            >
              <div>
                <div
                  className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg"
                  data-aos="fade-up"
                >
                  <Phone color="#ffb200" />
                </div>
              </div>
              <div>
                <h3
                  className="text-lightGolden text-lg uppercase font-semibold tracking-wider text-gray-900"
                  data-aos="fade-up"
                >
                  Phone
                </h3>
                <p
                  className="text-sm tracking-wide text-gray-600"
                  data-aos="fade-up"
                >
                  +91 9631963163
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-gray-100
       flex items-center gap-5 px-3 py-4 rounded-xl "
            >
              <div>
                <div
                  className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg"
                  data-aos="fade-up"
                >
                  <Mail color="#ffb200" />
                </div>
              </div>
              <div>
                <h3
                  className="text-lightGolden text-lg uppercase font-semibold tracking-wider text-gray-900"
                  data-aos="fade-up"
                >
                  Email
                </h3>
                <p
                  className="text-sm tracking-wide text-gray-600"
                  data-aos="fade-up"
                >
                  sales@brubish.com
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-gray-100
       flex items-center gap-5 px-3 py-4 rounded-xl "
            >
              <div>
                <div
                  className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg"
                  data-aos="fade-up"
                >
                  <Mail color="#ffb200" />
                </div>
              </div>
              <div>
                <h3
                  className="text-lightGolden text-lg uppercase font-semibold tracking-wider text-gray-900"
                  data-aos="fade-up"
                >
                  Email
                </h3>
                <p
                  className="text-sm tracking-wide text-gray-600"
                  data-aos="fade-up"
                >
                  spares@brubish.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] space-y-5" data-aos="fade-up">
          {/* <ContactForm /> */}
          <div className="w-full lg:w-[100%]">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div
                className="flex gap-3 items-center border-b py-2"
                data-aos="fade-up"
              >
                <User size={20} color="#ffb200" strokeWidth={1} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className=" placeholder:text-gray-500 text-sm text-black  w-full focus:outline-none  rounded-md pl-3  py-1.5"
                  placeholder="Your Name"
                />
              </div>
              <div
                className="flex gap-3 items-center border-b py-2"
                data-aos="fade-up"
              >
                <Mail size={20} color="#ffb200" strokeWidth={1} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="placeholder:text-gray-500 text-sm text-black  w-full focus:outline-none  rounded-md pl-3 py-1.5"
                  placeholder="Your Email"
                />
              </div>
              <div
                className="flex gap-3 items-center border-b py-2"
                data-aos="fade-up"
              >
                <Phone size={20} color="#ffb200" strokeWidth={1} />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="placeholder:text-gray-500 text-sm text-black  w-full focus:outline-none rounded-md pl-3 py-1.5"
                  required
                  placeholder="Your Contact"
                />
              </div>
              <div
                className="flex gap-3 items-start border-b py-2"
                data-aos="fade-up"
              >
                <MessageCircle size={20} color="#ffb200" strokeWidth={1} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="placeholder:text-gray-500 text-sm text-black capitalize w-full focus:outline-none  rounded-md pl-3  py-1.5"
                  required
                  rows={5}
                  placeholder="Message"
                />
              </div>
              <div
                className="!mt-7 flex justify-center items-center"
                data-aos="fade-up"
              >
                <button
                  type="submit"
                  className="bg-gradient-to-r font-medium border w-fit hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py- text-sm border-primary rounded text-black" // Add transition classes
                >
                  {/* Loader with transition */}
                  {loading && (
                    <span
                      className="loader block transition-all duration-300 ease-in-out"
                      style={{
                        width: loading ? "16px" : "0px",
                        opacity: loading ? 1 : 0,
                      }}
                    ></span>
                  )}
                  {/* Button text with transition */}
                  <span
                    className={`transition-opacity flex items-center gap-2 justify-center py-1.5 duration-300 ease-in-out cursor-pointer ${
                      loading ? "opacity-50" : "opacity-100"
                    }`}
                  >
                    {loading && (
                      <Loader2Icon className="animate-spin" size={16} />
                    )}
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="w-full max-md:mt-10 ">
        <div className="relative max-w-[1200px] mx-auto   md:flex bg-transparent md:-mt-16  z-30 flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-10    p-4">
          <a
            href="mailto:Info@bookmylogistic.com"
            className="flex-1 hover:scale-105 duration-300 h-[150px] md:h-[200px] pt-10  border rounded-lg shadow-lg p-4 flex flex-col justify-start items-center bg-white"
          >
            <img src="/contact/gmail.svg" className="w-10 md:w-16 mb-2" />

            <p className="text-gray-600 text-lg mt-2">
              Info@bookmylogistic.com
            </p>
          </a>
          <a
            href={"https://wa.me/919631963163"}
            className="flex-1 hover:scale-105 duration-300 h-[150px] md:h-[200px] pt-10 border rounded-lg shadow-lg p-4 flex flex-col justify-start items-center bg-white"
          >
            <img src="/contact/whatsapp.svg" className=" w-10 md:w-16 mb-2" />

            <p className="text-gray-600 text-lg mt-2">9631963163</p>
          </a>
          <div className="flex-1 hover:scale-105 duration-300 h-[150px] md:h-[200px] pt-10 border rounded-lg shadow-lg p-4 flex flex-col justify-start items-center bg-white">
            <img src="/contact/address.svg" className="w-10 md:w-16 mb-2" />

            <p className="text-gray-600 text-center text-base mt-2">
              Plot No D-9/10 ,Duvvada, Vishakhapatnam, Andhra Pradesh-530049
            </p>
          </div>
        </div>
      </div> */}

      {/* <ContactCard item={data} /> */}

      <div className="flex justify-center items-center md:px-20 px-4 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7976952696235!2d83.12628257391408!3d17.70701449352119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396f0eea497ddd%3A0x5faaecdefe258afd!2s10%2C%20Duvvada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530049!5e0!3m2!1sen!2sin!4v1747990547693!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Homemap />
    </div>
  );
};

export default ContactComp;
