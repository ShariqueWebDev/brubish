import One from "@/components/ftwz/indianecommerce/One";
import Two from "@/components/ftwz/indianecommerce/Two";
import Three from "@/components/ftwz/indianecommerce/Three";

import Five from "@/components/ftwz/indianecommerce/Five";
import Six from "@/components/ftwz/indianecommerce/Six";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import Submenu from "@/components/shared/Submenu";
import React from "react";
import Seven from "@/components/ftwz/indianecommerce/Seven";
import Servicebanner2 from "@/components/shared/Servicebanner2";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Eximmap from "@/components/services/Eximmap";
import Image from "next/image";
import { Metadata } from "next";
import { WEBSITE_URL } from "@/app/layout";

const sections = [
  {
    id: 1,
    name: "Blueprint",
    url: "#section1",
  },

  {
    id: 3,
    name: "Benefits",
    url: "#section3",
  },
  {
    id: 4,
    name: "Experience",
    url: "#section4",
  },

  {
    id: 6,
    name: "Exporters",
    url: "#section6",
  },
  {
    id: 7,
    name: "Importers",
    url: "#section7",
  },
];

export const metadata: Metadata = {
  title: "FTWZ Solutions for e-Commerce Companies | Brubish Logistics",
  description:
    "Brubish FTWZ empowers global e-commerce operations with deferred duties, seamless returns, reduced working capital costs, and integrated last-mile delivery across India.",
  openGraph: {
    title: "FTWZ Solutions for e-Commerce Companies | Brubish Logistics",
    description:
      "Transform your e-commerce supply chain with Brubish FTWZ. Enable duty-paid on-sale, lower capital cost, smooth returns, and app-enabled last-mile delivery.",
    url: `${WEBSITE_URL}/ftwz-services/ftwz-for-ecommerce-companies`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/logo.png`,
        width: 1200,
        height: 630,
        alt: "Brubish FTWZ for eCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FTWZ Solutions for e-Commerce Companies | Brubish Logistics",
    description:
      "Optimize global e-commerce supply chains using Brubish FTWZ. Achieve 20% cost savings, reduced duty burden, faster deliveries, and seamless return management.",
    images: [`${WEBSITE_URL}/logo/logo.png`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/ftwz-services/ftwz-for-ecommerce-companies`,
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Ftwzbanner title="FTWZ For Ecommerce Companies" bgImg="/about/about.jpg" /> */}

      {/* <Servicebanner2 points ={["Efficient Global Shipping Solutions","Customized Freight Services","Real-Time Tracking"]}
      icon="/icons/freight.svg" heading="Bml Freight" title="Faster Delivery To Accelerate Sales Everywhere" description="At BML we can handle your end-to-end logistics including freight, distribution, eCommerce fulfillment, and DTC fulfillment. Start streamlining your fulfillment eCommerce operations today." buttontext="Get Started" buttonlink="/services" bannerImage="/services/image.png"
      /> */}
      <div className="aspect-[2.67] max-md:hidden ">
        <Image
          src="/ftwz/banners/ecommerce.png"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="aspect-[1]  md:hidden ">
        <Image
          src="/ftwz/banners/ecommerce-mobile.png"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>

      <One />
      <Two />
      <Three />
      {/* <Four/> */}
      {/* <Five/>
               <Six/>
               <Seven/> */}
      <Ftwz4 />
      <Eximmap />
    </div>
  );
};

export default Page;
