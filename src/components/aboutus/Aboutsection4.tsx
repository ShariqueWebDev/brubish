import Image from 'next/image'
import React from 'react'

const Aboutsection4 = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row  items-center lg:h-[100vh] '>
            <div className='lg:w-1/2 flex items-center bg-primary text-white h-full px-4 py-8 md:p-12' >
            <div>

                <h2 className='  text-2xl  md:text-4xl font-bold '>Flexible Pricing Policy & Decades of Experience!</h2>
                <p className=' text-sm md:text-base my-6 font-[600]'>We believe that the services, offered by our company, should satisfy the high
                    expectations of our customers. We are dedicated in creating added value for our customers by
                    implementing modern technology in our work. That is why the desire of constant improvement is the
                    driving force behind our transportation business.</p>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-bold text-xl md:text-2xl'>3,134</p>
                        <span className=' text-xs md:text-sm font-bold'>Clients Worldwide</span>
                    </div>
                    <div>
                        <p className='font-bold text-xl md:text-2xl'>70,000</p>
                        <span className='text-xs md:text-sm font-bold'>Delivered Consignments</span>
                    </div>
                    <div className=''>
                        <p className='font-bold text-xl md:text-2xl'>0.7m</p>
                        <span className='text-xs md:text-sm font-bold'>Miles Driven</span>
                    </div>


                </div>
                <p className=' text-sm md:text-base mt-6'>
                    Providing the best transport and shipping services currently available
                    allover the world. Our skilled personnel, utilising the latest communications, new tracking and
                    processing software, combined with decades of experience!
                </p>
            </div>
            </div>

            <div className='lg:w-1/2  h-full'>

                <Image
                    src="https://img.freepik.com/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468884.jpg?t=st=1727945211~exp=1727948811~hmac=69c680ee7298bbbf44dc328092ee756edfb0df8a66fd2206a62796ceb53e67d6&w=740"
                    alt="banner"
                    className='!object-cover group-hover:scale-105 duration-300 w-full h-full mx-auto'
                    width={1400}
                    height={800}
                />
            </div>

        </div>
    )
}

export default Aboutsection4
