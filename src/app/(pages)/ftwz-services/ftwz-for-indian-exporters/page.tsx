// import One from '@/components/ftwz/indianexporter/One'
import Two from "@/components/ftwz/indianexporter/Two";
import Three from "@/components/ftwz/indianexporter/Three";
import Four from "@/components/ftwz/indianexporter/Four";
import Servicebanner3 from "@/components/shared/Servicebanner3";
import Submenu from "@/components/shared/Submenu";
import React from "react";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import Eximmap from "@/components/services/Eximmap";
import One from "@/components/ftwz/indianexporter/One";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Image from "next/image";
import { WEBSITE_URL } from "@/app/layout";
import { Metadata } from "next";

const sections = [
  {
    id: 1,
    name: "Brubish FTWZ",
    url: "#section1",
  },
  {
    id: 2,
    name: "Benefits",
    url: "#section2",
  },
  {
    id: 3,
    name: "Current System vs FTWZ",
    url: "#section3",
  },
  {
    id: 4,
    name: "Why Brubish",
    url: "#section4",
  },
];

export const metadata: Metadata = {
  title: "FTWZ Solutions for Indian Exporters | Brubish Logistics",
  description:
    "Brubish FTWZ offers Indian exporters duty deferment, express clearance, GST exemption on value-added services, and seamless global trade support with integrated quality control and logistics.",
  openGraph: {
    title: "FTWZ Solutions for Indian Exporters | Brubish Logistics",
    description:
      "Export globally with Brubish FTWZ. Enjoy duty deferment, GST-free VAS, on-wheel clearance, and seamless logistics under one roof. Ideal for small and medium exporters.",
    url: `${WEBSITE_URL}/ftwz-services/ftwz-for-indian-exporters`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/brubish-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Brubish FTWZ for Indian Exporters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FTWZ Solutions for Indian Exporters | Brubish Logistics",
    description:
      "FTWZ logistics tailored for Indian exporters. Access global markets, reduce overhead, get GST-free services, and ensure quality with Brubish FTWZ.",
    images: [`${WEBSITE_URL}/logo/brubish-logo.webp`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/ftwz-services/ftwz-for-indian-exporters`,
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Servicebanner3
      icon="/services/vas/banner.svg" heading="BML VAS" title="Faster Delivery To Accelerate Sales Everywhere" description="BML is the only 3PL who can handle your end-to-end logistics including freight, distribution, eCommerce fulfillment, and DTC fulfillment. Start streamlining your fulfillment eCommerce operations today." buttontext="Get Started" buttonlink="/services" bannerImage="/services/vas/banner.png"
      /> */}
      {/* <Ftwzbanner title="FTWZ For Indian Exporters" bgImg="/about/about.jpg" /> */}
      <div className="aspect-[2.67] max-md:hidden ">
        <Image
          src="/ftwz/ftwz-6.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="aspect-[1]  md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-14.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section1">
        <One />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section2">
        <Two />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section3">
        {/* <Three/> */}
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section4">
        <Four />
      </div>
      <Ftwz4 />
      <Eximmap />{" "}
    </div>
  );
};

export default Page;
