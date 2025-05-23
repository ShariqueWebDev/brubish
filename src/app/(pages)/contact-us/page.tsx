// import ContactForm from '@/components/Contact/Contactform'
import { WEBSITE_URL } from "@/app/layout";
// import ContactCard from "@/components/Contact/ContactCard";
import ContactForm from "../../../components/Contact/ContactForm";
import Homemap from "@/components/Home/Map";
// import Bannerfull2 from "@/components/shared/Bannerfull2";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import {
  ChevronRight,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Brubish Logistics | Global Supply Chain & Delivery Experts",
  description:
    "Reach out to Brubish Logistics for innovative, tech-enabled supply chain solutions—from sourcing to last-mile delivery. Partner with us to streamline global trading, warehousing, and transport.",
  openGraph: {
    title: "Contact Brubish Logistics | Global Supply Chain & Delivery Experts",
    description:
      "Connect with Brubish for customized logistics solutions, efficient warehousing, and international freight services. Your gateway to global trade starts here.",
    url: `${WEBSITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/logo2.png`,
        width: 1200,
        height: 630,
        alt: "Brubish Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Brubish Logistics | Global Supply Chain & Delivery Experts",
    description:
      "Partner with Brubish to transform your logistics—from sourcing to delivery. Secure, reliable, tech-powered solutions tailored to your business.",
    images: [`${WEBSITE_URL}/logo/logo2.png`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/contact`,
  },
};

const Page = () => {
  const data = [
    {
      icon: MapPin,
      label: "Address",
      value: "Office 210, Lulu Office Building, Al Muteena, Dubai, UAE",
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "9631963163",
    },
    {
      icon: <Mail />,
      label: "Mail",
      value: "Info@bookmylogistic.com",
    },
  ];
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
              <a
                href="mailto:Info@bookmylogistic.com"
                className="text-lightGolden"
              >
                Info@bookmylogistic.com
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
                  +7901790164
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
                  9631963163
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
                  Info@bookmylogistic.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] space-y-5" data-aos="fade-up">
          <ContactForm />
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

export default Page;
