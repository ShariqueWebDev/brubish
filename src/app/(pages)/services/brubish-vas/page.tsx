import Ftwz4 from "@/components/ftwz/Ftwz4";
import Vasfive from "@/components/services/vas/Vasfive";
import Vasfour from "@/components/services/vas/Vasfour";
import Vasone from "@/components/services/vas/Vasone";
import Vasthree from "@/components/services/vas/Vasthree";
import Vastwo from "@/components/services/vas/Vastwo";
import Servicebanner3 from "@/components/shared/Servicebanner3";
import Submenu from "@/components/shared/Submenu";
import React from "react";

const sections = [
  {
    id: 1,
    name: "Brubish VAS",
    url: "#section1",
  },
  {
    id: 2,
    name: "Benefits",
    url: "#section2",
  },
  {
    id: 3,
    name: "VAS Offers",
    url: "#section3",
  },
  {
    id: 4,
    name: "Why Brubish",
    url: "#section4",
  },
  {
    id: 5,
    name: "FAQ's",
    url: "#section5",
  },
];

const Page = () => {
  return (
    <div className="">
      <Servicebanner3
        icon="/services/vas/banner.svg"
        heading="Brubish VAS"
        title="More Than Logistics"
        description="Brubish value-added services include packaging, labeling, and quality checks. Tailored solutions for your business needs."
        buttontext="Get Started"
        buttonlink="/services"
        bannerImage="/services/vas/1.png"
      />
      <Submenu sections={sections} />
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section1">
        <Vasfour />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section2">
        <Vasthree />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section3">
        {/* <Vasone/> */}
        <Ftwz4 />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section">
        <Vastwo />
      </div>
      <div className="scroll-mt-[25vh] md:scroll-mt-[20vh]" id="section4">
        <Vasfive />
      </div>
    </div>
  );
};

export default Page;
