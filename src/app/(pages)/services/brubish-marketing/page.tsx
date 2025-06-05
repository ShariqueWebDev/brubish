import { WEBSITE_URL } from "@/app/layout";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Sectors from "@/components/Home/Sectors";
import Eximmap from "@/components/services/Eximmap";
import Marketingthree from "@/components/services/sourcing/Marketingthree";
import HowItWorks from "@/components/services/sourcing/Marketingtwo";
import Sourcingfive from "@/components/services/sourcing/Sourcingfive";
import Sourcingfour from "@/components/services/sourcing/Sourcingfour";
import Sourcingseven from "@/components/services/sourcing/Sourcingseven";
import Sourcingsix from "@/components/services/sourcing/Sourcingsix";
// import Sourcingthree from '@/components/services/sourcing/Sourcingthree'
import Sourcingtwo from "@/components/services/sourcing/Sourcingtwo";
import Gofurther from "@/components/shared/Gofurther";
import Servicebanner2 from "@/components/shared/Servicebanner2";
import Servicebanner3 from "@/components/shared/Servicebanner3";
import Servicebanner5 from "@/components/shared/Servicebanner5";
import Submenu from "@/components/shared/Submenu";
import { Metadata } from "next";
import React from "react";

const sections = [
  {
    id: 1,
    name: "Brubish Marketing",
    url: "#section1",
  },
  {
    id: 2,
    name: "Advantage",
    url: "#section2",
  },
  {
    id: 3,
    name: "Sectors",
    url: "#section3",
  },

  {
    id: 4,
    name: "FAQ's",
    url: "#section4",
  },
];

export const metadata: Metadata = {
  title: "Brubish Marketing – Global Sourcing & Commodity Delivery Solutions",
  description:
    "Accelerate your commodity sourcing and delivery with Brubish Marketing. Reach global markets, optimize logistics, and enhance customer satisfaction with our FTWZ-based E2E supply chain services.",
  openGraph: {
    title: "Brubish Marketing – Global Sourcing & Commodity Delivery Solutions",
    description:
      "Revolutionize your sourcing journey with Brubish. We connect commodities from abundant regions to high-demand markets with FTWZ storage, last-mile delivery, and real-time visibility.",
    url: `${WEBSITE_URL}/services/brubish-marketing`,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/logo/brubish-favicon.jpeg`,
        width: 1200,
        height: 630,
        alt: "Brubish Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brubish Marketing – Global Sourcing & Commodity Delivery Solutions",
    description:
      "Brubish offers full-spectrum commodity marketing and logistics from sourcing to last-mile delivery. Trusted by pharma, FMCG, electronics, auto, and luxury brands.",
    images: [`${WEBSITE_URL}/logo/brubish-favicon.jpeg`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}/services/brubish-marketing`,
  },
};

const Page = () => {
  return (
    <div>
      <Servicebanner3
        icon="/services/icons/marketing.png"
        heading="Brubish Marketing"
        title="Reach Your Customers Faster"
        description="Brubish optimizes supply chains to ensure your products reach the right audience quickly. Reduce lead times and boost market presence."
        buttontext="Get Started"
        buttonlink="/services"
        bannerImage="/services/marketing/banner.png"
      />
      <Submenu sections={sections} />
      {/* <Marketingthree/> */}
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section1">
        <HowItWorks />
        <Sourcingseven />
      </div>

      {/* <Sourcingsix/> */}
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section2">
        <Sourcingtwo />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section3">
        <Sectors />
        <Ftwz4 />
        <Eximmap />
      </div>
      {/* <Gofurther/> */}
    </div>
  );
};

export default Page;
