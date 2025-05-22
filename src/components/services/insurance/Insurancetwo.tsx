import Heading from '@/components/shared/Heading';
import React from 'react';

const data = [
    {
      id: 1,
      name: "Expansive coverage",
      icon: "/services/finance/f1.svg", // Original icon retained
      content: "We offer cargo insurance options for a wide range of supply chain needs, including our best-in-class global 'all risk' coverage."
    },
    {
      id: 2,
      name: "Affordable pricing",
      icon: "/services/finance/f2.svg", // Original icon retained
      content: "No matter the extent of your coverage, expect a straightforward quote, tailored to your shipment value, at a great rate."
    },
    {
      id: 3,
      name: "Responsive service",
      icon: "/services/finance/f3.svg", // Original icon retained
      content: "Our expert team responds quickly to each and every inquiry. Get in touch today over email or phone."
    },
    {
      id: 4,
      name: "Expedited claims",
      icon: "/services/finance/f4.svg", // Original icon retained
      content: "Our automated digital workflows mean faster settlement for your claims."
    },
  ];
  
const Insurancetwo = () => {
  return (
    <div className="sjcontainer px-4 my-12 md:my-24">
      <div className="mb-4">
        <Heading
          title="Why Choose Brubish Cargo Insurance?"
          className="text-left"
        />
        <p className="text-gray-600 mt-1 text-base md:text-lg">
          Experience all the benefits of our global coverage.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item) => (
          <div key={item.id} className=" py-4 md:p-4 text-left  rounded-lg ">
            <img
              src={item.icon}
              alt={item.name}
              className=" w-40 md:w-60  mb-2 md:mb-6 -ml-5 md:-ml-12"
            />
            <h3 className=" text-xl font-[600] mb-2">{item.name}</h3>
            <p className="text-gray-600  text-base md:text-[15px]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Insurancetwo
