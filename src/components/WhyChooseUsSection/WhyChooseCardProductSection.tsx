import Image from "next/image";
import React from "react";

const WhyChooseCardProductsection = ({ data }: { data: any }) => {
  return (
    <div className=" mb-5 ">
      <div
        className="flex gap-3 !w-full py-1"
        // style={{
        //   width: iconSize,
        //   height: iconSize,
        // }}
      >
        {/* <Icon size={40} color={"#ffb200 "} /> */}
        <div className="w-11">
          <Image src={data?.icon} width={100} height={100} alt={data?.title} />
        </div>
        <h4 className="text-xl font-semibold h-[65px]">{data?.title}</h4>
      </div>
      <hr className="mb-5 mt-1" />
      <div>
        <h6 className="md:text-sm text-xs !leading-6 tracking-wide text-gray-600 line-clamp-">
          {data?.desc}
        </h6>
      </div>
    </div>
  );
};

export default WhyChooseCardProductsection;
