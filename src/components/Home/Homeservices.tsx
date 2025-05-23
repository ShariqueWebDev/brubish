import { servicesData } from '@/app/layout';
import Image from 'next/image';
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react'; // Assuming you're using Lucide icons
import Link from 'next/link';
import Heading from '../shared/Heading';

const Homeservices = () => {
  return (
    <div className=" flex  flex-col  items-center sjcontainer my-14 md:my-20">
      {/* First Row: 1 -> 2 -> 3 -> 4 */}

      <Heading title="Services Brubish Offers" />
      <div className="max-lg:hidden mt-10">
        <div className=" grid lg:grid-cols-4 items-center max-lg:gap-10  mb-16">
          {servicesData.slice(0, 4).map((service, index) => (
            <Link
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              href={`/services/${service?.url}`}
              className=" flex  items-center group  px-4"
            >
              <div className=" text-center">
                <Image
                  src={service.logo}
                  alt={service.name}
                  width={60}
                  height={60}
                  className="mx-auto w-20"
                />
                {/* <h3 className=" text-sm  font-bold  text-gray-600 tracking-widest   mt-2"> Step </h3> */}
                <h3 className=" text-xl  font-[500]  tracking-wide mt-4 group-hover:text-amber-500 ">
                  {" "}
                  {index + 1}. {service.name}
                </h3>
                <p className=" text-sm text-gray-600  mt-1">
                  {service.description}
                </p>
              </div>
              {index < 3 && (
                // Arrow between the services, skipping the last one in the row
                <div className=" mx-4 max-lg:hidden -mb-9 flex  justify-end items-center w-24 h-[2px] bg-black">
                  <ChevronRight
                    name="arrow-right"
                    size={24}
                    strokeWidth={2}
                    className=" -mr-2.5 text-accent-500"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Second Row: 5 -> 6 -> 7 */}
        <div className=" grid lg:grid-cols-4   items-center max-lg:gap-10  mb-8">
          {servicesData.slice(4, 8).map((service, index) => (
            <Link
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              href={`/services/${service?.url}`}
              key={service.id}
              className=" flex  group  items-center  px-4"
            >
              <div className=" text-center ">
                <Image
                  src={service.logo}
                  alt={service.name}
                  width={60}
                  height={60}
                  className="mx-auto w-20"
                />
                {/* <h3 className=" text-sm  font-bold  text-gray-600 tracking-widest   mt-2"> Step </h3> */}
                <h3 className=" text-xl  font-[500]  tracking-wide mt-4 group-hover:text-amber-500 ">
                  {" "}
                  {index + 5}. {service.name}
                </h3>
                <p className=" text-sm text-gray-600  mt-1">
                  {service.description}
                </p>
              </div>
              {index < 3 && (
                // Arrow between the services, skipping the last one in the row
                <div className=" mx-4 -mb-9  max-lg:hidden flex  justify-end items-center w-24 h-[2px] bg-black">
                  <ChevronRight
                    name="arrow-right"
                    size={24}
                    strokeWidth={2}
                    className=" -mr-2.5 text-accent-500"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:hidden mt-4 ">
        {servicesData?.map((data, index) => {
          return (
            <div data-aos="fade-up" className="py-5 group pr-1 relative">
              <Link
                href={`/services/${data?.url}`}
                key={data.id}
                className="flex   space-x-4 items-start group  "
              >
                <div className="ml-2">
                  <Image
                    src={data.logo}
                    alt={data.name}
                    width={60}
                    height={60}
                    className="mx-auto min-w-[60px] w-12 sm:w-20"
                  />
                </div>
                <div className="">
                  <h3 className=" text-sm text-gray-600 ">Step: {index + 1}</h3>
                  <h3 className=" text-xl  font-[500]  tracking-wide text-amber-500 ">
                    {data.name}
                  </h3>
                  <p className=" text-sm  group-hover:text-black duration-300 mt-1 text-gray-600">
                    {data.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homeservices;
