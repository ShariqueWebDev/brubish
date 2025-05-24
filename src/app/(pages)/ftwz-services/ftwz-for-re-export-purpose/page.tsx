// import One from '@/components/ftwz/reexport/One'
// import Two from '@/components/ftwz/reexport/Two'
import Three from "@/components/ftwz/reexport/Three";
import Four from "@/components/ftwz/reexport/Four";
import Servicebanner3 from "@/components/shared/Servicebanner3";
import Submenu from "@/components/shared/Submenu";
import React from "react";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import Eximmap from "@/components/services/Eximmap";
import One from "@/components/ftwz/reexport/One";
import Two from "@/components/ftwz/reexport/Two";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Image from "next/image";
import { Metadata } from "next";
import { WEBSITE_URL } from "@/app/layout";

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
  title: "Re-Export Services from FTWZ India | Brubish Logistics",
  description:
    "Streamline global trade through Brubish FTWZ with re-export services. Perform VAS like repackaging, labeling, blending, assembly and benefit from income tax waiver, GST exemption, and deferred customs duties.",
  openGraph: {
    title: "Re-Export Services from FTWZ India | Brubish Logistics",
    description:
      "Boost your global trade strategy with Brubish FTWZ’s re-export logistics. Enjoy customs duty deferment, income tax waiver, GST exemption, and 50+ value-added services under one roof.",
    url: `${WEBSITE_URL}/ftwz-services/ftwz-for-re-export-purpose`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/brubish-logo.webp`,
        width: 1200,
        height: 630,
        alt: "FTWZ Re-Export Services Brubish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Re-Export Services from FTWZ India | Brubish Logistics",
    description:
      "Enable re-export efficiency via Brubish FTWZ: enjoy GST exemptions, income tax waivers, and advanced processing like kitting, packaging, labeling, and repairs for global logistics.",
    images: [`${WEBSITE_URL}/logo/brubish-logo.webp`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/ftwz-services/ftwz-for-re-export-purpose`,
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="aspect-[2.67] max-md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-11.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="aspect-[1]  md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-18.webp"
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
      {/* <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section4">

<Four/>
</div> */}
      <Ftwz4 />
      <Eximmap />
    </div>
  );
};

export default Page;
