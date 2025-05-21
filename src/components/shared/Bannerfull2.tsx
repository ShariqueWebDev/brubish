import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bannerfull2 = ({ title, bgImg, icon,description,page }) => {
  return (
    <div className="relative ">
      <div
        className="bg-bottom  text-white py-12 md:py-36 object-cover relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r  from-black/80 via-black/40 to-black/70 opacity-60 "></div>
        <div className="flex flex-col items-center justify-center relative z-10">
          <h2 className="text-xl md:text-2xl text-center text-white lg:text-5xl uppercase font-[400]">
            {title}
          </h2>
          <div>
            <ul className="flex items-center text-sm justify-center gap-1 pt-2">
              <li className="font-medium text-white">
                <Link href="/">Home</Link>
              </li>
              <ChevronRight size={19} color="white" className="text-white" />
              <li className="text-white">{page}</li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Bannerfull2;
