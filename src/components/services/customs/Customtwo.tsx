import Image from 'next/image'
import React from 'react'

const data2 = [
    {
        id: 1,
        name: "",
        icon: "/services/customs/b2.svg",
        content: `Avoid the stress of dealing with multiple partners for trucking and shipping`
    },
    {
        id: 2,
        name: "",
        icon: "/services/customs/b3.svg",
        content: `Track your shipment on ground in real-time and get regular status updates`
    },
    {
        id: 3,
        name: "",
        icon: "/services/customs/b4.svg",
        content: `Give your customers accurate updates on delivery timelines and enhance their customer satisfaction`
    },
    {
        id: 4,
        name: "",
        icon: "/services/customs/b5.svg",
        content: `Plan your supply chain processes effectively based on accurate delivery information`
    }
]


const Customtwo = () => {
  return (
    <div className='  bg-gray-50'>
               
                    <div className='bg-gray-800 text-white'>

              
                    </div>
                <div className='grid sjcontainer lg:grid-cols-[30%,70%] max-lg:space-y-4  py-8 lg:py-16'>
                    <div className=' flex items-center justify-center'>
                        <Image className=' w-40 md:w-60' width={200} height={200} src="/services/customs/b1.svg" alt="truck" />
                    </div>
                    <div className='grid md:grid-cols-2 gap-x-12  '>
                        {
                            data2?.map((item) => {
                                return (
                                    <div key={item.id} className=' py-4 md:py-8 flex items-start space-x-3'>
                                        <div className=" p-3 md:p-4 border border-gray-400 bg-gray-800 rounded-full">
                                        <Image className=' min-w-7 md:min-w-8  ' src={item.icon} alt={item.name} width={40} height={40} />
                                            </div>
                                        <div className='text-center'>
                                            
                                            <p className=' text-base  text-left   py-0.5 text-gray-500'>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        

            </div>
  )
}

export default Customtwo
