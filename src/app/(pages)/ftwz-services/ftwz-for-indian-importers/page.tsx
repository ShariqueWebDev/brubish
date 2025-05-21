import One from '@/components/ftwz/indianimporter/One'
import Two from '@/components/ftwz/indianimporter/Two'
import Three from '@/components/ftwz/indianimporter/Three'
import Four from '@/components/ftwz/indianimporter/Four'
import React from 'react'
import Ftwzbanner from '@/components/shared/ftwzbanner'
import Eximmap from '@/components/services/Eximmap'
import Ftwz4 from '@/components/ftwz/Ftwz4'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='overflow-x-hidden'>

          {/* <Ftwzbanner title="FTWZ For Indian Importers" bgImg="/about/about.jpg" /> */}
          <div className='aspect-[2.67] max-md:hidden '>
                                   <Image
                                               src="/ftwz/banners/indianimporters.png"
                                               width={1600}
                                               height={1000}
                                               alt="Small Square"
                                               className="w-full object-contain"
                                             />
                                   </div>
                                   <div className='aspect-[1]  md:hidden '>
                                           <Image
                                             src="/ftwz/banners/indianimporters-mobile.png"
                                             width={1600}
                                             height={1000}
                                             alt="Small Square"
                                             className="w-full object-contain"
                                           />
                                         </div>

<div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section1">

<One/>
</div>
<div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section2">

<Two/>
</div>
<div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section3">

<Three/>
</div>
<div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section4">

<Four/>
</div>
<Ftwz4/>
<Eximmap/>
    </div>
  )
}

export default Page
