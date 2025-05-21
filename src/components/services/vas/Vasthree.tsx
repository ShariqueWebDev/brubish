import Subheading from '@/components/shared/Subheading'
import Image from 'next/image'
import React from 'react'
import { BsCircleFill } from 'react-icons/bs'

const data = [
    {
        id: 1,
        icon: "/services/vas/v1.png",
        title: "Cost reduction",
        content: "VAS can help reduce costs by eliminating the need for in-house staff and equipment.",
    },
    {
        id: 2,
        icon: "/services/vas/v2.png",
        title: "Improved efficiency",
        content: "VAS can help increase the efficiency of warehouse operations, which can lead to reduced costs and improved profitability.",
    },
    {
        id: 3,
        icon: "/services/vas/v3.png",
        title: "Better customer experience",
        content: "VAS can help improve the quality of products, which can lead to improved customer satisfaction and repeat business.",
    }, 
    {
        id: 4,
        icon: "/services/vas/v4.png",
        title: "Faster time to market",
        content: " VAS can help decrease time to market.",
    },
    {
        id: 5,
        icon: "/services/vas/v5.png",
        title: "Increased productivity",
        content: "VAS can help increase productivity.",
    },
    {
        id: 6,
        icon: "/services/vas/v6.png",
        title: "Enhanced Responsiveness",
        content: "VAS can help enhance Responsiveness for customers. ",
    },
    {
        id: 7,
        icon: "/services/vas/v7.png",
        title: "Flexibility",
        content: "Businesses can choose exactly which VAS they need and can tailor the services to their specific needs.",
    },
    {
        id: 8,
        icon: "/services/vas/v9.png",
        title: "Improved accuracy",
        content: "VAS providers often have access to advanced technology and specialized equipment, which can improve accuracy.",
    },
    {
        id: 9,
        icon: "/services/vas/v10.png",
        title: "Better forecasting and replenishment",
        content: "Inventory management systems can track the movement of goods in real time, allowing for better forecasting and replenishment.",
    }
]


const Vasthree = () => {
  return (
    <div className='bg-gray-100 py-10 my-10 md:py-16 md:my-16'>

    <div className='sjcontainer '>
        <Subheading className='text-left mb-4' title='Value-added services (VAS) can offer many benefits to businesses, including' />
         <div className='  grid md:grid-cols-2 lg:grid-cols-4 gap-7'>
            {
                data.map((item) => (
                    <div key={item.id} className=' p-4 text-center hover:shadow-md  duration-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white '>
                        <Image src={item.icon} alt="icon" className='w-28 mx-auto' width={100} height={100} />
                        <p className=' text-black text-lg '>{item.title}</p>
                        <div className=' bg-secondary w-20 h-[2px] mx-auto'></div>
                        <p className='text-gray-600 mt-3'>{item.content}</p>
                    </div>
                ))
            }
         </div>
            </div>
    </div>
  )
}

export default Vasthree
