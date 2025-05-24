import Heading from "@/components/shared/Heading";
import Subheading from "@/components/shared/Subheading";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const exports = [
  "Global buying + selling on same platform; global market; boost exports",

  "APEDA/MPEDA + international approved labs; no overseas rejection; peace of mind",

  "Boost price / profit for commodities; Double Farmers’ Income (DFI) by 2022",

  "All support activities under 1 roof in an integrated manner",

  "Incentivize Make in India",

  "End point collection facility available for Brubish FTWZ linked exporters",
];

const Four = () => {
  return (
    <div className="bg-amber-50">
      <div className="sjcontainer py-8 md:py-16  ">
        <div>
          <Subheading
            className="text-center  mb-6"
            title="FTWZ based Supply Chain (Exports) - Process
"
          />
          <Image
            src="/ftwz/ftwz-7.webp"
            alt="fig"
            width={1400}
            height={700}
            className=" "
          />

          <div className="grid sm:grid-cols-[35%,65%] sm:space-x-8 max-w-[1000px] mt-10  mx-auto">
            <Subheading
              title="A Paradiagram Shift for Indian Exports"
              className="m-auto text-center"
            />

            <div className="mt-2">
              {exports.map((item, index) => (
                <div key={index} className="py-4  flex items-center gap-x-4">
                  <div className="text-center">
                    <CheckCircle size={20} />
                  </div>
                  <div className="">
                    <h3 className="text-sm md:text-base">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
