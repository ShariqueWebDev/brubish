import ContactForm from '@/components/Contact/Contactform'
import Homemap from '@/components/Home/Map'
import Bannerfull2 from '@/components/shared/Bannerfull2'
import Ftwzbanner from '@/components/shared/ftwzbanner'
import { ChevronRight, MailIcon, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='sjcntainer'>
      
      <Ftwzbanner title="Contact Us" />


        <div className='w-full max-md:mt-10 '>
    <div className='relative max-w-[1200px] mx-auto   md:flex bg-transparent md:-mt-16  z-30 flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-10    p-4'>
    <a href="mailto:Info@bookmylogistic.com" className='flex-1 hover:scale-105 duration-300 h-[150px] md:h-[200px] pt-10  border rounded-lg shadow-lg p-4 flex flex-col justify-start items-center bg-white'>
        {/* <MdEmail size={40} className="text-red-500 mb-2" /> */}
        <img src="/contact/gmail.svg" className='w-10 md:w-16 mb-2' />  

        <p className="text-gray-600 text-lg mt-2">Info@bookmylogistic.com</p>
      </a>
       <a   href={"https://wa.me/919631963163"} className='flex-1 hover:scale-105 duration-300 h-[150px] md:h-[200px] pt-10 border rounded-lg shadow-lg p-4 flex flex-col justify-start items-center bg-white'>
      <img src="/contact/whatsapp.svg" className=' w-10 md:w-16 mb-2' />  
     
        <p className="text-gray-600 text-lg mt-2">9631963163</p>
      </a>
      <div className='flex-1 hover:scale-105 duration-300 h-[150px] md:h-[200px] pt-10 border rounded-lg shadow-lg p-4 flex flex-col justify-start items-center bg-white'>
      <img src="/contact/address.svg" className='w-10 md:w-16 mb-2' />  

        <p className="text-gray-600 text-center text-base mt-2">Plot No D-9/10 ,Duvvada, Vishakhapatnam, Andhra Pradesh-530049</p>
      </div>
      </div>
      </div>


          <Homemap/>
    </div>
  )
}

export default Page
