import React from 'react'
import Heading from '../shared/Heading';

const data = [
  {
    id: 1,
    title: "Focus on Sales, Leave Logistics to Us",
    text: "Freight, Customs, Warehousing, Transport, VAS — leave it to us while you focus on growing your business.",
    icon: "/icons/truck2.svg",
  },
  {
    id: 2,
    title: "Work from Any Remote Location",
    text: "Manage your end-to-end supply chain via the dashboard, give instructions, and track progress hassle-free.",
    icon: "/icons/remote.svg",
  },
  {
    id: 3,
    title: "Save on Working Capital",
    text: "Benefit from duty-free imports with BML FTWZ, paying duties only when products are sold.",
    icon: "/icons/capital.svg",
  },
  {
    id: 4,
    title: "Lower Logistics Costs",
    text: "Save on warehouse costs, hiring, and technology — pay only for the packages shipped and the space your stock occupies.",
    icon: "/icons/lower.svg",
  },
  {
    id: 5,
    title: "Guaranteed Price Stability",
    text: "While market prices rise, you enjoy a flat fee for all logistics services year-round.",
    icon: "/icons/stability.svg",
  },
  {
    id: 6,
    title: "Scale Your Business Without Limits",
    text: "With our end to end solution, you focus on sales and leave all the boring work to us.",
    icon: "/icons/sales.svg",
  },
];


const Whybml = () => {
  return (
  
    <div className={`  bg-[url('/background/map.svg')]  sjcontainer pb-6 pt-6  md:py-16 `}>
 {/* <h2 className=' text-2xl md:text-3xl '></h2> */}
       <Heading title="Why BML" className='text-center' />
       {/* <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3'></div> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  my-8">
      {data.map((item) => (
        <div
          key={item.id}
          className={` my-0 md:my-4  `}
        >
          <img
            src={item.icon}
            alt={item.title}
            className=" w-16 md:w-14 h-16 md:h-14 mb-3"
          />
          <h3 className=" text-xl   font-[500] text-gray-700 capitalize">{item.title}</h3>
          <p className=" text-sm mt-1  text-gray-500">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Whybml
