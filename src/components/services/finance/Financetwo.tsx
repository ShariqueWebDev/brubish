import React from 'react';

const data = [
    
    {
      id: 2,
      name: "Free Up Cash",
      icon: "/services/finance/b2.png", // Original icon retained
      content: "We enable you to access cash tied up in inventory, so you can invest more in growth."
    },
    {
      id: 1,
      name: "Extend Runway",
      icon: "/services/finance/b1.png", // Original icon retained
      content: "Our facilities allow you to buy inventory without using dilutive equity capital."
    },
    {
      id: 4,
      name: "Flexible Limits for Seasonality",
      icon: "/services/finance/14.png", // Original icon retained
      content: "We can provide temporary increases to support your inventory build for peak season."
    },
    {
      id: 3,
      name: "Document Light",
      icon: "/services/finance/15.png", // Original icon retained
      content: "Our loan agreements are short and straightforward."
    },
    
  ];
  
const Financetwo = () => {
  return (
    <div className='sjcontainer my-8 md:mt-16'>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {data.map((item) => (
        <div key={item.id} className=" py-4 md:p-4 text-left  rounded-lg ">
          <img 
  src={item.icon} 
  alt={item.name} 
  className="w-40 md:w-52 mb-2 md:mb-6 -ml-2 md:-ml-4 mix-blend-multiply" 
/>
          <h3 className=" text-xl md:font-[500] font-[600] mb-2">{item.name}</h3>
          <p className="text-gray-600  text-sm md:text-base">{item.content}</p>
        </div>
      ))}
    </div>
      </div>
  );
};


export default Financetwo
