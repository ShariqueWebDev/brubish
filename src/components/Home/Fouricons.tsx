import React from 'react';

const data = [
  {
    id: 1,
    name: "Ocean & Air Freight",
    icon: "/icons/freight.svg",
    content: "We offer ocean and air freight solutions for businesses of all sizes. Unlock the power of our global trade network to move your goods with ease. Our technology provides SKU-level visibility so you have peace of mind from origin to port. Track your shipments in real-time and manage your costs with unparalleled reliability and speed."
  },
  {
    id: 2,
    name: "Customs",
    icon: "/icons/customs.svg",
    content: "With BML Customs, our expert brokers can help you clear goods quickly, minimize import duties, and leverage customs data to benefit your entire supply chain. We'll work with you even if you don’t ship with us."
  },
  {
    id: 3,
    name: "Trucking",
    icon: "/icons/trucking.svg",
    content: "Take the wheel of your international and domestic freight by bringing everything under one roof. As the control tower for your ground operations, we track your shipment milestones for the road ahead, from dispatch through delivery."
  },
  {
    id: 4,
    name: "Fulfillment",
    icon: "/icons/fulfillment.svg",
    content: "BML Fulfillment provides fast, reliable DTC and B2B fulfillment. We make it easy to sell in more places with our 30+ eCommerce and retailer integrations. Plus, our Seller Portal gives you end-to-end visibility and control."
  },
];

const Fouricons = () => {
  return (
    <div className={``}>
    <div className=' sjcontainer py-8 lg:py-16'>
      <h2 className=' text-2xl md:text-3xl '>From factory floor to customer door</h2>
      <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-5'></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((item) => (
        <div key={item.id} className="  rounded-lg text-left">
          <img src={item.icon} alt={item.name} className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-[600] mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm  sm:text-base ">{item.content}</p>
        </div>
      ))}
    </div>

      </div>
    </div>
  );
};

export default Fouricons;
