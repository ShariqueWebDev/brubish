import React from "react";
// import Wrapper from "../Wrapper/Wrapper";
import {
  GiCargoShip,
  GiDeliveryDrone,
  GiForklift,
  GiMineTruck,
  GiPathDistance,
  GiTruck,
  GiWorld,
} from "react-icons/gi";
import WhyChooseCard from "./WhyChooseCard";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { Check } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <>
      <div className=" md:pb-10 md:pt-6 md:px-4 ">
        <div className="w-full flex justify-center gap-5 items-center md:flex-row flex-col ">
          <div className="md:w-[50%] w-full ">
            <h3 className="text-primary font-semibold md:text-2xl text-base uppercase">
              Why Choose Us – Brubish India Pvt. Ltd
            </h3>

            <div className="md:mt-5 mt-1">
              <h4 className="md:text-5xl text-2xl font-bold md:leading-[50px] leading-0">
                We Deliver{" "}
                <span className="text-mainColor4 md:text-5xl text-2xl font-bold">
                  Excellence{" "}
                </span>
                Globally
              </h4>
              <p className="text-sm mt-5 leading-7 text-gray-700">
                At Brubish India Pvt. Ltd., we specialize in providing reliable,
                efficient, and high-quality support for the marine and shipping
                industry. Here’s why vessel owners, operators, and marine
                engineers choose us:
              </p>
            </div>
            <Link href={"/contact-us"}>
              <div className="mt-5 flex gap-2 text-sm  items-center border border-primary w-fit px-3 py-1.5 rounded-md">
                <button className="uppercase font-semibold ">Know More </button>
                <MdOutlineArrowOutward size={15} color="gray" />
              </div>
            </Link>
          </div>
          <div className="relative mt-4 md:w-1/2 w-full max-sm:mt-7 h-[400px] overflow-hidden rounded-lg">
            {/* Background Image */}
            <Image
              src="/18.jpg"
              fill
              className="object-cover"
              alt="Whychoose2"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            {/* Text Content */}
            <ul className="absolute inset-0 z-20 text-white px-6 space-y-4 flex flex-col justify-center md:ml-32 ">
              <li className="flex items-center gap-2 text-sm">
                <span className="bg-primary rounded-full p-0.5">
                  <Check color="#fff" size={14} />
                </span>
                Optimized Logistics, Delivered with Precision
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="bg-primary rounded-full p-0.5">
                  <Check color="#fff" size={14} />
                </span>
                Tailored Marketing Strategies That Work
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="bg-primary rounded-full p-0.5">
                  <Check color="#fff" size={14} />
                </span>
                Real-Time Insights for Smarter Decisions
              </li>
              <li className="flex items-center gap-2 text-sm">
                {" "}
                <span className="bg-primary rounded-full p-0.5">
                  <Check color="#fff" size={14} />
                </span>
                Personalized Support at Every Step
              </li>
              <li className="flex items-center gap-2 text-sm">
                {" "}
                <span className="bg-primary rounded-full p-0.5">
                  <Check color="#fff" size={14} />
                </span>
                Robust Supply Chain Management
              </li>
              <li className="flex items-center gap-2 text-sm">
                {" "}
                <span className="bg-primary rounded-full p-0.5">
                  <Check color="#fff" size={14} />
                </span>
                A Network That Opens Doors
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-10 md:mt-16 mt-7 md:bg-[#f4f5f6] rounded-lg ">
          <WhyChooseCard
            icon={"/whychoose-icon/marine.png"}
            title="Marine Industry Expertise"
            description="With deep-rooted knowledge of vessel operations, maintenance, and procurement needs, we offer solutions tailored specifically for the shipping and offshore sectors.
"
            iconColor="white"
            iconSize={70}
          />
          <WhyChooseCard
            icon={"/whychoose-icon/supply.png"}
            title="Reliable Supply Chain"
            description="We ensure timely supply of marine spares, equipment, and consumables—minimizing downtime and keeping your vessels operational."
            iconColor="white"
            iconSize={70}
          />
          <WhyChooseCard
            icon={"/whychoose-icon/global.png"}
            title="Global Standards"
            description="Our products and services meet international maritime quality and safety standards, ensuring full compliance with classification societies and port regulations."
            iconColor="white"
            iconSize={70}
          />
          <WhyChooseCard
            icon={"/whychoose-icon/port.png"}
            title="Port-to-Deck Delivery"
            description="We understand the urgency of ship requirements. Our logistics are streamlined to deliver directly to vessels at port or offshore locations with minimal lead time."
            iconColor="white"
            iconSize={70}
          />

          <WhyChooseCard
            icon={"/whychoose-icon/24.png"}
            title="24/7 Support"
            description="Ships don’t wait—and neither do we. Our team is available around the clock to handle urgent requests, technical queries, and support needs."
            iconColor="white"
            iconSize={70}
          />

          <WhyChooseCard
            icon={"/whychoose-icon/team.png"}
            title="Experienced Team"
            description="Our marine professionals understand the complexities of vessel management and are equipped to offer the right solutions, the first time."
            iconColor="white"
            iconSize={70}
          />
          <WhyChooseCard
            icon={"/whychoose-icon/trust.png"}
            title="Trusted by Industry Leaders"
            description="Brubish is the preferred partner for several fleet managers, ship chandlers, and offshore operators across key maritime hubs."
            iconColor="white"
            iconSize={70}
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
