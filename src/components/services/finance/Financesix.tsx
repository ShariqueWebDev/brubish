import Heading from '@/components/shared/Heading';
import React from 'react';

const data2 = [
  {
    id: 1,
    name: "KYC DETAILS",
    icon: "/services/finance/f5.svg",
    content: "Submit your business's KYC documents, including identity and address proofs, to verify and process your application. Accepted documents include business registration certificates, PAN, and Aadhaar."
  },
  {
    id: 4,
    name: "Last 6 Months of Banking",
    icon: "/services/finance/f8.svg",
    content: "Provide the last 6 months of your business's bank statements to help assess cash flow and financial health. This step aids in determining your eligibility and the amount of financing."
  },
  {
    id: 2,
    name: "Financial for Previous 2 Fiscal Years",
    icon: "/services/finance/f6.svg",
    content: "Provide the financial statements for the last two fiscal years, including balance sheets and profit and loss statements, to support your creditworthiness and eligibility for financing."
  },
  {
    id: 3,
    name: "GSTR Details for Current Fiscal Year",
    icon: "/services/finance/f7.svg",
    content: "Submit the current fiscal year’s GST return filings to confirm business authenticity and compliance with tax regulations. This is required for accurate credit evaluation."
  },
  
];

const data1 = [
  {
    id: 2,
    name: "Business vintage",
    icon: "/services/finance/f2.webp", // Original icon retained
    content: "2+ years"
  },
{
  id: 1,
  name: "Minimum turnover",
  icon: "/services/finance/f1.webp", // Original icon retained
  content: "₹1 crores"
},
]

const data3 = [
  {
    id: 2,
    name: "Processing Fees",
    // icon: "/services/finance/f10.svg", // Original icon retained
    content: "Starts from 1.1% per annum"
  },
{
  id: 1,
  name: "Interest Rates",
  // icon: "/services/finance/f9.svg", // Original icon retained
  content: "Starts from 12% per annum"
},


{
  id: 4,
  name: "EMI & Check Bounce Charges",
  // icon: "/services/finance/f12.svg", // Original icon retained
  content: "500 + Applicable Tax"
},
{
  id: 3,
  name: "Penal Interest",
  // icon: "/services/finance/f11.svg", // Original icon retained
  content: "Starts from 2.1% per month + Applicable Tax"
},
]
  
const Financesix = () => {
  return (
    <div className="sjcontainer my-8 md:my-16">
      <Heading
        title="Brubish Finance Eligibility & Documents"
        className="text-left"
      />
      <p className="text-base md:text-lg mb-12 mt-1  text-gray-500">
        Apply with minimal documentation
      </p>

      <div className="mb-12">
        <h2 className=" text-xl md:text-2xl ">Eligiblity</h2>
        <div className="w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-2 mt-6 md:mt-8">
          {data1.map((item) => (
            <div
              key={item.id}
              className="p-4 border shadow-lg flex items-center space-x-2 hover:shadow-md text-left  rounded-lg "
            >
              <img src={item.icon} alt={item.name} className="w-16  " />
              <div className="-mb-2">
                <h3 className=" text-lg md:text-xl font-[500] ">{item.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className=" text-xl md:text-2xl ">Required Documents</h2>
        <div className="w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-2 mt-6 md:mt-8">
          {data2.map((item) => (
            <div
              key={item.id}
              className="p-4 border shadow-lg hover:shadow-md text-left  rounded-lg "
            >
              <img src={item.icon} alt={item.name} className="w-20  mb-6 " />
              <h3 className=" text-lg md:text-xl font-[500] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className=" text-xl md:text-2xl ">Our Terms</h2>
        <div className="w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-2 mt-6 md:mt-8">
          {data3.map((item) => (
            <div
              key={item.id}
              className="p-4 border shadow-lg hover:shadow-md text-left  rounded-lg "
            >
              {/* <img src={item.icon} alt={item.name} className="w-20  mb-6 " /> */}
              <h3 className=" text-lg md:text-xl font-[500] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default Financesix
