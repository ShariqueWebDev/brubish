import Image from 'next/image'
import React from 'react'
import Heading from '../shared/Heading'

const Imagevector = () => {
  return (
    
    <div className="sjcontainer py-8">
      <Heading title="Logistics, But Better" className='text-center mb-4 md:mb-8'  />

 {/* <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-5'></div> */}

      <Image height={1600} width={2000} className='w-full h-full' src="/imagevector.png" alt="sda"  />
    </div>
  )
}

export default Imagevector

