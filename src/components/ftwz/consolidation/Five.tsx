import Vasone from "@/components/services/vas/Vasone";
import Heading from "@/components/shared/Heading";
import Image from "next/image";
import React from "react";

const Five = () => {
  return (
    <div className="py-10 bg-amber-50">
      <Heading
        className=" mb-4 md:mb-6 text-center"
        title={`Transaction Flow`}
      />

      <Image
        src="/ftwz/consolidation/ftwz-10.webp"
        alt="consolidation"
        width={1600}
        height={1200}
        className="w-full  !object-contain  max-w-[1100px] mx-auto"
      />
    </div>
  );
};

export default Five;
