import { WEBSITE_URL } from "@/app/layout";
import Foreignexportsbanner from "@/components/ftwz/foreignexport/Foreignexportsbanner";
import Fourforeignexport from "@/components/ftwz/foreignexport/Four";
import Oneforeignexport from "@/components/ftwz/foreignexport/One";
import Threeforeignexport from "@/components/ftwz/foreignexport/Three";
import Twoforeignexport from "@/components/ftwz/foreignexport/Two";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Eximmap from "@/components/services/Eximmap";
import Vasone from "@/components/services/vas/Vasone";
import Ftwzbanner from "@/components/shared/ftwzbanner";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "FTWZ Solutions for Foreign Exporters | Brubish Logistics",
  description:
    "Brubish FTWZ enables foreign exporters to access the Indian market without local registration or IEC. Start Exim operations in 1–2 days with duty deferment, simplified customs, and regional expansion support.",
  openGraph: {
    title: "FTWZ Solutions for Foreign Exporters | Brubish Logistics",
    description:
      "Foreign exporters can use Brubish FTWZ to establish stock points, defer duties, and simplify customs clearance without an Indian office. Expand to India, Nepal, Bangladesh, and more.",
    url: `${WEBSITE_URL}/ftwz-services/ftwz-for-foreign-exporters`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/brubish-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Brubish FTWZ for Foreign Exporters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FTWZ Solutions for Foreign Exporters | Brubish Logistics",
    description:
      "Operate in India without regulatory barriers. Brubish FTWZ enables seamless foreign exports with warehousing, duty deferment, and quick customs clearance.",
    images: [`${WEBSITE_URL}/logo/brubish-logo.webp`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/ftwz-services/ftwz-for-foreign-exporters`,
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Ftwzbanner title="BML FTWZ For Foreign Exporters" bgImg="/about/about.jpg" /> */}

      <div className="aspect-[2.67] max-md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-3.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      <div className="aspect-[1]  md:hidden ">
        <Image
          src="/ftwz/banners/ftwz-15.webp"
          width={1600}
          height={1000}
          alt="Small Square"
          className="w-full object-contain"
        />
      </div>
      {/* <Foreignexportsbanner/> */}
      <Oneforeignexport />
      <Twoforeignexport />
      <Threeforeignexport />
      <Fourforeignexport />
      {/* <Vasone/> */}
      <Ftwz4 />
      <Eximmap />

      {/* <Fourforeignexport/> */}
    </div>
  );
};

export default Page;
