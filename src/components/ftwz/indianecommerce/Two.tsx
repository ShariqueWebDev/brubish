import Heading from '@/components/shared/Heading';
import { CircleCheckBig } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


export const list = [
  "Duty savings as duty is paid as sales happens",
  "Savings on finance cost of huge working capital",
  "Improved cash cycle – payment aligned with collection",
  "Integrated solution with last mile delivery – command + control",
  "(in case of customer return) no damage to e-Commerce player",
  "Total financial savings estimated to be = 20%",
  "Other add-on qualitative benefits ",
];

export const list02 = [
  {
    "heading": "e-Commerce player indents",
    "list": [
      "An assortment of ball and globe-type needle valves with flanged and threaded connections, featuring an integrally forged body, is prepared as per the indent request."
    ]
  },
  {
    "heading": "Overseas MP stocks goods as per that indent in BML FTWZ",
    "list": [
      "Goods like needle valves and other components with precise specifications are stocked in the BML FTWZ by the overseas MP based on the provided indent."
    ]
  },
  {
    "heading": "As per customer order goods are shipped after paying duty",
    "list": [
      "Customer orders are processed and goods such as needle valves are shipped after completing duty payments, ensuring compliance with regulations."
    ]
  },
  {
    "heading": "BML Last mile Delivery (or any other) does delivery",
    "list": [
      "The last-mile delivery is handled by BML or an alternate service, ensuring the goods reach the customer's doorstep efficiently."
    ]
  },
  {
    "heading": "(in case of customer return) Goods brought back to BML FTWZ",
    "list": [
      "Returned goods are carefully brought back to the BML FTWZ for inspection, storage, or reprocessing as required."
    ]
  },
  {
    "heading": "Unsold inventory is shipped back / re-exported to overseas MP",
    "list": [
      "Unsold inventory is either re-exported to the overseas manufacturing partner or handled per the agreed protocols for redistribution."
    ]
  }
]

const Two = () => {
  return (
    <div className='bg-amber-50'>
         <div className=" py-8 lg:py-14 space-y-10 lg:space-y-16">
          <div className='bg-white py-8  lg:py-16'>

        <div className=" sjcontainer gap-10 flex h-full flex-col lg:flex-row items-center justify-center w-full">
          <div data-aos="fade-right" className="w-full lg:w-[50%] space-y-6">
<Heading title="Benefits"

              
/>

            <ul className=" gap-2  lg:gap-3">
              {list.map((item, index) => (
                <li
                  key={index}
                  className=" flex text-gray-700 items-center gap-4 text-sm md:text-base py-1.5 md:py-2.5"
                >
                  <CircleCheckBig
                    size={17} color='red'
                    className=" min-w-5 text-templateSecondary"
                  />
                  {item}
                </li>
              ))}
            </ul>

           
          </div>
          <div
            data-aos="fade-left"
            className="w-full lg:w-[50%] border-4 border-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
          >
            <Image
              src={"/ftwz/ecommerce/one.png"}
              alt=""
              height={800}
              width={800}
              sizes="100vw"
            />
          </div>
        </div>
        </div>

        {/* ------------- */}
        {/* <hr /> */}
        {/* ------------- */}
        <div className="grid sjcontainer py-6 grid-cols-1 md:grid-cols-3 gap-8">
          {list02.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            >
              <h2 className="p-6 bg-amber-300 text-primary   lg:text-lg capitalize tracking-wide">
                {item.heading}
              </h2>
              <ul className="space-y-2 p-3 md:p-6">
                {item.list.map((item, index) => (
                  <li
                    key={index}
                    className=" flex text-gray-700 items-start gap-2 text-sm md:text-base py-1.5"
                  >
                    <CircleCheckBig
                      size={22}
                      className= " min-w-6 mt-1 text-templateSecondary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Two
