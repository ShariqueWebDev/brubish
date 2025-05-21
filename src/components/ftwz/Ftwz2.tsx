import Image from 'next/image'
import React from 'react'
import Heading from '../shared/Heading'

const Ftwz2 = () => {
  return (
    <div className='my-20 md:my-32 sjcontainer'>
        <Heading  title="What is it BML FTWZ Intended for?" className='text-center' />
        <div className='grid lg:grid-cols-[32%,30%,32%] justify-between items-center text-base lg:text-lg mt-5 md:mt-10'>
        <div className=' space-y-6 md:space-y-16 text-left lg:text-right '>
        <div className='flex max-lg:flex-row-reverse items-center gap-2 lg:space-x-4'>
            <p>To make india a global trading hub like Dubai, Singapore, Shanghai.</p>
            <Image src="/ftwz/i5.png" width={100} height={100} className="max-w-[500px]  w-12 md:w-20" alt="warehouse" />
        </div>
        <div className='flex  max-lg:flex-row-reverse items-center gap-2 lg:space-x-4'>
            <p>To facilitate import & export of goods & services with freedom.</p>
            <Image src="/ftwz/i6.png" width={100} height={100} className="max-w-[500px]  w-12 md:w-20" alt="warehouse" />
        </div>


        </div>
        <div className='md:-mr-2 rounded-full overflow-hidden max-lg:my-6'>
            <Image  src="/services/ftwz/3.png" width={500} height={500} className="w-full max-w-[500px] mx-auto" alt="transport" />
        </div>
        <div className='space-y-6 md:space-y-16 text-left '>
        <div className='flex items-center gap-2 lg:space-x-4'>
            <Image src="/ftwz/i7.png" width={100} height={100} className="max-w-[500px]  w-12 md:w-20" alt="warehouse" />
            <p> To create world-class infrastructure for warehousing & trading.</p>
        </div>
        <div className='flex items-center gap-2 lg:space-x-4 '>
            <Image src="/ftwz/i8.png" width={100} height={100} className="max-w-[500px]  w-12 md:w-20" alt="warehouse" />
            <p>To introduce one-stop clearance of import & exports.</p>
        </div>
        </div>
            </div>
    </div>
  )
}

export default Ftwz2
