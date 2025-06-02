"use client";
import React, { useState } from "react";
// import EmblaCarousel from '../emblathumbnail/EmblaCarousel'
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/emblathumbnail/EmblaCarousel";
import { Shield, PackageCheck, Truck, Box, Settings } from "lucide-react";
import Heading from "@/components/shared/Heading";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;

const SLIDES = [
  {
    id: 1,
    name: "First Mile",
    icon: <Truck size={25} />, // Truck for transportation from origin to port
    image: "/services/trucking/t11.png",
    title: "From Ex-work location in other country to the Port Of Loading.",
    description:
      "Get full protection for your goods during transportation, covering loss, theft, or damage from the point of origin to the destination.",
  },
  {
    id: 2,
    name: "Mid Mile",
    icon: <PackageCheck size={25} />, // PackageCheck for transport from port to FTWZ
    image: "/services/trucking/t12.png",
    title: "From Indian Port To Our Brubish FTWZ",
    description:
      "Protect your company from financial responsibility for damage, loss, or delays that happen while your goods are under our care.",
  },
  {
    id: 3,
    name: "Last Mile",
    icon: <Shield size={25} />, // Shield for the security of goods in final delivery
    image: "/services/trucking/t13.png",
    title: "From Brubish FTWZ direct delivery to your end consumer.",
    description:
      "Ensure that your stored goods are safe from unforeseen events like fire, theft, or natural disasters while they are in our warehouse.",
  },
  {
    id: 4,
    name: "Per Unit",
    icon: <Box size={25} />, // Box for per-unit or small-scale shipping solutions
    image: "/services/trucking/t14.png",
    title:
      "Solutions customized to per packet, per tonnes per unit shipped directly from Brubish FTWZ to end consumer.",
    description:
      "Ensure that your stored goods are safe from unforeseen events like fire, theft, or natural disasters while they are in our warehouse.",
  },
  {
    id: 5,
    name: "Managed Services",
    icon: <Settings size={25} />, // Settings for end-to-end managed services
    image: "/services/trucking/t15.png",
    title: "End to End management of delivery service",
    description:
      "Ensure that your stored goods are safe from unforeseen events like fire, theft, or natural disasters while they are in our warehouse.",
  },
];

const Truckthree = () => {
  const [activeindex, setActiveindex] = useState(1);

  return (
    <div className="  ">
      <div className="sjcontainer py-12">
        <Heading
          className=" ml-16  mb-12 text-left max-md:text-2xl md:text-center"
          title={
            <span>
              From First-Mile to Last-Mile, <br />
              We've Got You Covered!
            </span>
          }
        />
        <div className="flex items-center  flex-col-reverse md:flex-row">
          <div className="md:w-[40%] md:mt-32   mx-auto text-center p-4">
            <h2 className=" text-xl max-md:mt-4 md:text-3xl font-[500]">
              {SLIDES[activeindex].title}
            </h2>
            {/* <p className=' px-2 text-xs md:text-base mt-5 text-gray-500'>{SLIDES[activeindex].description}</p> */}
          </div>
          <div className="md:w-[60%]">
            <EmblaCarousel
              setActiveindex={setActiveindex}
              slides={SLIDES}
              options={OPTIONS}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Truckthree;
