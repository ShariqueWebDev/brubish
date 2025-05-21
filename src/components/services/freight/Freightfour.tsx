import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        id:1,
        title:"EXW",
        description:"Ex. Works",
        icon:"/services/freight/fr1.svg"
    },
    {
        id:2,
        title:"FCA(b)",
        description:"Free Carrier",
        icon:"/services/freight/fr2.svg"
    },
    {
        id:3,
        title:"FAS",
        description:"Free Alongside Ship",
        icon:"/services/freight/fr3.svg"
    },
    {
        id:4,
        title:"FOB",
        description:"Free Ob Board",
        icon:"/services/freight/fr4.svg"
    },
    {
        id:5,
        title:"CFR",
        description:"Cost And Freight",
        icon:"/services/freight/fr5.svg"
    },
    {
        id:6,
        title:"CIF",
        description:"Cost, Insurance and Freight",
        icon:"/services/freight/fr6.svg"
    },
    {
        id:7,
        title:"CPT",
        description:"Carriage Paid To",
        icon:"/services/freight/fr7.svg"
    },
    {
        id:8,
        title:"CIP",
        description:"Carriage and Insurance Paid To",
        icon:"/services/freight/fr8.svg"
    },
    {
        id:9,
        title:"DPU",
        description:"Delivered at Place Unloaded",
        icon:"/services/freight/fr9.svg"
    },
    {
        id:10,
        title:"DAP",
        description:"Delivered at Place",
        icon:"/services/freight/fr10.svg"
    },
    {
        id:11,
        title:"DDP",
        description:"Delivered Duties Paid",
        icon:"/services/freight/fr11.svg"
    },


]


const Freightfour = () => {
  return (
    <div className=' py-8 md:py-10 sjcontainer '>
        <Heading title="View Landed Cost Upfront, Book what you need" className='text-center' />

        <p className='text-base text-gray-600 my-2 mb-4 text-center'>Choose end to end, or book specific icons. We’ll coordinate with your suppliers. We support all Incoterms.</p>
    <div className='flex flex-wrap mx-auto justify-center  max-w-[1000px] '>
    {data.map((item,index) => (
          <div data-aos="fade-up" data-aos-delay={index * 50} key={item.id} className=" p-1 pb-3 md:p-4 w-[140px] min-w-[140px]    group m-2 my-4 border-b border-gray-300 hover:shadow-md  text-center">
          <Image width={100} height={100}  src={item.icon} alt={item.description} className="w-16  group-hover:scale-105 duration-300 h-16 mx-auto " />
          <h3 className="text-lg group-hover:text-amber-700  mt-2 ">{item.title}</h3>
          <h3 className="text-xs group-hover:text-amber-700  mt-1 ">({item.description})</h3>
        </div>
      ))}
    </div>
   
    </div>
  )
}

export default Freightfour
