import Heading from '@/components/shared/Heading';
import React from 'react'

const financeBenefits = [
  { title: "Approval within 48 hours" ,icon: "/services/finance/w9.webp"},
  { title: "No minimum utilization charges" ,icon: "/services/finance/w6.webp"},
  { title: "Affordable interest rates" ,icon: "/services/finance/w3.webp"},
  { title: "No new bank account required" ,icon: "/services/finance/w7.webp"},
  { title: "Digitized process" ,icon: "/services/finance/w11.webp"},
  { title: "Unsecured working capital" ,icon: "/services/finance/w2.webp"},
    { title: "Convenient repayments" ,icon: "/services/finance/w8.webp"},
    { title: "Savings up to 3% on raw material purchases",icon: "/services/finance/w1.webp" },
    { title: "No part-payment charges" ,icon: "/services/finance/w5.webp"},
  { title: "No foreclosure charges" ,icon: "/services/finance/w4.webp"},
    { title: "One-time processing fee" ,icon: "/services/finance/w10.webp"},
  ];


const Financefour = () => {
  return (
    <div className="sjcontainer my-8 md:my-16">
      <Heading title="Why Brubish?" className=" mb-2 md:mb-4" />
      <div className=" p-3 md:p-6 bg-gradient-to-tr from-red-400/50 via-red-200 to-amber-300 text-balance ">
        <p className=" text-lg md:text-xl font-[500]">
          Brubish provides new-age customized financing products for your
          business needs
        </p>
        <div className="flex flex-wrap gap-x-2 mt-4">
          {financeBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-center mb-4 bg-white hover:bg-gray-100 border p-2.5 px-3.5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md mx-2"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-6 h-6 mr-4"
              />
              <p>{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Financefour
