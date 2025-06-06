import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Freightfive = () => {
  return (
    <div className="py-8  md:py-16">
      <div
        className={`flex  sjcontainer flex-col-reverse   md:flex-row items-center w-full `}
      >
        {/* Text Section */}

        <div className="relative max-md:mx-4 lg:inline-block hidden overflow-hidden font-medium group">
          <Image
            src="/services/freight.png"
            alt="banner"
            className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[550px]"
            width={600}
            height={80}
          />
        </div>

        <div className=" md:p-8 flex-1 group">
          <span className="text-sm text-left md:text-base font-bold py-1.5  text-gray-500 uppercase ">
            Our Vision
          </span>
          <p className="text-xl text-left md:text-3xl py-1.5  text-primary ">
            Shopify Merchants Can Save up to $1 Million with Brubish Fulfillment
          </p>
          <div className="relative  inline-block mt-3 lg:hidden font-medium group">
            <Image
              src="/services/freight.png"
              alt="banner"
              className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px] px-2"
              width={600}
              height={80}
            />
          </div>
          <div className="text-sm md:text-base text-gray-600 duration-300  mt-4 mb-7">
            As Shopify's official logistics partner, Brubish wants to help
            merchants ship faster, and accelerate their sales! Shopify merchants
            who are not currently using Brubish Fulfillment, can save 15% off
            their fulfillment services (up to $1 Million) through December
            2024.* Start saving and scale your business today!
          </div>
          <Link href="#sectioncontact">
            <div className="inline px-5 py-4 text-black bg-gradient-to-r border border-secondary hover:from-secondary rounded-md hover:to-secondary1 bg-[length:200%_100%] font-bold bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer">
              Get In Touch
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Freightfive




