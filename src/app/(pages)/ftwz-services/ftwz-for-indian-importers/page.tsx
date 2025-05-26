import One from "@/components/ftwz/indianimporter/One";
import Two from "@/components/ftwz/indianimporter/Two";
import Three from "@/components/ftwz/indianimporter/Three";
import Four from "@/components/ftwz/indianimporter/Four";
import React from "react";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import Eximmap from "@/components/services/Eximmap";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Image from "next/image";
import { WEBSITE_URL } from "@/app/layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FTWZ Benefits for Indian Importers | Brubish Logistics",
  description:
    "Discover how Brubish FTWZ empowers Indian importers with duty deferment, GST-exempt services, and optimized inventory management. Improve supply chain efficiency and reduce working capital costs.",
  openGraph: {
    title: "FTWZ Benefits for Indian Importers | Brubish Logistics",
    description:
      "Brubish FTWZ offers Indian importers flexible clearance, duty savings, and GST-exempt services like labeling, kitting, and storage. Learn how we streamline your import logistics.",
    url: `${WEBSITE_URL}/ftwz-services/ftwz-for-indian-importers`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/logo1.png`,
        width: 1200,
        height: 630,
        alt: "Brubish Logistics FTWZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FTWZ Benefits for Indian Importers | Brubish Logistics",
    description:
      "Explore duty deferment, GST exemptions, and advanced warehousing through Brubish FTWZ. Ideal for importers looking to optimize cost and efficiency.",
    images: [`${WEBSITE_URL}/logo/logo1.png`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/ftwz-services/ftwz-for-indian-importers`,
  },
};
const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Ftwzbanner title="FTWZ For Indian Importers" bgImg="/about/about.jpg" /> */}
      <div className="aspect-[2.67] max-md:hidden ">
        <Image
          src="/ftwz/banners/frieght-6.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="aspect-[1]  md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-13.webp"
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
        <Three />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section4">
        <Four />
      </div>
      <Ftwz4 />
      <Eximmap />
    </div>
  );
};

export default Page;
