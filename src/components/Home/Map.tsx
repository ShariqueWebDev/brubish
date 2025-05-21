import Image from 'next/image'
import React from 'react'
import Heading from '../shared/Heading'

const Homemap = () => {
  return (
    
    <div className=" my-8 md:my-12">
 {/* <Heading title='Locations We Serve' className='text-center mb-4' /> */}

 {/* <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-5'></div> */}
 <Image
          src="/home/map-image.png"
          width={1600}
          height={800}
          alt="BML Desktop"
          className="aspect-[4/1.8]   max-sm:hidden w-full !object-contain"
        />  
    <Image
          src="/home/map-image-mobile.png"
          width={800}
          height={800}
          alt="BML Mobile"
          className="aspect-[1] pr-2 sm:hidden w-full !object-contain"
        />  
    </div>
  )
}

export default Homemap
