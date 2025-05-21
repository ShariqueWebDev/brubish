import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const data2 = [
    {
        id: 1,
        name: "",
        icon: "/services/trucking/t91.svg",
        content: `Avoid the stress of dealing with multiple partners for trucking and shipping`
    },
    {
        id: 2,
        name: "",
        icon: "/services/trucking/t92.svg",
        content: `Track your shipment on ground in real-time and get regular status updates`
    },
    {
        id: 3,
        name: "",
        icon: "/services/trucking/t93.svg",
        content: `Give your customers accurate updates on delivery timelines and enhance their customer satisfaction`
    },
    {
        id: 4,
        name: "",
        icon: "/services/trucking/t94.svg",
        content: `Plan your supply chain processes effectively based on accurate delivery information`
    }
]
const Truckfour = () => {
  return (
    <div className='  bg-amber-50'>
        
    <div className=' py-10 md:py-20 '>
               
    <div className='grid sjcontainer lg:grid-cols-[30%,70%] max-lg:space-y-4  '>
        <div className=' flex items-center justify-center'>
            <Image className=' w-48' width={200} height={200} src="/services/trucking/t90.svg" alt="truck" />
        </div>
        <div className='grid md:grid-cols-2 gap-x-12  '>
            {
                data2?.map((item) => {
                    return (
                        <div key={item.id} className='py-4 flex items-start space-x-3'>
                            <Image className=' w-10 md:w-12  ' src={item.icon} alt={item.name} width={40} height={40} />
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
    <div className='bg-amber-50 py-10'>
    <div className=' sjcontainer grid md:grid-cols-2 justify-between md:space-x-10'>
      
      
    <div className='p-4  max-w-[600px]'>
            <div className='flex items-center space-x-4 mt-4 mb-4 md:mb-8'>
                <Image src='/services/trucking/t4.svg' alt='trucking' width={800} height={550} className=' w-[44px] md:w-[70px] ' />
                <p className='font-bold text-xl md:text-3xl '>Secure, On time, in Full Delivery</p>
            </div>
            <div className='space-y-3 text-base text-gray-600'>


                <p className='flex items-center justify-start space-x-2'>
                    <Check className='min-w-12' /> CCTV covered Packaging, Warehousing, and transhipments. Fillings and documentation digitized.
                    Fillings and documnentation digitized</p>
                    <p className='flex items-center justify-start space-x-2'>
                    <Check className='min-w-12' /> On demand, same day, and contracted services to match your business needs
                </p>
            </div>
        </div>
      
        <div className='p-4  max-w-[600px]'>
            <div className='flex items-center space-x-4 mt-4 mb-4 md:mb-8'>
                <Image src='/services/trucking/t5.svg' alt='trucking' width={800} height={550} className=' w-12 md:w-16 ' />
                <p className='font-bold text-xl md:text-3xl'>End to End Visibility</p>
            </div>
            <div className='space-y-3 text-base'>

                <p className='flex items-center justify-start space-x-2'>
                    <Check className='min-w-12' /> Notification and Status updates in your inbox</p>
                <p className='flex items-center justify-start space-x-2'>
                    <Check className='min-w-12' />End to End tracking of Cargo and Documentation</p>
            </div>
        </div>
      

    </div>
</div>
</div>
  )
}

export default Truckfour
