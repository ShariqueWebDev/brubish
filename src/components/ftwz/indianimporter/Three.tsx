import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import React from 'react'



const Three = () => {
  return (
    <div className='bg-amber-50 py-8 md:py-16'>

    <div className='sjcontainer  '>
        <Heading title='Current System' className="text-center" />
      {/* <h2 className='text-center text-2xl md:text-4xl '>Current System</h2> */}
      <div className='w-24 h-[2px] mx-auto mb-6 mt-2 bg-secondary'></div>
      <div>

      <Image src="/ftwz/importersone.png" className='mx-auto w-full max-w-[1200px]' alt="" width={1600} height={1000} />
      </div>
      <Heading title='In FTWZ' className="text-center mt-16" />

      <div className='w-24 h-[2px] mx-auto mb-6 mt-2 bg-secondary'></div>
      <div>

      <Image src="/ftwz/importerstwo.png" className='mx-auto mix-blend-multiply w-full max-w-[1200px]' alt="" width={1600} height={1000} />
      </div>
    </div>
    </div>
  )
}

export default Three
