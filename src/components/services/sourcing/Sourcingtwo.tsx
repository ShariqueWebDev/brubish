import React from 'react';
import { FaGlobe, FaChartLine, FaUsers } from 'react-icons/fa'; 

const data = [
  {
    id: 1,
    name: "Global Market Reach",
    icon: <FaGlobe size={52} />, // React Icon for the globe
    content: "Expand your business footprint with BML Marketing. Our tailored Commodities solutions ensure your products reach global markets efficiently, helping you connect with customers worldwide."
  },
  {
    id: 2,
    name: "Data-Driven Campaigns",
    icon: <FaChartLine size={52} />, // React Icon for analytics/chart
    content: "Leverage our advanced analytics tools to optimize your marketing efforts. With real-time insights into Commodities operations, we help you target the right audience and drive meaningful engagement."
  },
  {
    id: 3,
    name: "Seamless Customer Experience",
    icon: <FaUsers size={52} />, // React Icon for users/customers
    content: "Ensure customer satisfaction with our integrated Commodities solutions. From on-time delivery to tracking updates, BML Marketing guarantees a seamless experience that builds trust and loyalty."
  }
];

const Sourcingtwo = () => {
  return (
    <div className=' sjcontainer py-8 md:py-16'>
     
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:px-10">
      {data.map((item) => (
        <div key={item.id} className="md:p-4  rounded-lg text-left">
          <div className="w-24 h-24  flex items-center justify-center text-secondary text-3xl">
              {item.icon} {/* Render the React Icon */}
            </div>
          <h3 className="text-lg font-[500] mb-2">{item.name}</h3>
          <p className="text-gray-600 text-[15px]">{item.content}</p>
        </div>
      ))}
    </div>
      </div>
  );
};



export default Sourcingtwo
