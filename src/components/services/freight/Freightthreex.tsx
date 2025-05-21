import Image from 'next/image'
import React from 'react'
import Freightfour from './Freightfour'
import Freightthree from './Freightthree'
import Heading from '@/components/shared/Heading'

const data1 = 
    {
        id:1,
        title:'Simplified Costing and Planning',
        desc:[
           `Get quotes and schedules in 4 seconds`,
`Save 75% time while booking freight by dealing with a single freight partner`,
`Get dozens of shipping options without making countless enquiries and follow ups`
        ],
        img1:"/services/freight/9.png",
        img2:"/services/freight/b555.png",
    }

const data2 =     {
        id:1,
        title:'Real-Time Tracking and Updates',
        desc:[
            `Auto-alerts for you & your clients for all milestones`,
            `Receive real-time transhipment alerts`,
            `Minimize losses by responding to unavoidable delays proactively`
        ],
        img1:"/services/freight/tracking.png",
        // img2:"/services/freight/b3.svg",
    }


const Freightthreex = () => {
  return (
    <div className=' my-6 bg-gray-50 md:my-12 py-8 md:py-12 '>
        <div className='sjcontainer'>
            <Heading className='mb-2 text-center md:text-left' title="Benefits of BML Freight" />
         <p className=' text-base text-center md:text-left md:text-lg text-gray-600'>Take complete control of your supply chain processes with the help of our digital platform and dedicated team</p>

        </div>
            <div className='grid sjcontainer lg:grid-cols-[25%,75%] max-lg:space-y-10 md:space-x-5 mt-8 md:mt-16 mb-24   '>
                <div className='border shadow-lg  font-[500] text-center'>
                    <div className=' bg-amber-100'>

                    <h2 className="border-b text-lg font-bold border-secondary px-2 py-12 ">{data1?.title}</h2>
                    </div>
                    <div>

                        {
                            data1.desc?.map((items) => {
                                return (
                                    <p className=" border-b border-secondary bg-gray-50 text-base text-gray-700 hover:text-black duration-200 py-5 md:py-10 px-2" key={items}>{items}</p>
                                )
                            })
                        }
                                </div>
                </div>
                <div className=' text-center text-2xl md:text-3xl'>
                    <div className=' mb-12 md:mb-28 mx-auto  max-lg:border-b border-dashed  border-gray-600'>
                        <h2 className='lg:mb-8  text-amber-500 font-[600]'>THE TRADITIONAL WAY</h2>
                        <Image className='w-full object-cover ' src={data1?.img1} width={1600} height={1000} alt="benefits" />
                    </div>
                    <div>
                        <h2 className='mb-8 text-amber-500  font-[600]'>THE BML WAY</h2>
                        <Image 
    className="w-full object-cover  mix-blend-multiply" 
    src={data1?.img2} 
    width={1500} 
    height={800} 
    alt="benefits" 
/>
                    </div>
                </div>
            </div>
            <Freightthree/>
            <Freightfour/>


            <div className='sjcontainer grid lg:grid-cols-[25%,75%] space-x-5 my-16 max-lg:space-y-10   '>
                <div className='border shadow-lg  font-[500] text-center'>
                    <div className=' bg-amber-100'>

                    <h2 className="border-b text-lg font-[600] border-secondary px-2 py-12 ">{data2?.title}</h2>
                    </div>
                    <div>
                        {
                            data2.desc?.map((items) => {
                                return (
                                    <p className=" border-b border-secondary bg-gray-50 text-base text-gray-700 hover:text-black duration-200 py-5 md:py-10 px-2" key={items}>{items}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=' text-center text-3xl'>
                    <div className='mb-20'>
                        <Image className='w-full ' src={data2?.img1} width={2000} height={1600} alt="benefits" />
                    </div>
                    
                </div>
            </div>





    </div>
  )
}

export default Freightthreex
