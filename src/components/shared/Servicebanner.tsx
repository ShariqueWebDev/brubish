import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Servicebanner = ({icon="",heading="",title="",description="",buttontext="",buttonlink="",bannerImage=""}) => {
  return (
    <div className='flex pt-[15vh] flex-col-reverse lg:flex-row items-start  justify-center bg-blue-900 px-4 md:px-16 py-10 md:py-16 gap-4 md:gap-10'>
        <div className='lg:w-[50%] md:px-4  '>
            <div className='flex items-center gap-3 mb-2'>
                <div className='p-2.5 bg-white rounded-full'>

                <Image src={icon} height={25} width={25} alt={heading} className=' w-5 md:w-8 h-5 md:h-8' />
                </div>
                <span className='text-sm uppercase font-bold text-white'>{heading}</span>
            </div>
            <h2 className=' text-xl md:text-4xl text-white '>{title}</h2>
            <p className='text-white mb-3 text-sm md:text-base py-3'>{description}</p>
            <Link href="#sectioncontact">
  <div className='inline px-3 md:px-5 py-2 md:py-4 text-black bg-gradient-to-r from-secondary rounded-md to-secondary1 bg-[length:200%_100%] font-bold bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer'>
    Get In Touch
  </div>
</Link>
        </div>
        <div className='lg:w-[50%]'>
            <div className='max-w-[500px] mx-auto p-4 bg-primary rounded-md '>
                
                <Image src={bannerImage} alt={title} height={700} width={900} className='w-full rounded-md h-full' />
            </div>
        </div>
    </div>
  )
}

export default Servicebanner
