import Heading from "@/components/shared/Heading";
import Subheading from "@/components/shared/Subheading";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const imports = [
  "Stabilize price + supply of raw materials; boost Make in India",
  "Reduce cost + overhead of Indian manufacturers ",
  "Encourage micro-manufacturing in India and then re-export",
  "Innovative solutions for e-Commerce and others (like used cars)",
  "Fully leverage India’s advantage of skill + cost",
  "Hold inventory for up to 2 years w/o duty to adjust to business needs",
];

const Four = () => {
  return (
    <div className="sjcontainer my-8  md:my-20">
      <div>
        <Subheading
          className="text-center mt-10 mb-6"
          title="FTWZ based Supply Chain (Imports) - Process
"
        />
        <Image
          src="/ftwz/ftwz-2.webp"
          alt="fig"
          width={1400}
          height={700}
          className=""
        />
        <div className="grid sm:grid-cols-[35%,65%] sm:space-x-8 max-w-[1000px] mt-10  mx-auto">
          <Subheading
            title="A Sea Change for Indian Efficiency"
            className=" m-auto text-center"
          />
          <div>
            {imports.map((item, index) => (
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
  );
};

export default Four;
