import Heading from '@/components/shared/Heading';
import Subheading from '@/components/shared/Subheading';
import { ArrowRight, CheckCheck, CheckCircle } from 'lucide-react';
import Image from 'next/image'
import React from 'react'


const customsDutiesData = [
  "Duty deferment till physical transfer to DTA",
  "Maximum time period of transfer = 2 Years",
  "Partial (on piecemeal basis) transfers allowed with proportional duty payments",
  "QC check possible before duty payment (Clearance) and if rejected then re-export is allowed",
  "GST exemption for all services like Labelling, Packing, Kitting, Bar-coding, Palletization and other authorized services",
];


const One = () => {
  return ( 
    <div className='bg-amber-50'>

    <div className=' sjcontainer py-8 md:py-24'>
     <div className='grid lg:grid-cols-[45%,55%] items-start lg:space-x-10'>
      <Subheading className='mb-2   lg:hidden' title='Features of Free Trade Warehousing Zone for Indian Importers' />
        <div data-aos="fade-right" className=' '>
<Image src="/ftwz/indian-importers/12a.png" width={1000} height={1000} className="w-full h-full !object-contain" />
          </div>
          <div className='   '>
            <Heading className='max-lg:hidden' title="Features of Free Trade Warehousing Zone for Indian Importers" />
            {/* <h2 className=' max-lg:hidden text-xl md:text-3xl'></h2> */}
            <ul className=" space-y-6 md:space-y-4 my-6">
            {customsDutiesData.map((item, index) => (
              <li key={index} data-aos="fade-left" className="flex text-sm md:text-[15px]  text-gray-700 items-center space-x-2  duration-200">
                <CheckCircle className="text-amber-500 min-w-10 " size={24} />
                <span className=''>{item}</span>
              </li>
            ))}
          </ul>
          </div> 
      </div>
            </div>
    </div>
  )
}

export default One
