import Subheading from '@/components/shared/Subheading'
import Image from 'next/image'
import React from 'react'


const data = [
    {
    id:1,
    icon:"/services/customs/a1.svg",
    name:"The Fastest",
    description:"Customs Clearance Service Available"
},
  {
    id:2,
    icon:"/services/customs/a2.svg",
    name:"Transparent Pricing",
    description:"No Hidden Fees"
},
{
    id:3,
    icon:"/services/customs/a3.svg",
    name:"Live Agents",
    description:"Working directly with you"
},
{
    id:4,
    icon:"/services/customs/a4.svg",
    name:"Coast to Coast",
    description:"We clear all U.S. Ports of Entry"
},
]



const Customone = () => {
  return (
    <div className='sjcontainer my-20 md:my-32'>
      <Subheading className='text-center mb-4 md:mb-8' title='Simple & compliant border solutions for the modern importer' />
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {
            data.map((item) => (
              <div key={item.id} className=' my-4 '>
                <Image height={100} width={100} className='w-10 mx-auto'  src={item.icon} alt={item.name} />
                <h2 className='text-center text-base md:text-xl mt-3 mb-1 font-[500]'>{item.name}</h2>
                <p className='text-center text-sm md:text-base text-gray-600'>{item.description}</p>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Customone
