import Subheading from '@/components/shared/Subheading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Vasfour = () => {
  return (
    <div className="my-8 md:my-16">
      <div
        className={`flex  sjcontainer flex-col-reverse   md:flex-row items-center w-full `}
      >
        {/* Text Section */}

        <div className="relative max-md:mx-4 lg:inline-block hidden overflow-hidden font-medium group">
          <Image
            src="/services/vas/2.png"
            alt="banner"
            className="!object-cover rounded-lg group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[550px]"
            width={600}
            height={80}
          />
        </div>

        <div className=" md:p-8 flex-1 group">
          <span className="text-sm text-left md:text-base font-bold py-1.5  text-gray-500 uppercase ">
            Your all-in-one Partner
          </span>
          <Subheading
            className="text-left my-1"
            title="Comprehensive Logistics Solutions, Tailored Just for You"
          />
          <div className="relative inline-block mt-3 lg:hidden font-medium group">
            <Image
              src="/services/vas/2.png"
              alt="Brubish services banner"
              className="!object-cover rounded-lg group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px] px-2"
              width={600}
              height={80}
            />
          </div>
          <div className="text-sm md:text-base text-gray-600 duration-300 mt-4 mb-7">
            At Book My Logistics (Brubish), we go beyond traditional logistics.
            Our value-added services include Customs Brokerage, Trade Finance
            Solutions, Real-Time Tracking, and Cargo Insurance. Whether you're
            managing complex trade routes or need streamlined order management,
            we ensure that every aspect of your logistics journey is handled
            with precision. Experience the difference of a logistics partner who
            cares about efficiency and transparency at every step.
          </div>
        </div>
      </div>
    </div>
  );
}








export default Vasfour
