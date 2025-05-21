




import React from 'react';

const data = [
  {
    id: 1,
    name: "Ocean Freight",
    icon: "/icons/freight.svg",
    content: "Cross the ocean reliably, thanks to oceans of data."
  },
  {
    id: 2,
    name: "Ocean Freight",
    icon: "/icons/customs.svg",
    content: "Automate air freight for even faster transit."
  },
  {
    id: 3,
    name: "LCL",
    icon: "/icons/trucking.svg",
    content: "Use every TEU to keep goods on the move."
  },
  {
    id: 4,
    name: "Climate",
    icon: "/icons/fulfillment.svg",
    content: "Solutions tailored to your decarbonization goals."
  },
];

const Gofurther = () => {
  return (
    <div className=' my-8 md:my-16 sjcontainer'>
      <h2 className=' text-2xl md:text-2xl '>Go Further</h2>
     
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {data.map((item) => (
        <div key={item.id} className=" py-2 md:p-4  rounded-lg text-left">
          <img src={item.icon} alt={item.name} className="w-12 h-12 mb-4" />
          <h3 className="  md:text-lg font-[600] ">{item.name}</h3>
          <p className="text-gray-600 text-sm md:text-base">{item.content}</p>


          {/* <p className='border-b border-primary pb-0.5 text-base w-24 mt-2 md:mt-8'>Learn More</p> */}
        </div>
      ))}
    </div>
      </div>
  );
};

export default Gofurther;

