import Image from "next/image";
import React from "react";
import Heading from "../shared/Heading";

const Homemap = () => {
  return (
    <div className=" my-8 md:mt-12">
      {/* <Heading title='Locations We Serve' className='text-center mb-4' /> */}
      {/* <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-5'></div> */}
      <div className=" mb-8 mt-10 max-sm:px-2">
        <h3 className="text-black uppercase  md:text-3xl text-2xl font-bold  mb-4 text-center">
          Our Location{" "}
        </h3>

        <p className="text-black/[0.7] text-sm text-center md:px-60 ">
          We transform commodities by bridging the gap between regions of
          abundance and areas of demand, ensuring they reach where they are
          needed most.
        </p>
      </div>{" "}
      <Image
        src="/brubish-map.png"
        width={1600}
        height={800}
        alt="Brubish Desktop"
        className="aspect-[4/1.8]   max-sm:hidden w-full !object-contain"
      />
      <Image
        src="/home/map-image-mobile.png"
        width={800}
        height={800}
        alt="Brubish Mobile"
        className="aspect-[1] pr-2 sm:hidden w-full !object-contain"
      />
    </div>
  );
};

export default Homemap;
