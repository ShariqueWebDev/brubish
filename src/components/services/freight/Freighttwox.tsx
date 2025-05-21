import Heading from '@/components/shared/Heading'
import Subheading from '@/components/shared/Subheading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Freighttwox = () => {
  return (
    <div  className='my-8 md:my-16'>
    <div className={`flex  sjcontainer flex-col-reverse   md:flex-row items-center w-full `}>
        {/* Text Section */}

        <div class="relative max-md:mx-4 lg:inline-block hidden overflow-hidden font-medium group">

            <Image
               src="/services/freight/freight1.png"
                alt="banner"
                className='!object-cover rounded-lg group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[550px]'
                width={1000}
                height={600}
            />

        </div>

        <div className=' md:p-8 flex-1 group'>
        <span className='text-sm text-left md:text-base font-bold py-1.5  text-gray-500 uppercase '>
                Your all-in-one Partner
              </span>
            <Subheading className='text-left my-2' title="An entire sea of ocean freight software and services all in one place" />
            <div class="relative  inline-block mt-3 lg:hidden font-medium group">

                <Image
                   src="/services/freight/freight1.png"
                    alt="banner"
                    className='!object-cover rounded-lg group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px] px-2'
                    width={1000}
                    height={600}
                />

            </div>
            <div
  className='text-sm md:text-base text-gray-600 duration-300 mt-4 mb-7'>
  We're a one-stop shop for all your shipment needs. From Full Container Load (FCL) to Less Than Container Load (LCL) . and Buyer's Consolidation to Booking Management and Order Management, We can connect all your shipment pieces together on one dedicated platform. Your supply chain deserves more than the chaos of disconnected systems. 
</div>
        </div>




    </div>
    
</div>
  )
}








export default Freighttwox
