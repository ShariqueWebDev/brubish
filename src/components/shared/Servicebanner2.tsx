import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Servicebanner2 = ({istrucking=false,icon="",heading="",title="",description="",buttontext="",buttonlink="",bannerImage="",points=[]}) => {
  return (
    <div className='flex pt-[55px] flex-col-reverse lg:flex-row items-end  justify-center bg-amber-200 px-4 md:px-8 gap-4 md:gap-x-10'>
        <div className='lg:w-[50%] md:px-4 mb-4  '>
            
            <h2 className=' text-[22px] font-[500] md:text-4xl   '>{title}</h2>
            <p className='  mb-3 text-sm md:text-base py-3'>{description}</p>
            
            {
                points?.length === 0 ?
                
                <Link href="#sectioncontact">
  <div className='inline px-3 md:px-5 py-2 md:py-4 text-black bg-gradient-to-r from-secondary rounded-md to-secondary1 bg-[length:200%_100%] font-bold bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer'>
    Get In Touch
  </div>
</Link>  : 
                points.map((point,index)=>(
                    <div key={index} className='flex  text-sm md:text-base items-center gap-3 mb-2'>
                        <span className='bg-secondary  rounded-full p-1.5'><FaCheck size={10} /></span> {point}
                        </div>)
)            }
        </div>
        <div className=' w-full lg:w-[50%] -ml-[100px]  '>
           
                
                <Image src={bannerImage} alt={title} height={1000} width={1200} className='w-full rounded-md h-full' />
          
        </div>
    </div>
  )
}

export default Servicebanner2
