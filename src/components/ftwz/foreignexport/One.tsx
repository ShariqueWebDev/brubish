import { ArrowBigRightDashIcon, Check, CheckCheck, ChevronsRight, CircleCheck, CircleCheckIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { MdChevronRight, MdDoubleArrow } from 'react-icons/md'
import { TbArrowsDoubleNeSw } from 'react-icons/tb'

const data = [
    {
        title:"Deemed Foreign Territory",
        desc1:"FTWZ is considered a foreign territory within India, providing global trade benefits.",
        desc2:"Functions as a dry port, enabling seamless trade operations"
    },
    {
        title:"No Regulatory Documentation",
        desc1:"Foreign entities can operate without registered documents from Indian regulatory authorities",
        desc2:"No need for approvals from the Ministry of Corporate Affairs or other governing bodies"
    },
    {
        title:"Simplified Registration Process",
        desc1:"No Import Export Code (IEC) required for operating from FTWZ.",
        desc2:"Easy setup for businesses to commence operations."
    },
    {
        title:"Access to the Indian Market",
        desc1:"Significant opportunity to penetrate and create a presence in the growing Indian market",
        desc2:"Ideal for international businesses targeting Indian customers"

    },
    {
        title:"Stock Point Setup for Foreign Entities",
        desc1:"Foreign companies without a physical presence in India can establish stock points. ",
        desc2:"Provides a direct distribution hub for Indian operations."
    },
    {
        title:"Regional Market Expansion",
        desc1:"Expand operations to neighboring countries: Bangladesh, Sri Lanka, Myanmar, and Nepal. ",
        desc2:"Use FTWZ as a strategic base for regional distribution. "
    }
]

const Oneforeignexport = () => {
  return (
    <div className='bg-amber-50'>

    <div className='gap-x-6 sjcontainer  py-8 md:py-16'>

    <div className='grid md:grid-cols-[48%,52%] lg:space-x-10 '>
        <div className=' '>
            <div className='grid md:grid-cols-2 min-h-[180px]  '>
            <div className=' space-y-2.5 p-2'>
                    <h3 className='font-[500] text-amber-500 text-lg mb-1.5'>{data[0].title}</h3>
                    <p className='text-[13px] flex text-gray-600 '><MdChevronRight  className='min-w-6 text-amber-500' size={25}/>{data[0].desc1}</p>
                    <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[0].desc2}</p>
                </div>
                <div className=' space-y-2.5 p-2'>
                    <h3 className='font-[500] text-lg text-amber-500 mb-1.5'>{data[1].title}</h3>
                    <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[1].desc1}</p>
                    <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[1].desc2}</p>
                </div>
                
            </div>
            <div>
                <Image src="/ftwz/foreignexports/f1.png" alt="foreign exports" width={800} height={500} className='my-3 mix-blend-multiply' />
            </div>
            <div className='md:w-[300px]  mx-auto'>

            <div className=' space-y-2.5 p-2 '>
                    <h3 className='text-lg text-amber-500'>{data[2].title}</h3>
                    <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[2].desc1}</p>
                    <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[2].desc2}</p>
                </div>
            </div>
        </div>
        <div className=' '>


        <div className='md:w-[300px] min-h-[180px] mx-auto'>

<div className=' space-y-2.5 p-2'>
        <h3 className='text-lg mb-2 text-amber-500'>{data[3].title}</h3>
        <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[3].desc1}</p>
        <p className='text-[13px] flex text-gray-600 '><MdChevronRight className='min-w-6 text-amber-500' size={25}/>{data[3].desc2}</p>
    </div>
</div>
         
            <div>
                <Image src="/ftwz/foreignexports/f2.png" alt="foreign exports" width={800} height={500} className='my-3 mix-blend-multiply' />
            </div>
            <div className='grid md:grid-cols-2 '>
            <div className=' space-y-2.5 p-2'>
                    <h3 className='font-[500] text-amber-500 text-lg mb-1.5'>{data[4].title}</h3>
                    <p className='text-[13px] flex text-gray-600 '><ChevronsRight className='min-w-6 text-amber-500' size={25}/>{data[4].desc1}</p>
                    <p className='text-[13px] flex text-gray-600 '><ChevronsRight className='min-w-6 text-amber-500' size={25}/>{data[4].desc2}</p>
                </div>
                <div className=' space-y-2.5 p-2'>
                    <h3 className='font-[500] text-amber-500 text-lg mb-1.5'>{data[5].title}</h3>
                    <p className='text-[13px] flex text-gray-600 '><ChevronsRight className='min-w-6 text-amber-500' size={25}/>{data[5].desc1}</p>
                    <p className='text-[13px] flex text-gray-600 '><ChevronsRight className='min-w-6 text-amber-500' size={25}/>{data[5].desc2}</p>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Oneforeignexport