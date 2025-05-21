import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: 1,
        name: "Factory Floor",
        heading: "CFS",
        icon: "/icons/factory.svg"
    },
    {
        id: 2,
        name: "BML Transport",
        heading: "Transport",
        icon: "/icons/truck.svg"
    },
    {
        id: 3,
        name: "BML Foreign Customs",
        heading: "Foreign",
        icon: "/icons/foreign.svg"
    },
    // {
    //     id: 4,
    //     name: "BML Handling",
    //     heading: "Handling",
    //     icon: "/icons/handling.svg"
    // },
    {
        id: 5,
        name: "BML Freight",
        heading: "Freight",
        icon: "/icons/freight2.svg"
    },
    // {
    //     id: 6,
    //     name: "BML VAS",
    //     heading: "VAS",
    //     icon: "/icons/vas.svg"
    // },
    {
        id: 7,
        name: "BML Indian Customs",
        heading: "Customs",
        icon: "/icons/customs2.svg"
    },
    {
        id: 8,
        name: "BML FTWZ",
        heading: "FTWZ",
        icon: "/icons/ftwz.svg"
    },
    {
        id: 9,
        name: "End Consumer",
        heading: "consumer",
        icon: "/icons/consumer.svg"
    },
]

const data1 = [
  {
      id: 1,
      name: "Factory<br/>Floor",
      heading: "CFS",
      icon: "/icons/factory.svg"
  },
  {
      id: 2,
      name: "BML<br/>Transport",
      heading: "Transport",
      icon: "/icons/truck.svg"
  },
  {
      id: 3,
      name: "BML<br/>Foreign Customs",
      heading: "Foreign",
      icon: "/icons/foreign.svg"
  },
  // {
  //     id: 4,
  //     name: "BML<br/>Handling",
  //     heading: "Handling",
  //     icon: "/icons/handling.svg"
  // },
  {
      id: 5,
      name: "BML<br/>Freight",
      heading: "Freight",
      icon: "/icons/freight2.svg"
  },
  // {
  //     id: 6,
  //     name: "BML<br/>VAS",
  //     heading: "VAS",
  //     icon: "/icons/vas.svg"
  // },
  {
      id: 7,
      name: "BML<br/>Indian Customs",
      heading: "Customs",
      icon: "/icons/customs2.svg"
  },
  {
      id: 8,
      name: "BML<br/>FTWZ",
      heading: "FTWZ",
      icon: "/icons/ftwz.svg"
  },
  {
      id: 9,
      name: "End<br/>Consumer",
      heading: "consumer",
      icon: "/icons/consumer.svg"
  },
]


const Freightthree = () => {
  return (
    <div className='bg-amber-50 my-8 md:my-20'>
      <div className='sjcontainer py-8 md:py-16'>
        <Heading title="Door to Door Shipment" className='text-center' />
        <div className='flex mt-10 max-lg:hidden flex-wrap items-center justify-center md:items-start mx-auto lg:max-w-[1000px]    xl:max-w-[1200px]'>
          {data1?.map((single, index) => {
            return (
              <div data-aos="fade-up" data-aos-delay={index * 100} className='relative  group text-center !mb-16 md:!mb-12 ' key={index}>
                <Image
                  className='h-10 mx-auto !object-contain mb-2'
                  src={single.icon}
                  alt="service"
                  width={100}
                  height={100}
                />
                <div className={`flex items-center`}>
                  <span className={`w-14 h-[1px] hidden md:block ${index === 0 ? "bg-white ml-1.5" : "bg-black"}`}></span>
                  <div className='mx-auto w-3 h-3 border border-black rounded-full'></div>
                  <span className={`w-14 hidden md:block ${index === data?.length - 1 ? "bg-white mr-1.5" : "bg-black"} h-[1px]`}></span>
                </div>
                {/* <h3 ></h3> */}
                <div className='text-center font-[500]  tracking-wide text-base mt-1 md:text-sm text-gray-700'  dangerouslySetInnerHTML={{__html: single?.name}} />

              
              </div>
            )
          })}
        </div>


        <div className='lg:hidden mx-auto relative w-[330px] flex flex-col items-center'>

  <div className='absolute left-[41.5%] sm:left-[46.5%] top-12 h-[652px] border-l border-black'></div>
  
  {data?.map((single, index) => {
    return (
      <div data-aos="fade-up" data-aos-delay={index * 50} data-aos-duration="500" className='relative flex items-center  group mx-auto group text-center' key={index}>
        <Image
          className='h-16 !object-contain mb-2 w-24 sm:w-32 pr-5 group-hover:scale-95 duration-200 max-w-[180px] '
          src={single.icon}
          alt="service"
          width={100}
          height={100}
        />
        <div className={`flex py-12 flex-col items-center `}>
          <div className='mx-auto w-3 h-3 border z-20 bg-amber-50 border-black rounded-full'></div>
        </div>
        <h3 className='text-left text-base mt-1 pl-4   w-[150px] tracking-wide md:text-base'>{single.name}</h3>
      </div>
    );
  })}
</div>


      </div>
    </div>
  )
}

export default Freightthree
