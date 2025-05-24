import Heading from "@/components/shared/Heading";
import Subheading from "@/components/shared/Subheading";
import Image from "next/image";
import React from "react";

const One = () => {
  return (
    <div className="bg-amber-50">
      <div className="sjcontainer  py-8 md:py-20">
        <Subheading
          title="A Sea Change for Indian e-Commerce Efficiency"
          className=" m-auto text-center"
        />
        <Image
          src="/ftwz/ftwz-8.webp"
          alt="fig"
          width={1400}
          height={700}
          className=""
        />
      </div>
    </div>
  );
};

export default One;
