import Image from "next/image";
import React from "react";
import Heading from "../shared/Heading";

const Ftwz1 = () => {
  return (
    <div className=" sjcontainer my-8 md:my-24    lg:flex lg:justify-center  lg:items-center lg:space-x-10">
      <div className="lg:hidden block">
        <h2 className=" font-[400] text-xl"></h2>
        <Heading title="Brubish Free Trade Warehousing Zone" />
        {/* <p className='text-gray-600 text-base mt-2'>On your mark get set and go now Got a dream and we just know now.</p> */}
      </div>
      <div className=" border-primary   lg:w-[50%] max-w-[320px] max-lg:my-8 mx-auto md:max-w-[400px] rounded-full  overflow-hidden  aspect-square ">
        <Image
          src="/services/ftwz/2.png"
          alt="truck"
          className=" w-full h-full mx-auto max-w-[320px] border-secondary  md:max-w-[400px]  !object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="lg:w-[50%] ">
        <div className="hidden lg:block">
          <Heading title="Brubish Free Trade Warehousing Zone" />
          {/* <p className='text-gray-600 text-base mt-2'>On your mark get set and go now Got a dream and we just know now.</p> */}
        </div>
        <div className=" text-base space-y-10 md:space-y-6  my-8">
          <div className="lg:flex items-start max-lg:space-y-4 lg:space-x-4">
            <Image
              src="/ftwz/i1.png"
              width={100}
              height={100}
              alt="icon1"
              className="w-16"
            />
            <h2 className="text-sm md:text-base">
              {" "}
              Special Economic Zone where trading, warehousing, & other
              activities such as packaging, labelling, re-sale,
              re-export,export, import, transhipment are carried out with duty
              free import, pay duties only when sold in DTA.
            </h2>
          </div>

          <div className="lg:flex items-start max-lg:space-y-4 lg:space-x-4">
            <Image
              src="/ftwz/i3.png"
              width={100}
              height={100}
              alt="icon1"
              className="w-16"
            />
            <h2 className="text-sm md:text-base">
              It encourages foreign trade and warehousing activities for
              overseas and Indian entities provides an integrated platform for
              sourcing & distribution management, including trading (in and out
              of India), thus reducing operational costs, especially without own
              setup.
            </h2>
          </div>
          <div className="lg:flex items-start  max-lg:space-y-4 lg:space-x-4">
            <Image
              src="/ftwz/i2.png"
              width={100}
              height={100}
              alt="icon1"
              className="w-16"
            />
            <h2 className="text-sm md:text-base">
              Deemed Foreign Territory within the geography of India for the
              purpose of tariff & trade.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ftwz1;
