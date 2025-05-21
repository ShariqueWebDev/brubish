import Subheading from '@/components/shared/Subheading'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Customfour = () => {
  return (
    <div className='bg-gray-50'>
    <div className='sjcontainer my-8 md:my-12 py-8 md:py-12'>
        <Subheading className='text-center mb-10' title='First time clearing a shipment? Don’t worry we’ll make it easy' />

    {/* <div className=' w-32 md:w-60 h-[3px] mb-10 mt-2 bg-secondary mx-auto'></div> */}
<div className='grid md:grid-cols-2 md:gap-x-12 md:gap-y-12 max-md:space-y-10'>
    
    

    <div>
        <div className='flex mb-3 md:mb-4 items-center space-x-3'>
            <Image src="/services/customs/p1.svg" className=' w-9 md:w-12' alt="" width={100} height={100}/>
            <h2 className=' text-lg md:text-2xl'>Communication is our priority</h2>
        </div>
        <p className='text-gray-600 text-sm md:text-[15px] leading-6 '>
        Communication is paramount not only to Clearit USA, but to Customs Brokerage and logistics as a whole. That’s why we offer multi-channel communication, keeping you and the rest of your supply chain up to date every step of the way.
        </p>
    </div>









    <div>
    <div className='flex mb-3 md:mb-4  items-center space-x-3'>
            <Image src="/services/customs/p2.svg" className='w-12' alt="" width={100} height={100}/>
            <h2 className=' text-lg md:text-2xl'>Quick & Compliant</h2>
        </div>
        <p className='text-gray-700 text-sm  md:text-[15px] leading-6 '>Clearit USA prides itself on the ability to act quickly & efficiently while maintaining compliance. Using our proprietary software and “swarm” approach, we can ensure no detail is overlooked and offer the quickest turnaround time in the industry, guaranteed.</p>     
    </div>
    
    
    
    <div>
    <div className='flex mb-3 md:mb-6 items-center space-x-3'>
            <Image src="/services/customs/p3.svg" className='w-12' alt="" width={100} height={100}/>
            <h2 className=' text-lg md:text-2xl'>Available now, when you need us</h2>
        </div> 
        <p className='text-gray-700 mb-4 text-sm md:text-base '>Traditional brokerage models are antiquated – It can take days just to activate an account. You want to work with a Customs Broker that can work at the speed of today’s business.</p>
        <p className='font-[400] mb-1 mt-4'>With Clearit technology you get:</p>
        <div className='text-gray-700 mt-3  md:space-y-2 text-[15px]'>

        <p className='flex items-start '><CheckCircle className='min-w-2 w-4  mr-2'/>Ready account activation within minutes</p>
        <p className='flex items-center'><CheckCircle className='min-w-2 w-4  mr-2'/>Document upload with visual confirmation</p>
        <p className='flex items-center'><CheckCircle className='min-w-2 w-4  mr-2'/>Live chat sessions throughout the lifetime of your shipment</p>
        </div>
    </div>
    
    
    
    
    <div>
    <div className='flex mb-3 md:mb-6 items-center space-x-3'>
            <Image src="/services/customs/p4.svg" className='w-12' alt="" width={100} height={100}/>
            <h2 className=' text-lg md:text-2xl'>Transactional & Transparent</h2>
        </div>
        <p className='mb-4 text-gray-700 text-sm md:text-base'>Clearit prides itself on pioneering the online customs clearance industry.</p>
        <p className='font-[400] mb-1 text-base '>1. First fully transactional customs brokerage website:</p>
        <p className='mb-4 text-gray-700 text-sm md:text-[15px] '>From account creation and document upload to online bill payment. Clearit’s state of the art platform is continuously evolving to provide users the best experience in the business.</p>
        <p className='font-[400] mb-1 text-base '>2. Transparent pricing:</p>
        <p className='text-gray-700 text-sm md:text-[15px]'>We were the first to post our pricing and today offer a menu of pricing that optimizes cost for all user types. Avoid the hidden charges common in the industry.</p>
    </div>








    </div>
        </div>
    </div>
  )
}

export default Customfour
