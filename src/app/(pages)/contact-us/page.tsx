import { WEBSITE_URL } from "@/app/layout";
import ContactComp from "@/components/Contact/ContactComponent";
import { Metadata } from "next";
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
  return (
    <div className="sjcntainer">
      <ContactComp />
    </div>
  );
};

export default Page;
