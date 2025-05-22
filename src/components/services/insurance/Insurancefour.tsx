import Heading from '@/components/shared/Heading'
import Subheading from '@/components/shared/Subheading'
import Image from 'next/image'
import React from 'react'

const data =[
    {
        id:1,
        name:"365 Days Claim Assistance",
        icon:"/services/insurance/b1.webp"
    },
    {
        id:2,
        name:"Get Custom Quotes Instantly",
        icon:"/services/insurance/b2.webp"
    },
    {
        id:3,
        name:"Instant Policy",
        icon:"/services/insurance/b3.webp"
    },
    {
        id:4,
        name:"Dedicated Relationship Manager",
        icon:"/services/insurance/b4.webp"
    },
]


const Insurancefour = () => {
  return (
    <div className="  mt-12 md:mt-40 md:mb-0">
      <div className="grid lg:grid-cols-2 xl:grid-cols-[60%,40%] sjcontainer  items-start">
        <div className="h-full ">
          <Heading
            className=" text-left"
            title="Benefits of Brubish Insurance"
          />
          <p className=" text-lg md:text-2xl xl:text-4xl flex items-center max-lg:-mt-6 justify-center h-full lg:-mt-10 mb-4  ">
            What makes Brubish Insurance for Business one of India's most
            favorite place to buy Marine Insurance?
          </p>
        </div>
        <div className="flex flex-wrap gap-4 lg:min-w-[420px] max-lg:mt-16">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={` p-4  justify-center items-center shadow-lg w-[200px] border text-left  rounded-lg ${
                index % 2 === 0 && "lg:-translate-y-10"
              } `}
            >
              <Image
                width={400}
                height={400}
                src={item.icon}
                alt={item.name}
                className=" w-16 !object-cover  mb-2 md:mb-6 "
              />
              <div className="">
                <h3 className="text-gray-600 text-lg  uppercase font-[500] mb-2">
                  {item.name}
                </h3>
                {/* <p className="  text-sm md:text-lg">{item.content}</p> */}
                {/* <p className="  text-sm md:text-lg pb-2 underline mt-4">Learn More</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-20 bg-[url('/knowledgecenter.png')] bg-cover bg-center ">
        <div className="pt-10">
          <div className="absolute inset-0 bg-amber-50/60"></div>{" "}
          {/* Overlay */}
          <Image
            className="max-w-[700px] mix-blend-multiply w-full mx-auto relative z-10"
            width={1600}
            height={1000}
            src="/services/insurance/risk2.png"
            alt="risk coverage"
          />
        </div>
      </div>
    </div>
  );
}

export default Insurancefour
