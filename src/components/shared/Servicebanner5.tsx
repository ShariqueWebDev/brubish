import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Servicebanner5 = ({icon="",heading="",title="",description="",buttontext="",buttonlink="",bannerImage="",points=[]}) => {
  return (
    <div className='flex  flex-col-reverse lg:flex-row items-end  justify-center bg-secondary1/20 px-4 md:px-8  gap-4 md:gap-x-10'>
        <div className='lg:w-[50%] md:px-4 mb-4  '>
            <div className='flex items-center gap-3 mb-2'>
                <div className='p-2.5 bg-white rounded-full'>

                <Image src={icon} height={25} width={25} alt={heading} className=' w-5 md:w-8 h-5 md:h-8' />
                </div>
                <span className='text-sm uppercase font-bold'>{heading}</span>
            </div>
            <h2 className=' text-xl md:text-4xl   '>{title}</h2>
            <p className='  mb-3 text-sm md:text-base py-3'>{description}</p>
            
            {
                points?.length === 0 ?
                
                <Link href="#sectioncontact">
  <div className='inline px-3 md:px-5 py-2 md:py-4 text-black bg-gradient-to-r from-secondary rounded-md to-secondary1 bg-[length:200%_100%] font-bold bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer'>
    Get In Touch
  </div>
</Link>  : 
                points.map((point,index)=>(
                    <div key={index} className='flex font-light text-sm md:text-base   items-center gap-3 mb-2'>
                        <span className='bg-secondary  rounded-full p-1.5'><FaCheck size={10} /></span> {point}
                        </div>)
)            }
        </div>
        <div className='lg:w-[50%]  '>
           
                <div className=' w-full md:w-[400px] m-auto'>

                <Image src={bannerImage} alt={title} height={400} width={600} className='w-full rounded-md h-full' />
                </div>
          
        </div>
    </div>
  )
}

export default Servicebanner5
