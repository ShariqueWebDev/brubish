import { WEBSITE_URL } from "@/app/layout";
import Five from "@/components/ftwz/consolidation/Five";
import Four from "@/components/ftwz/consolidation/Four";
import One from "@/components/ftwz/consolidation/One";
import Three from "@/components/ftwz/consolidation/Three";
import Two from "@/components/ftwz/consolidation/Two";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Eximmap from "@/components/services/Eximmap";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Consolidation & VMI Services in FTWZ India | Brubish Logistics",
  description:
    "Optimize supply chains with Brubish FTWZ consolidation services. Enable VMI, JIT delivery, multi-vendor SKU packing, and deferred duty benefits for Indian buyers and global sellers.",
  openGraph: {
    title: "Consolidation & VMI Services in FTWZ India | Brubish Logistics",
    description:
      "Streamline shipments using Brubish FTWZ: Pick & Pack, multi-vendor consolidation, vendor-managed inventory (VMI), and customized value-added services with deferred duties.",
    url: `${WEBSITE_URL}/ftwz-services/ftwz-for-consolidation`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/brubish-favicon.png`,
        width: 1200,
        height: 630,
        alt: "FTWZ Consolidation Services Brubish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consolidation & VMI Services in FTWZ India | Brubish Logistics",
    description:
      "Reduce costs, optimize lead time, and manage inventory smarter with Brubish FTWZ's consolidation & JIT logistics model. Multi-supplier shipments simplified.",
    images: [`${WEBSITE_URL}/logo/brubish-favicon.png`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/ftwz-services/ftwz-for-consolidation`,
  },
};

const Page = () => {
  return (
    <div className="">
      {/* <One/>
      <Two/>
       */}
      {/* <Ftwzbanner title="FTWZ For consolidation" /> */}
      <div className="aspect-[2.67] max-md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-9.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="aspect-[1]  md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-17.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <Three />
      <Four />
      <Five />
      <Ftwz4 />
      <Eximmap />
      {/* <Six/> */}
      {/* map */}
    </div>
  );
};

export default Page;
