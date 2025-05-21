import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Heading from './Heading'
import Subheading from './Subheading'

const Servicebanner3 = ({istrucking=false,icon="",heading="",title="",description="",buttontext="",buttonlink="",bannerImage="" ,invert=false}) => {
  return (
    <div
    className={`flex pt-6  md:pt-10 pb-6 flex-col-reverse lg:flex-row items-center justify-center px-4 md:px-16  gap-4 md:gap-10 bg-cover  `}
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1)), url("https://img.freepik.com/premium-vector/abstract-grey-hitech-polygonal-corporate-white-grey-gray-background-vector-stripes-minimal-light-design_249611-5946.jpg?w=1380")`,
      backgroundBlendMode: 'overlay',
    }}
  >
        <div className='lg:w-[50%] md:px-4  '>
            <div className='flex items-end max-lg:justify-center   gap-2 mb-2'>
                <div className='p-1  rounded-full'>

                <Image src={icon} height={25} width={25} alt={heading} className=' w-8' />
                </div>
                <span className=' text-base md:text-sm text-amber-600 font-[600]  uppercase   '>{heading}</span>
            </div>
            <h2 className='text-[22px]  max-lg:text-center    md:text-4xl   py-1  font-bold md:font-[500]'>{title}</h2> 
            <div className={` lg:hidden ${istrucking ? "lg:max-w-[700px]" : "lg:max-w-[500px]"}   mx-auto p-1 overflow-hidden`}   >
  <Image 
    src={bannerImage} 
    alt={title} 
    height={700} 
    width={900} 
    className={`w-full h-full  mix-blend-multiply !object-contain  ${invert &&  "scale-x-[-1]"}`} 
  />
</div>
            <p className='text-gray-600 mb-3 text-sm md:text-base py-2 max-md:text-center'>{description}</p>
 
            <Link  href="/contact-us" className=' max-md:mx-auto mt-3 block px-4 w-[160px] text-center py-2 bg-gradient-to-tr from-secondary to-secondary1 hover:to-amber-400 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:-translate-y-1 duration-200 '>
    Get In Touch
</Link>
  
        </div>
        <div className='lg:w-[50%]    '>
        <div className={ `max-lg:hidden ${istrucking ? "lg:max-w-[700px]" : "lg:max-w-[500px]"}   mx-auto p-1 overflow-hidden`}   >
  <Image 
    src={bannerImage} 
    alt={title} 
    height={700} 
    width={900} 
    className={`w-full h-full  mix-blend-multiply !object-contain  ${invert &&  "scale-x-[-1]"}`} 
  />
</div>
        </div>
    </div>
  )
}

export default Servicebanner3
