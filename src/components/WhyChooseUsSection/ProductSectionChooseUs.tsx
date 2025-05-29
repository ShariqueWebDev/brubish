import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import WhyChooseCard from "./WhyChooseCard";
import {
  GiCargoShip,
  GiDeliveryDrone,
  GiForklift,
  GiPathDistance,
  GiTruck,
  GiWorld,
} from "react-icons/gi";
import WhyChooseCardProductsection from "./WhyChooseCardProductSection";

const ProductSectionChooseUs = ({ data }: { data: any }) => {
  return (
    <div>
      <>
        <div className=" md:pb-10 md:pt-6 md:px-4 ">
          <div className="w-full flex justify-center gap-5 items-center md:flex-row flex-col ">
            <div className="md:w-[50%] w-full ">
              <h3 className="text-primary font-semibold md:text-2xl text-base uppercase">
                Why Choose Us
              </h3>

              <div className="md:mt-5 mt-1">
                <h4 className="md:text-5xl text-2xl font-bold md:leading-[50px] leading-0">
                  {/* We Deliver{" "}
                  <span className="text-mainColor4 md:text-5xl text-2xl font-bold">
                    Excellence{" "}
                  </span>
                  Globally */}
                  {data?.whyChooseUs?.title}
                </h4>
                <p className="text-sm mt-5 leading-7 text-gray-700">
                  {data?.whyChooseUs?.desc1}
                </p>
                <p className="text-sm mt- leading-7 text-gray-700">
                  {data?.whyChooseUs?.desc2}
                </p>
              </div>
              <Link href={"/contact-us"} className="">
                <div className="mt-5 flex gap-2 text-sm   items-center border border-primary !w-fit px-3 py-1.5 rounded-md">
                  <button className="uppercase font-semibold ">
                    Know More{" "}
                  </button>
                  <MdOutlineArrowOutward size={15} color="gray" />
                </div>
              </Link>
            </div>
            <div className="relative mt-4 md:w-1/2 w-full max-sm:mt-7 h-[400px] overflow-hidden rounded-lg">
              {/* Background Image */}
              <Image
                src={data?.whyChooseUs?.imgPath}
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
            {data?.whyChooseUs?.PartSpeciality?.map(
              (item: any, index: number) => {
                return <WhyChooseCardProductsection key={index} data={item} />;
              }
            )}
            {/* <WhyChooseCard
              icon={GiWorld}
              title="Global  Network"
              description="Our robust global logistics network connects your business to international markets, offering seamless transportation solutions that span continents and ensure your goods are delivered without any delays."
              iconColor="white"
              iconSize={70}
            />
            <WhyChooseCard
              icon={GiForklift}
              title="Warehousing Solutions"
              description="We offer secure, state-of-the-art warehousing facilities tailored to your needs, with efficient inventory management systems that optimize storage and streamline the distribution process for ultimate convenience."
              iconColor="white"
              iconSize={70}
            />
            <WhyChooseCard
              icon={GiCargoShip}
              title="Specialized  Services"
              description="Our specialized freight services cater to unique shipping requirements, ensuring safe, reliable, and cost-effective transport solutions for all types of cargo, from standard shipments to oversized loads."
              iconColor="white"
              iconSize={70}
            />

            <WhyChooseCard
              icon={GiPathDistance}
              title="Efficient Supply Chain"
              description="Streamline your supply chain with our optimized logistics solutions, ensuring seamless coordination between sourcing, storage, and delivery for maximum business efficiency and customer satisfaction."
              iconColor="white"
              iconSize={70}
            />

            <WhyChooseCard
              icon={GiTruck}
              title="Innovative Transportation"
              description="Utilizing cutting-edge technology and eco-friendly practices, we provide advanced transportation services tailored to modern logistics challenges and evolving customer expectations."
              iconColor="white"
              iconSize={70}
            /> */}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductSectionChooseUs;
