import Heading from '@/components/shared/Heading';
import { ArrowRight } from 'lucide-react';
import React from 'react'


const ftwzServicesData = [
  "Checks on quality can be performed before duty payment and hence rejected products can be handled through a separate process",
  "Any FTWZ services on imports are exempted from VAT",
  "Any handling & transportation of containers from Port to FTWZ is also GST exempted",
  "BML FTWZ is available with global class storage yards and facility to store any special cargo with services that are GST exempted",
  "Foreign exchange transaction capability for all the services being rendered",
  "There is a wide range of VAS that can be provided like sorting, labeling, packing, kitting, bar-coding, palletization and others",
  "All such activities are GST exempted and any purchases of supply materials for services into FTWZ would be treated as deemed exports from such suppliers"
];


const Two = () => {
  return (
    <div className='sjcontainer my-12 md:my-24'>
      <Heading className='mb-2' title="Benefits for Indian Importers" />
      <p className=' text-sm md:text-base text-gray-600'>FTWZ allows partial and staggered clearance of import cargo into DTA (Domestic Tariff Area). This allows great flexibility to the company holding the inventory and enables synchronization to the market demands and consumptions. This enhances supply chain efficiency and performance and reduces the demand on working capital. There are also resulting reduction on costs like shipping line detention charges due to speedy stuffing and de-stuffing of cargo. There is an immense saving in working capital and finance cost due to duty deferment which is synchronized to market needs.</p>

      <div className='mt-8'>
        <p className='font-[400] text-base md:text-2xl'>Some of the accruing tangible advantages for imports through BML FTWZ into India are listed as below</p>
        <ul className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 gap-y-5 md:gap-y-10  my-6">
            {ftwzServicesData.map((item, index) => (
              <li key={index} data-aos="fade-up" className=" text-sm md:text-base  text-gray-700  border p-4 rounded-lg shadow-lg hover:-translate-y-2 duration-200">
                <p className='text-4xl font-bold text-secondary'>{index + 1}.</p>
                <p className=' text-left mt-3  text-[15px] text-gray-500'>{item}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Two
