import Heading from '@/components/shared/Heading'
import Subheading from '@/components/shared/Subheading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Financeeight = () => {
  return (
    <div className="py-8">
      <div
        className={`flex  sjcontainer flex-col-reverse   md:flex-row items-center w-full `}
      >
        {/* Text Section */}

        <div className="relative max-md:mx-4 lg:inline-block hidden overflow-hidden font-medium group">
          <Image
            src="/services/finance/4.png"
            alt="banner"
            className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[550px]"
            width={600}
            height={80}
          />
        </div>

        <div className=" md:p-8 flex-1 group">
          <span className="text-sm text-left md:text-base font-bold py-1.5  text-gray-500 uppercase ">
            Brubish Finance
          </span>
          <Subheading
            className="text-left"
            title="Unlock Exclusive Savings with Brubish Fulfillment Services"
          />

          <div className="relative  inline-block mt-3 lg:hidden font-medium group">
            <Image
              src="/services/finance/4.png"
              alt="banner"
              className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px] px-2"
              width={600}
              height={80}
            />
          </div>
          <div className="text-sm md:text-base text-gray-600 duration-300 mt-4 mb-7">
            At Book My Logistics (Brubish), we offer flexible and affordable
            financing solutions designed to empower businesses with the working
            capital they need to grow. Brubish Finance provides unsecured
            Brubish Finance and cash flow management options, tailored
            specifically for SMEs. With quick approvals, competitive interest
            rates, and no collateral required for unsecured loans, we help
            businesses secure their operations without added financial stress.
          </div>

          <Link
            href="/contact-us"
            className=" max-md:mx-auto mt-3 block px-4 w-[160px] text-center py-2 bg-gradient-to-tr from-secondary to-secondary1 hover:to-amber-400 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:-translate-y-1 duration-200 "
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}








export default Financeeight
