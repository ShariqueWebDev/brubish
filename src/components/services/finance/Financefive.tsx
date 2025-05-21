import React from 'react';

const data = [
  {
    id: 1,
    name: "1",
    icon: "/services/finance/c1.png",
    content: "We give you a credit limit, and you finance inventory and logistics costs on as many invoices as you’d like, up to that limit."
  },
  {
    id: 2,
    name: "2",
    icon: "/services/finance/c2.png",
    content: "Each invoice that you finance has a fixed term of 30-60 days."},
  {
    id: 3,
    name: "3",
    icon: "/services/finance/c3.png",
    content: "Your outstanding balance will change over time as you pay down financed invoices and finance new invoices as they’re issued."
  }
];

const Financefive = () => { 
  return (
    <div className=' sjcontainer pb-8 md:pb-16'>
     
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-6">
      {data.map((item) => (
        <div key={item.id} className=" py-4 md:p-4  rounded-lg text-left">
          <img src={item.icon} alt={item.name} className=" w-40 md:w-72  !object-contain mb-4" />
          <h3 className="text-2xl font-[500] mb-2 mt-4 ">{item.name}.</h3>
          <p className="text-gray-600 text-base">{item.content}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Financefive;


