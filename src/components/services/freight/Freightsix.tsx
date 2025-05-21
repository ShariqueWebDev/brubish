import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaCheckSquare } from 'react-icons/fa'


const data = [
  {
    title:"Search to Get Instant Rates 24/7",
    description:"Get quotes around the clock in different countries and regions",
    list :[
      `Quick quote solution for SMEs, startups, and enterprises`,
`Confirm quote and access to our customer care`,
`Local logistics professionals support`
    ],
    image:"/services/freight/1.png",
    icon:""
  },
  {
    title:"Unlock Competitive Pricing & Solutions",
    description:"Ensuring you receive the best possible value for your shipment",
    list :[
      `Combined freight rates from different carriers and airline`,
      `Air and ocean options at a glance for your comparison`,
     `Get the competitive quote with the least time spent`,
    ],
    image:"/services/freight/2.png",
    icon:""
  },
  {
    title:"Tailor your Quote",
    description:"Click Custom Quote, our local dedicated team will get you one",
    list :[
      `Local quoting and operational services and support`,
      `Professional advice to improve your efficiency`,
      `Strengthen your operations`,
    ],
    image:"/services/freight/3.png",
    icon:""
  },
  {
    title:"Access to Full Shipping Services",
    description:"All shipping requirements are covered under one roof",
    list :[
      `Clear local charges breakdown without hidden fees`,
      `Cargo insurance services`,
      `Export and import custom clearance services`,
    ],
    image:"/services/freight/4.png",
    icon:""
  },
]


const Freightsix = ({ image = "", title = "", description = "" }) => {
    return (
        <div  className='py-8  md:py-16  sjcontainer'>
          <Heading title='Why BML?' className='text-center' />
                {/* <h2 className='text-3xl md:text-5xl text-center font-bold'>Why BML？</h2> */}
                <p className='text-base text-gray-700 text-center mt-4 '>We take pride in our logistics expertise and professionalism, our freight forwarding service provides a seamless experience for all shipping needs for SMEs, start-ups and businesses of all kinds. Get instant quotes and manage your global shipments with ease.</p>
            <div className={`flex   w-full  `}>
                {/* Text Section */}
                  <div className='mx-auto'>

                  {
                    data?.map((item,index) => {
                      return (
                        <div key={index} className={` my-16 flex justify-between flex-row ${index % 2 == 0 && "flex-row-reverse "} items-center`}>
 <div class="relative max-md:mx-4 lg:inline-block  overflow-hidden rounded-xl hidden font-medium group flex-1">

<Image
    src={item.image}
    alt="banner"
    className='!object-cover group-hover:scale-95 duration-300 w-full h-full'
    width={1000}
    height={800}
/>

</div>

<div className=' md:p-8 flex-1 group'>
<span className='text-2xl  text-left md:text-3xl py-1.5 font-bold  text-black '>
    {item.title}
</span>
<div class="  my-4 lg:hidden font-medium group md:min-h-[300px] md:max-w-[500px] overflow-hidden">

    <Image
       src={item.image}
        alt="banner"
        className='!object-cover group-hover:scale-105 duration-300 w-full h-full '
        width={600}
        height={80}
    />

</div>
<div
    className='text-base md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 mb-6' >
   {item.description}
</div>
<div>
  {
    item.list?.map((listItem, index) => {
      return (
        <div key={index} className='text-sm flex items-center gap-2 md:text-base text-amber-500 duration-300 mb-2'>
          <FaCheckSquare className='min-w-4' />{listItem}
        </div>
      )
    })
  }
  </div>

</div>
                          </div>
                      )
                    })
                  }

                <div>

                </div>


                </div>

            </div>
        </div>
    )
}


export default Freightsix
