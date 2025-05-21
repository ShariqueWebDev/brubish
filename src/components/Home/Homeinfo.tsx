import Image from 'next/image'
import React from 'react'
import Heading from '../shared/Heading'
import { BiCheckDouble } from 'react-icons/bi'
import { FaCheckCircle, FaCheckDouble } from 'react-icons/fa'

const Homeinfo = () => {
  return (
    <div className={`flex  sjcontainer flex-col-reverse  my-8  md:my-24  md:flex-row items-center w-full `}>
    {/* Text Section */}
    <div className='relative p-2'>

    <div className="relative rounded-lg  lg:inline-block hidden overflow-hidden font-medium group">

        <Image
           src="/services/ftwz/2.png"
            alt="banner"
            className='w-full h-full md:min-h-[300px] md:max-w-[550px]'
            width={600}
            height={80}
        />

    </div>
    {

}

      </div>
    <div className=' py-4 md:p-8 flex-1 group'>
    <h2 className={`text-3xl text-amber-500 mb-4    md:text-5xl   py-1.5  font-bold tracking-wide `}>Book my Logistics</h2>
      <div className='relative  flex items-center justify-center'>
        <div className="relative  rounded-lg shadow-lg overflow-hidden  inline-block mt-3 mb-5 lg:hidden mx-auto font-medium group  ">

            <Image
            src="/services/ftwz/2.png"
                alt="banner"
                className='!object-cover  duration-300  h-full md:max-w-[600px] mx-auto  '
                width={600}
                height={80}
            />

        </div>
       

      </div>



        <div
            className='text-sm tracking-wide md:text-[15px]  text-gray-600 my-2   ' >
     BML tech enabled  services helps business accelerate their growth beyond the usual pace, with its end to end supply chain solution I.e right from sourcing the right product to delivering it to the end consumer, we have got you covered.</div>
        <ul className="   cursor-default text-sm md:text-[15px] text-gray-600 duration-300 mt-4 space-y-3">
  <li className=' duration-200 flex items-start'> <img src="/check.png"  className='min-w-6 w-8  mr-2 max-w-6'/> To incline with the national interest and make India a global trading hub like Dubai, Singapore, Shanghai.</li>
  <li  className=' duration-200 flex items-start'> <img src="/check.png"  className='min-w-6 w-8 max-w-6  mr-2'/> To facilitate import & export of goods & services with freedom to carry out trade in free currency.</li>
  <li  className=' duration-200 flex items-start'> <img src="/check.png"  className='min-w-6 w-8 max-w-6  mr-2'/> To help in reducing the logistic cost.</li>
</ul>

       
    </div>

</div>
  )
}

export default Homeinfo
