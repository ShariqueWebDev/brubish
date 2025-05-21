import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const data = [
    {
        id: 1,
        name: <p>Reliable Fleet<br />
            Availability</p>
        ,
        icon: "/services/trucking/t1.svg",
        content: `Find the right fleets that meet your requirements anytime through our extensive network of transporters`
    },
    {
        id: 2,
        name: <p>Better<br />
            Visibility</p>,
        icon: "/services/trucking/t3.svg",
        content: `Avoid disruptions and make smarter decisions, effortlessly. Enjoy better visibility for on-time assurance.`
    },
    {
        id: 3,
        name: <p>Timely<br />Pickup Up & Delivery</p>
        ,
        icon: "/services/trucking/t91.svg",
        content: `Drive the processes efficiently through digitalization & close monitoring to ensure your goods picked & delivered timely.`
    },
]







const Trucktwo = () => {
    return (
        <div className=' my-8 md:my-16'>
            <div className='bg-gray-800 text-white'>
            
            <div className='sjcontainer text-center py-8 md:py-16 mb-10'>
                <h2 className=" text-3xl md:text-5xl font-bold mb-8">Transportation</h2>
                <p className=' text-base md:text-xl leading-8 text-balance '>Book on-ground transportation for your cargo to and from all major inlands and ports across India for FTL and LTL volumes as well as special types of transport like reefers and Over Dimensional Cargo (ODC)</p>


            </div>
                </div>
            <div className='bg-gray-50'>

                <div className='md:flex items-center max-md:space-y-10  py-16  sjcontainer'>
                    {
                        data.map(item => (
                            <div className='mx-4'>
                                <Image src={item.icon} alt={item.name} width={30} height={30} className='w-20 mx-auto' />
                                <div className='text-center'>
                                    <h3 className='text-lg  md:text-base font-[600] py-1.5  mt-2  uppercase'>
                                        {item.name}
                                    </h3>
                                    <p className='text-sm   py-0.5 text-gray-500'>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bg-[url("/services/trucking/bg1.webp")]'>

                <div className={` sjcontainer  py-8 md:py-24  md:grid grid-cols-2 max-md:space-y-6 items-center`}>
                    <div>
                        <Image src='/services/trucking/30.png' alt='trucking' width={800} height={550} className='w-full max-w-[300px] md:max-w-[600px] mx-auto' />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Track Everything Effortlessly</h2>
                        <p className='text-gray-600 font-light my-3'>Track and trace your shipments easily and<br className='max-md:hidden' /> let go all of your shipping stress by using BML</p>
                        <div className='mt-4'>
                            <span className=' rounded-xl bg-secondary px-6 py-3'>Ship With Us </span>
                        </div>

                    </div>
                </div>
               
            </div>


         

        </div>
    )
}

export default Trucktwo
