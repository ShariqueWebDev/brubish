import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import React from 'react'

const Two = () => {
  return (
    <div>
      <div className='px-4'>
        <Heading title='Current System' className="text-center" />
      {/* <h2 className='text-center text-2xl md:text-4xl '></h2> */}
      <div className='w-24 h-[2px] mx-auto mb-6 mt-2 bg-secondary'></div>
      <div>

      <Image src="/ftwz/5.png" className='mx-auto w-full max-w-[1200px]' alt="" width={1600} height={1000} />
      </div>
      <Heading title='In FTWZ' className="text-center mt-16" />

      {/* <h2 className='text-center text-2xl md:text-4xl  mt-20'>In FTWZ</h2> */}
      <div className='w-24 h-[2px] mx-auto mb-6 mt-2 bg-secondary'></div>

      <div>

      <Image src="/ftwz/6.png" className='mx-auto w-full max-w-[1200px]' alt="" width={1600} height={1000} />
      </div>
    </div>
    </div>
  )
}

export default Two
