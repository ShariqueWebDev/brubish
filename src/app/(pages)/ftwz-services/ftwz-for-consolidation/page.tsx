import Five from '@/components/ftwz/consolidation/Five'
import Four from '@/components/ftwz/consolidation/Four'
import One from '@/components/ftwz/consolidation/One'
import Three from '@/components/ftwz/consolidation/Three'
import Two from '@/components/ftwz/consolidation/Two'
import Ftwz4 from '@/components/ftwz/Ftwz4'
import Eximmap from '@/components/services/Eximmap'
import Ftwzbanner from '@/components/shared/ftwzbanner'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className=''>
      {/* <One/>
      <Two/>
       */}
      {/* <Ftwzbanner title="FTWZ For consolidation" /> */}
     <div className='aspect-[2.67] max-md:hidden '>
                 <Image
                             src="/ftwz/banners/consolidation.png"
                             width={1600}
                             height={1000}
                             alt="Small Square"
                             className="w-full object-contain"
                           />
                 </div>
                 <div className='aspect-[1]  md:hidden '>
                         <Image
                           src="/ftwz/banners/consolidation-mobile.png"
                           width={1600}
                           height={1000}
                           alt="Small Square"
                           className="w-full object-contain"
                         />
                       </div>
      <Three/>
      <Four/>
      <Five/>
      <Ftwz4/>
<Eximmap/>
      {/* <Six/> */}
      {/* map */}
    </div>
  )
}

export default Page
