import Heading from '@/components/shared/Heading';
import Subheading from '@/components/shared/Subheading';
import Image from 'next/image';
import React from 'react'


const data = [
    {
      id: 1,
      name: "Per shipment",
      icon: "/services/insurance/i2.png", // Original icon retained
      content: "Pay as you go and insure only what you need."
    },
    {
      id: 2,
      name: "Annual Policy",
      icon: "/services/insurance/i1.png", // Original icon retained
      content: "Lock in broad cargo insurance for a year’s worth of shipments."
    },
    {
      id: 3,
      name: "Motor Truck",
      icon: "/services/insurance/i3.png", // Original icon retained
      content: "Cover cargo issues applicable to trucking, like theft or destruction."
    },
    
  ];

const Insurancethree = () => {
  return (
    <div className='sjcontainer px-4 my-12 md:my-24'>
      <Subheading className='text-left mb-4' title="Select the Right Cargo Insurance for Your Business" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.id} className=" group  border text-left  rounded-lg ">
            <div className='h-[350px] overflow-hidden'>
          <Image width={400} height={400}  src={item.icon} alt={item.name} className=" group-hover:scale-110 duration-300 w-full h-full !object-cover  mb-2 md:mb-6 " />
                </div> 
                <div className='p-2 lg:h-[120px]  bg-gray-50 md:p-4'>
          <h3 className="text-gray-600 text-base uppercase font-[500] mb-2">{item.name}</h3>
          <p className="  text-base ">{item.content}</p>
          {/* <p className="  text-sm md:text-lg pb-2 underline mt-4">Learn More</p> */}
                    </div>
        </div>
      ))}
    </div>
    
    </div>
  )
}

export default Insurancethree
