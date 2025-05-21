import React from 'react';

const data = [
  {
    id: 1,
    name: "Near  Time Visibility",
    icon: "/icons/freight.svg",
    content: "Truckers and warehousing can plan and prepare together using custom-built applications from Flexport. They’ll handle the haul. You keep your supply chain in sight across every leg of the journey."
  },
  {
    id: 2,
    name: "Exceptional On-Time Performance",
    icon: "/icons/customs.svg",
    content: "Visibility tools make it easier to stay on schedule. Limit the likelihood of unexpected costs, like accessorial charges or detention and demurrage, with real-time container tracking, load updates, and reports."
  },
  {
    id: 3,
    name: "Competitive Rates",
    icon: "/icons/trucking.svg",
    content: "Take the wheel of your international and domestic freight by bringing everything under one roof. As the control tower for your ground operations, we track your shipment milestones for the road ahead, from dispatch through delivery."
  }
];

const Truckingsectiontwo = () => {
  return (
    <div className=' sjcontainer py-8 md:py-16'>
     
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {data.map((item) => (
        <div key={item.id} className=" py-4 md:p-4  rounded-lg text-left">
          <img src={item.icon} alt={item.name} className="w-12 h-12 mb-4" />
          <h3 className="text-lg font-[500] mb-2">{item.name}</h3>
          <p className="text-gray-600 text-[15px]">{item.content}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Truckingsectiontwo;


