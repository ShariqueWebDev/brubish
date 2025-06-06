// import Emblabanner from '@/components/services/freight/EBrubishabanner'
import { WEBSITE_URL } from "@/app/layout";
import Freightfive from "@/components/services/freight/Freightfive";
import Freightfour from "@/components/services/freight/Freightfour";
import Freightseven from "@/components/services/freight/Freightseven";
import Freightsix from "@/components/services/freight/Freightsix";
import Freightthree from "@/components/services/freight/Freightthree";
import Freightthreex from "@/components/services/freight/Freightthreex";
import Freighttwo from "@/components/services/freight/Freighttwo";
import Freighttwox from "@/components/services/freight/Freighttwox";
import Servicebanner2 from "@/components/shared/Servicebanner2";
import Submenu from "@/components/shared/Submenu";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Brubish Freight – Seamless Ocean & Air Freight Forwarding Solutions",
  description:
    "Brubish Freight offers a one-stop digital platform for ocean and air freight forwarding, instant quotes, real-time tracking, and end-to-end shipment management for SMEs and enterprises.",
  openGraph: {
    title:
      "Brubish Freight – Seamless Ocean & Air Freight Forwarding Solutions",
    description:
      "Experience simplified costing, door-to-door shipments, and competitive freight rates with Brubish Freight. Manage your global supply chain smoothly on one dedicated platform.",
    url: `${WEBSITE_URL}/services/brubish-freight`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/brubish-favicon.png`,
        width: 1200,
        height: 630,
        alt: "Brubish Freight Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Brubish Freight – Seamless Ocean & Air Freight Forwarding Solutions",
    description:
      "Get instant freight quotes, transparent pricing, and real-time shipment updates with Brubish Freight’s comprehensive logistics platform.",
    images: [`${WEBSITE_URL}/logo/brubish-favicon.png`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/services/brubish-freight`,
  },
};

const sections = [
  {
    id: 1,
    name: "Brubish Freight",
    url: "#section1",
  },
  {
    id: 2,
    name: "Benefits",
    url: "#section2",
  },
  {
    id: 3,
    name: "Why Brubish",
    url: "#section3",
  },

  {
    id: 4,
    name: "FAQ's",
    url: "#section4",
  },
];

const Page = () => {
  return (
    <div>
      {/* <Servicebanner2 points ={["Efficient Global Shipping Solutions","Customized Freight Services","Real-Time Tracking"]}
      icon="/icons/freight.svg" heading="Brubish Freight" title="Faster Delivery To Accelerate Sales Everywhere" description="Brubish is the only 3PL who can handle your end-to-end logistics including freight, distribution, eCommerce fulfillment, and DTC fulfillment. Start streamlining your fulfillment eCommerce operations today." buttontext="Get Started" buttonlink="/services" bannerImage="/services/image.png"
      /> */}
      <div className="relative h-[65vh] md:h-[100vh] w-full">
        <Image
          width={1800}
          height={1300}
          className="h-full w-full !object-cover"
          src="/services/freight/banner.avif"
          alt="freight banner"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 "></div>

        {/* Text on top of the overlay */}
        <div className="absolute inset-0 flex flex-col items-start px-4 md:px-40 justify-center text-white ">
          <div className="flex items-center pb-4 gap-x-4">
            <Image
              src="/services/freight/f1.svg"
              width={100}
              height={100}
              alt="icon for banner"
              className="w-12 p-2.5 bg-white rounded-full"
            />
            <p className=" text-lg md:text-lg text-left font-bold">
              Brubish Freight
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-left mb-2">
            You fill the container.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-left">
            We fill in the rest.
          </h1>
        </div>
      </div>
      <Submenu sections={sections} />

      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section1">
        <Freighttwox />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section2">
        <Freightthreex />
      </div>
      {/* <Freightfive/> */}
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section3">
        <Freightsix />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section4">
        <Freightseven />
      </div>
    </div>
  );
};

export default Page;
