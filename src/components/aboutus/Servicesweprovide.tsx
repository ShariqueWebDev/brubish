import { ftwzData, servicesData } from '@/app/layout'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Servicesweprovide = () => {
  return (
    <div className='my-8 ms:my-16 sjcontainer'>
    <div className='flex flex-col  justify-center items- text-center   mb-4'>
   <span className=' tracking-wide  text-base md:text-base py-1 font-bold  rounded-sm text-black '>
        BML
   </span>
     {/* <div className='w-16 h-1   bg-secondary rounded-full '></div> */}
 
   <p className='text-primary text-4xl font-bold mb-4 text-center mt-1'>Services We Provide</p>
 </div>
 
 
             <div className={`  grid lg:grid-cols-[55%,45%]  mx-auto   w-full `}>
      
            
 <div className='py-4 md:py-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-3'>
   {
     servicesData?.map((data, index) => {
       return (
         <Link href={`/services${data?.url}`} key={index} className='relative h-60 shadow-xl overflow-hidden group'>
         <Image 
           src={data.img} 
           alt={data.name} 
           height={500}
           width={300} 
           objectFit="cover" 
           className='h-full w-full !object-cover'
         />
         
         <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/40 via-black/50 to-black/100  h-full w-full text-white text-center p-2'></div>
         
         <div className='absolute bottom-0 left-0 right-0 text-white text-left p-2'>
 
   <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary1 opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
   
   <div className='relative z-10 p-3'>
     <h3 className='text-lg font-bold '></h3>
     <h3 className='text-xl leading-5 font-[500] my-1 '>{data?.name}</h3>
     <p className='translate-y-14 flex gap-x-1 text-sm items-center group-hover:-translate-y-0 -mb-4 group-hover:mb-2  duration-300'>{data?.description}</p>
     <p className='translate-y-10 flex gap-x-1 text-base items-center group-hover:-translate-y-0 -mb-4 group-hover:mb-2 font-bold duration-300'>View Details<span ><ArrowRight strokeWidth={3} size={16}/></span></p>
   </div>
 </div>
 
       </Link>
       
       )
     })
   }
 </div>
 

 
           
             {/* Image Section */}
             <div className=' bg-gray-50 shadow-lg p-2 max-md:mt-4 md:p-8 md:pt-4  flex-1'>
               <h2 className='text-primary font-bold text-2xl'>FTWZ Services</h2>
               <div className='w-28 h-1 bg-primary mb-2'></div>
               <p className='text-gray-600'>FTWZ (Free Trade and Warehousing Zone) services in logistics provide businesses with specialized zones for storage, warehousing, and distribution of goods without customs duties. </p>
               <div>
                 {
 ftwzData?.map((blog) => {
   return (
     <Link href={`/ftwz-services/${blog.url}`} className='pb-2 flex items-center gap-4 pt-5 border-b border-primary/20'>
      <div className='w-10 h-10 mt-3 mb-1'>

      <Image 
           src="/icons/aeroplane.svg" 
           alt="icoss" 
           height={50}
           width={30} 
           objectFit="cover" 
           className='h-full w-full !object-cover'
           />
           </div>
     <p className='text-base hover:text-primary'>{blog?.name}</p>
       </Link>
   )
 })                }
               </div>
             </div>
                   </div>
     
          
     </div>
  )
}

export default Servicesweprovide
