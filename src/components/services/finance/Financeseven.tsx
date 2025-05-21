import Heading from '@/components/shared/Heading'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        id: 1,
        title: "Check Eligibility",
        content: "Check your loan eligibility",
    },
    {
        id: 2,
        title: "Submit Application",
        content: "Complete a 100% online application form",
    },
    {
        id: 3,
        title: "Get Sanctioned",
        content: "We will evaluate your application and propose a fair sanction",
    },
    {
        id: 4,
        title: "Receive Funds",
        content: "Get disbursements within 2 days of sanction",
    },

]


const Financeseven = () => {
  return (
    <div className="sjcontainer px-3 py-6 my-8 md:my-16">
        <div className='grid md:grid-cols-2 '>
<div className='mx-auto mt-10'>
 <Heading title="How to apply ?" className='mb-2' />
   <p className='text-lg'>Step-by-step online process to apply for Financing</p>
   <div className='mt-6 md:hover:mt-5 duration-200 ease-in-out'>

   <Link href="/contact-us" className='text-white rounded-lg text-lg bg-gradient-to-r  from-primary to-primary/60 hover:bg-primary  px-4 py-2 font-medium'>Apply for credit</Link> 
   </div>
</div>
<div className='relative mx-auto max-md:mt-6'>
    <div className='h-[320px] top-10 w-[1px] left-7 absolute border border-gray-600  border-dashed'></div>
    {
        data.map((item, index) => (
            <div key={index} className='flex space-x-4  py-4 my-4'>
                <span className='text-3xl text-center bg-white z-10  font-extralight m-auto pt-2  border w-14 h-14 '>{index + 1}</span>
                <div className=' flex-1 mt-1'>

                <span className='text-lg'>{item.title}</span>
                <p className='text-sm text-gray-500'>{item.content}</p>
                </div>
            </div>
        ))
    }
</div>

        </div>
    </div>
  )
}

export default Financeseven
