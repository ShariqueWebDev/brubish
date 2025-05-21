import Heading from '@/components/shared/Heading';
import { ArrowRight } from 'lucide-react';
import React from 'react'


const ftwzServicesData = [
  "Income tax waiver on all profits generated through re-exports activity through the FTWZ",
  "Hassle-free re-export process by routing cargo through FTWZ",
  "One can take advantage of the advantages offered by India like manpower cost and technical skill, India's geo-position and location, and others to make their products globally competitive",
  "GST exemption on services offered within BML FTWZ",
  "Permission of 100% FDI for the set-up of units by the unit holder of the FTWZ"
]


const Two = () => {
  return (
    <div className='sjcontainer my-12 md:my-24'>
      <Heading title="Benefits for Re-exports" className='mb-3' />
      {/* <h2 className=' text-3xl md:text-4xl mb-3'> </h2> */}
      <p className=' text-sm md:text-base text-gray-600'>The VAS that can be performed in the FTWZ are packaging, re-packaging, labelling, re- labelling, strapping, refurbishment, crating, carbonisation, fumigation, choking, lashing, tagging, shrink / stretch / bubble wrapping, palletization, bagging, re-bagging, quality assurance, kitting, de-kitting, sorting assorting, making combination pack, consolidation, agglomeration, washing, cleaning, processing, repairs & maintenance, CKD/SKD assembly, bottling, blending, cutting, polishing, painting, coating, filming, re-sizing, splitting, threading, coupling and the like</p>

      <div className='mt-8'>
        <p className='font-[400] text-gray-600 text-lg md:text-2xl'>Some of the accruing tangible benefits for re-exports through FTWZ from India are listed as below</p>
        <ul className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 gap-y-5 md:gap-y-10  my-6">
            {ftwzServicesData.map((item, index) => (
              <li key={index} data-aos="fade-up" className=" text-sm md:text-base  text-gray-700  border p-2 md:p-4 rounded-lg shadow-lg hover:-translate-y-2 duration-200">
                <p className='text-4xl font-bold text-secondary'>{index + 1}.</p>
                <p className=' text-left mt-3  text-sm md:text-[15px] text-gray-500'>{item}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Two
