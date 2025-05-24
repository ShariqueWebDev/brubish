import Image from "next/image";
import React from "react";
import Subheading from "../shared/Subheading";

const Eximmap = () => {
  return (
    <div className=" md:my-16 sjcontainer">
      <Subheading
        title="Brubish - an E2E EXIM Logistics Solution"
        className=" text-center mb-4 lg:mb-8 mt-4 lg:mt-10"
      />
      <Image
        src="/eximap.webp"
        alt="map"
        height={1600}
        width={1400}
        className=" mx-auto !object-contain max-lg:hidden"
      />
      <div className="lg:hidden ">
        <Image
          src="/housemap1.png"
          alt="map"
          height={1400}
          width={1400}
          className="w-full mx-auto !object-contain my-4"
        />
        <div className=" text-gray-700 text-[15px] md:text-base flex flex-col space-y-3">
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">1.</p> Inbound
            Logistics
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">2.</p> Container
            storage & connection points for reefers
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">3.</p> Warehouses with
            G+6 rack storage
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">4.</p> Computerised
            Warehouse management sytem
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">5.</p> Dedicated
            storage for hazardous material
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">6.</p> Cold rool
            facilities (15-25C)
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">7.</p> De-bulking & SKU
            wise stocking
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">8.</p> Tagging
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">9.</p> Re-labelling
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">10.</p> Quality
            Assurance
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">11.</p> Packing
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">12.</p> Bottling
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">13.</p> Bubble Wrapping
            & Bagging
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">14.</p> Centralized
            customs clearance desk & 24x7 security
          </p>
          <p className="flex items-start">
            <p className="p-0.5 text-center w-8  mr-1  ">15.</p> Outbound
            logistics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eximmap;
