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

const WhyChooseUsSection = () => {
  return (
    <>
      <div className="md:py-24 py-12">
        <div className="w-full flex flex-col md:flex-row md:px-4 gap-3">
          <div className="w-full md:w-[40%]">
            <h3 className="text-mainColor4 font-semibold md:text-2xl text-base uppercase">
              Why Choose Us
            </h3>

            <div className="md:mt-5 mt-1">
              <h4 className="md:text-5xl text-3xl font-bold md:leading-[50px] leading-0">
                We Deliver{" "}
                <span className="text-mainColor4 md:text-5xl text-3xl font-bold">
                  Excellence{" "}
                </span>
                Globally
              </h4>
            </div>

            <div className="mt-4">
              <p className="text-sm">
                At Binfinit, we combine innovative solutions, reliable services,
                and a robust network to empower businesses. From optimized
                logistics to tailored marketing strategies, we ensure your
                success on every front. Our commitment to excellence drives us
                to deliver seamless supply chain management, real-time insights,
                and personalized support, enabling you to focus on growing your
                business.
              </p>

              <Link href={"/contact"}>
                <div className="mt-5 flex gap-2 items-center ">
                  <button className="uppercase font-semibold">
                    Read More{" "}
                  </button>
                  <MdOutlineArrowOutward size={17} color="black" />
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[60%]">
            <div className="flex flex-col md:flex-row  gap-5 w-full">
              <div className="space-y-5 md:w-1/2 w-full mt-6 md:mt-0">
                <WhyChooseCard
                  icon={GiDeliveryDrone}
                  title="Fast  Delivery"
                  description="Our swift and efficient delivery services ensure your packages reach their destinations safely, on time, and with real-time tracking for peace of mind at every step."
                  iconColor="white"
                  iconSize={70}
                />
                <WhyChooseCard
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
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <WhyChooseCard
                  icon={GiPathDistance}
                  title="Efficient Supply Chain"
                  description="Streamline your supply chain with our optimized logistics solutions, ensuring seamless coordination between sourcing, storage, and delivery for maximum business efficiency and customer satisfaction."
                  iconColor="white"
                  iconSize={70}
                />
                <div className="">
                  <Image
                    src={"/18.jpg"}
                    width={800}
                    height={800}
                    alt="Whychoose2"
                  />
                </div>
                <WhyChooseCard
                  icon={GiTruck}
                  title="Innovative Transportation"
                  description="Utilizing cutting-edge technology and eco-friendly practices, we provide advanced transportation services tailored to modern logistics challenges and evolving customer expectations."
                  iconColor="white"
                  iconSize={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
