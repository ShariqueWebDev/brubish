import Heading from "@/components/shared/Heading";
import Subheading from "@/components/shared/Subheading";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const customsDutiesData = [
  "Defer payment of customs duties & taxes till the removal of goods from FTWZ even up to five years",
  "Faster /express clearance from port/ Airport (direct out from gateway port to FTWZ)",
  "On wheel clearance' with 24hrs after container out from Port and clearance from FTWZ after duty payment within 2 to 3 hrs (after seal verification/Custom inspection)",
  "PLA facility (custom duty deposit with custom) for quick custom duty payment or immediate duty payment for custom clearance from FTWZ custom",
  "Custom officers (AO/EO/PO) are stationed at FTWZ for faster clearance",
  "Work on NSDL online filling which much faster than ICEgate online filling",
];

const One = () => {
  return (
    <div className="bg-amber-50">
      <div className=" sjcontainer py-8 md:py-24">
        <div className="grid lg:grid-cols-[45%,55%] items-start lg:space-x-10">
          <Subheading
            className=" mb-2 lg:hidden  "
            title="Features of Free Trade Warehousing Zone for Exporters"
          />
          <div data-aos="fade-right" className=" h-[300px] md:h-[500px]">
            <Image
              src="/ftwz/indian-exporters/1.png"
              alt="indian importers"
              width={1000}
              height={1000}
              className="w-full h-full !object-cover"
            />
          </div>
          <div className="  ">
            <Heading
              className=" max-lg:hidden text-xl md:text-3xl"
              title="Features of Free Trade Warehousing Zone for Indian Exporters"
            />
            <ul className=" space-y-6 md:space-y-4 my-6">
              {customsDutiesData.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  className="flex text-sm md:text-[15px]  text-gray-700 items-center space-x-2  duration-200"
                >
                  <CheckCircle className="text-amber-500 min-w-10 " size={24} />
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
