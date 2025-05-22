"use client";
import React, { useEffect } from "react";
import Homebanner from "./Homebanner";
import Fouricons from "./Fouricons";
// import Leftrightsection from './Leftrightsection'
import Sectors from "./Sectors";
import Parallex from "./Parallex";
import Whybml from "./Whybml";
import Imagevector from "./Imagevector";

import Homeinfo from "./Homeinfo";
import Freightthree from "../services/freight/Freightthree";
import Homeservices from "./Homeservices";
import Homemap from "./Map";
import Link from "next/link";
import { ArrowRight, Factory } from "lucide-react";
import Image from "next/image";
import { BiWorld } from "react-icons/bi";
import { SiMarketo } from "react-icons/si";
import BinfinitMainDivComp from "../Others/BinfinitMainDivComp";
import BinfinitMainDivCompReversed from "../Others/BinfinitMainDivCompReverse";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";

export const reverseData = [
  {
    id: 1,
    title: "Consumer Goods",
    img: "/banners/cons.jpg",
    desc: "At Brubish, we transform consumer goods from regions of abundance to where they are most needed, meeting the demands of customers across the globe.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
  {
    id: 2,
    title: "Paper",
    img: "/products/paper/paper2.jpg",
    desc: "At Brubish, we specialize in transforming paper from regions of abundance to where it is most needed, serving the needs of customers around the world.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
  {
    id: 3,
    title: "Projects / Machinery",
    img: "/machinery11.jpg",
    desc: "We specialize in transforming commodities from regions of abundance to where they are needed most, providing essential machinery and resources to power critical industries and build a sustainable future.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
  {
    id: 4,
    title: "Global Trading",
    img: "/trading1.webp",
    desc: "Our foundations lie in bridging global supply and global demand. We do this through optimising the transport, storage and distribution of bulk raw materials. Through our global network, we understand the nuances of each market, catering to distinct local needs in the context of global trading conditions.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
];

const sections = [
  {
    banner_image: "/global.jpg",
    alt: "Global Footprint",
    expertise_title: "Global Footprint",
    banner_description:
      "Brubish connects businesses worldwide, optimizing the flow of commodities to bridge the gap between regions of surplus and demand.",

    slug: "/contact",
    icon: <BiWorld size={30} className="text-white" />,
  },
  // {
  //   banner_image: "/banners/ban13.jpg",
  //   alt: "Massive Trade Operations",
  //   expertise_title: "1 Million Tons",
  //   banner_description:
  //     "Managing over 1 million tons of commodities annually, Brubish streamlines supply chains with precision and reliability.",
  //   slug: "/our-commodities",
  //   icon: <SiCoinmarketcap size={30} className="text-white" />,
  // },
  {
    banner_image: "/ban11.jpg",
    alt: "marketing",
    expertise_title: "Brubish Marketing",
    banner_description:
      "Innovative marketing strategies enhance commodity visibility, ensuring businesses thrive in competitive markets.",

    slug: "/binfinit-marketing",

    icon: <SiMarketo size={30} className="text-white" />,
  },
  {
    banner_image: "/manufacture.avif",
    alt: "Commodities",
    expertise_title: "Commodities",
    banner_description:
      "Brubish leverages advanced technology to deliver actionable insights, enhancing the efficiency and value of commodities globally.",
    slug: "/our-commodities",

    icon: <Factory size={30} className="text-white" />,
  },
];

const Homewrapper = () => {
  return (
    <div className="">
      <Homebanner />
      <div className="mt-4 md:px-4 px-0  md:my-16 md:sjcontainer">
        <div className="md:px-16 ">
          <div className=" mb-8 mt-10">
            <h3 className="text-black  md:text-3xl text-2xl font-bold  mb-4 md:text-start text-center">
              About Us{" "}
            </h3>

            <p className="text-black/[0.7] md:text-lg text-base md:text-start text-center">
              We transform commodities by bridging the gap between regions of
              abundance and areas of demand, ensuring they reach where they are
              needed most.
            </p>
          </div>{" "}
          <div className="grid-cols-2 grid md:grid-cols-3 gap-2 md:gap-4 ">
            {sections.map((section, index) => (
              <div
                key={index}
                className="relative w-full bg-black h-[270px] md:h-[400px] overflow-hidden group rounded-lg overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={section.banner_image}
                  alt={section.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0 transition-transform duration-500 ease-in-out group-hover:translate-x-[500px] group-hover:translate-y-[500px]"
                  width={800}
                  height={500}
                />

                {/* Content on top of the background */}
                <div className="relative z-10 p-3 px-2 md:p-6 text-white h-[270px] md:h-[400px] transition-colors duration-300 delay-1000 ease-in-out">
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <h3 className="text-base md:text-2xl text-left group-hover:text-primary font-semibold">
                      {section.expertise_title}
                    </h3>
                  </div>
                  <div
                    className="mt-1 md:mt-4 text-xs md:text-base line-clamp-6 transition-transform duration-500 ease-out group-hover:translate-x-0 translate-x-[500px]"
                    dangerouslySetInnerHTML={{
                      __html: section.banner_description,
                    }}
                  />

                  {/* Link positioned at the bottom */}
                  <Link
                    href={`${section.slug}`}
                    className="absolute flex items-center duration-300 translate-y-10 group-hover:translate-y-0 bottom-2 right-2 text-white hover:text-primary-dark font-bold hover:text-primary"
                  >
                    Explore <ArrowRight strokeWidth={3} size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-16">
        <div className="py-12 md:px-4 px-1">
          <div className=" mb-8">
            <h3 className="text-black  md:text-3xl text-2xl font-bold  mb-4 md:text-start text-center">
              Our Commodities{" "}
            </h3>

            <p className="text-black/[0.7] md:text-sm text-sm md:text-start text-center">
              Responsibly sourcing the commodities that advance everyday life.
            </p>
          </div>{" "}
          <div className="rounded-lg overflow-hidden">
            <BinfinitMainDivComp
              title={"Powering the Future"}
              desc={
                "Our energy solutions fuel homes, industries, and economies. See how we ensure reliable and sustainable energy distribution."
              }
              img={"/commodities.svg"}
              viewtxt={"Find out more about our business"}
              viewmoreredirect={"/our-commodities"}
            />
          </div>
        </div>

        <div className="px-4 rounded-lg overflow-hidden ">
          <BinfinitMainDivCompReversed data={reverseData[3]} />
        </div>

        <div className="py-12 md:px-4 px-1 rounded-lg overflow-hidden ">
          <BinfinitMainDivComp
            title={"Brubish Marketing"}
            desc={
              "At Brubish, we specialize in  commodities, moving them from regions of abundance to where they are most needed. See how we support industries and economies worldwide."
            }
            img={"/mining1.webp"}
            viewtxt={"Find out more about our business"}
            viewmoreredirect={"/our-commodities"}
          />
        </div>
        <div className="">
          <WhyChooseUsSection />
        </div>

        {/* <div data-aos="fade-bottom">
        <Homeinfo />
      </div>
      <div data-aos="fade-bottom">
      <Freightthree />
      </div>
      <div data-aos="fade-bottom">
      <Homeservices />
      </div>
      <div data-aos="fade-bottom">
        <Whybml />
      </div> */}
        {/* <div data-aos="fade-bottom" >
      <Imagevector/>
      </div> */}
        {/* <Leftrightsection/> */}
        {/* <div data-aos="fade-bottom">
        <Sectors />
      </div> */}
        {/* <Shipmentsteps/> */}

        <div data-aos="fade-bottom">
          <Homemap />
        </div>
      </div>
      {/* <Parallex/> */}
    </div>
  );
};

export default Homewrapper;
