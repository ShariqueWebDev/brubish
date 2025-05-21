import Heading from '@/components/shared/Heading';
import React from 'react';

const data = [
  {
    id: 1,
    name: "Landed Costs, Made Easier",
    icon: "/services/customs/c1.svg",
    content: "Calculate landed costs for your SKUs. The Flexport Platform structures customs entry data, duties, and other logistics spends to make it your one source for fast, accurate answers."
  },
  {
    id: 2,
    name: "Proactive Exception Management",
    icon: "/services/customs/c2.svg",
    content: "It’s clear: Exceptions should be managed before arrivals, not after. You and your Flexport broker see exceptions faster, with built-in escalation plans to minimize added costs and delays."},
  {
    id: 3,
    name: "Customs Brokers Informed by Data",
    icon: "/services/customs/c3.svg",
    content: "Our brokers do more than clear goods. They find patterns to improve your import strategy, increase duty avoidance and minimization, and find strategic opportunities others miss."
  }
];

const Customthree = () => { 
  return (
    <div className=' sjcontainer my-10 md:my-20'>
      <Heading title='Why BML?' className='text-center mb-4 md:mb-8' />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4  gap-x-6">
      {data.map((item) => (
        <div key={item.id} className=" py-4 md:p-4  rounded-lg text-left">
          <img src={item.icon} alt={item.name} className=" w-24 md:w-28  !object-contain mb-4" />
          <h3 className=" text-lg md:text-xl font-[500] mb-2 mt-4 ">{item.name}</h3>
          <p className="text-gray-600 text-[15px]">{item.content}</p>
        </div>
      ))}
    </div>
      </div>
  );
};





export default Customthree
