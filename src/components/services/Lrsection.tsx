import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Subheading from '../shared/Subheading'

const Lrsection = ({ image = "", title = "", description = "" }) => {
    return (
      <div>
        <div
          className={`flex sjcontainer flex-col-reverse  py-8  md:py-16 md:flex-row items-center w-full `}
        >
          {/* Text Section */}

          <div className="relative max-md:mx-4 lg:inline-block hidden font-medium group">
            <Image
              src="/services/insurance/1.png"
              alt="banner"
              className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[550px]"
              width={600}
              height={80}
            />
          </div>

          <div className=" md:p-8 flex-1 group">
            <Subheading title=" Secure Your Shipments with Brubish Insurance Solutions" />
            <div className="relative  inline-block mt-3 lg:hidden font-medium group">
              <Image
                src="/services/insurance/1.png"
                alt="banner"
                className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                width={600}
                height={80}
              />
            </div>
            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 mb-6">
              Protect your valuable shipments with Brubish comprehensive
              insurance options, tailored to minimize risks and give you peace
              of mind. Whether you're shipping domestically or internationally,
              Brubish Insurance offers flexible coverage and responsive support
              to handle any unexpected events. Enjoy exclusive rates and
              seamless claims processes as a valued Brubish partner, helping
              your business stay secure and profitable.
            </div>
            <Link
              href="/contact-us"
              className=" mt-3 block px-4 w-[160px] text-center py-2 bg-gradient-to-tr from-secondary to-secondary1 hover:to-amber-400 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:-translate-y-1 duration-200 "
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Lrsection
