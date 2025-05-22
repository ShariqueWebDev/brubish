import Heading from '@/components/shared/Heading';
import React from 'react'

const data = [
  {
    id: 4,
    title: "Collateral-free line of credit",
    text: "The unsecured working capital does not require land, property, BG, or any other collateral.",
    icon: "/services/finance/a4.webp",
    color: "bg-yellow-50", // Light yellow background
  },
  {
      id: 3,
      title: "Digital and simplified process",
      text: "Apply for credit line online with a few clicks.",
      icon: "/services/finance/a3.webp",
      color: "bg-red-50", // Light red background
    },
    {
      id: 8,
      title: "Revolving credit",
      text: "60-120 days rotation cycle to meet working capital needs.",
      icon: "/services/finance/a8.webp",
      color: "bg-indigo-50", // Light indigo background
    },
    {
      id: 2,
      title: "Improved working capital cycles",
      text: "Manage your working capital better by solving cash flow issues.",
      icon: "/services/finance/a2.webp",
      color: "bg-green-50", // Light green background
    },
    {
      id: 1,
      title: "Cheaper procurement",
      text: "Pay your suppliers upfront and get raw materials at the best rates.",
      icon: "/services/finance/a1.webp",
      color: "bg-blue-50", // Light blue background
    },
    
    {
      id: 5,
      title: "Grow revenue and profitability",
      text: "Reduce your input cost and book more profits.",
      icon: "/services/finance/a5.webp",
      color: "bg-purple-50", // Light purple background
    },
    {
      id: 7,
      title: "Interest as per usage",
      text: "The interest rate would be charged only for the exact amount and duration of use.",
      icon: "/services/finance/a7.webp",
      color: "bg-pink-50", // Light pink background
    },
    {
      id: 6,
      title: "Instant disbursement",
      text: "Receive funds against submission of supplier invoices instantly.",
      icon: "/services/finance/a6.webp",
      color: "bg-teal-50", // Light teal background
    },
  ];
  
  

const Financethree = () => {
  return (
    <div className="sjcontainer px-3 py-6 my-8 md:my-16">
      <Heading title=" Finance Benefits" />
      <div className="w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {data.map((item) => (
          <div
            key={item.id}
            className={`px-4 py-8 border rounded-lg shadow-[inset_-12px_-8px_40px_#46464620] my-4 ${item.color}`}
          >
            <img
              src={item.icon}
              alt={item.title}
              className=" w-16 md:w-20 h-16 md:h-20 -mt-14 md:-mt-16 mb-4 md:mb-4"
            />
            <h3 className=" text-lg md:text-xl font-[500] text-gray-800">
              {item.title}
            </h3>
            <p className=" text-sm md:text-[15px] mt-2  text-gray-500">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Financethree
