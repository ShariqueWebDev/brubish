// import One from '@/components/ftwz/reexport/One'
// import Two from '@/components/ftwz/reexport/Two'
import Three from '@/components/ftwz/reexport/Three'
import Four from '@/components/ftwz/reexport/Four'
import Servicebanner3 from '@/components/shared/Servicebanner3'
import Submenu from '@/components/shared/Submenu'
import React from 'react'
import Ftwzbanner from '@/components/shared/ftwzbanner'
import Eximmap from '@/components/services/Eximmap'
import One from '@/components/ftwz/reexport/One'
import Two from '@/components/ftwz/reexport/Two'
import Ftwz4 from '@/components/ftwz/Ftwz4'
import Image from 'next/image'

const sections =[
  {
      id:1,
      name:"BML FTWZ",
      url:"#section1",  
  },
  {
      id:2,
      name:"Benefits",
      url:"#section2"
  },
  {
      id:3,
      name:"Current System vs FTWZ",
      url:"#section3"
  },
  {
    id:4,
    name:"Why BML",
    url:"#section4"
},]


const Page = () => {
  return (
    <div className='overflow-x-hidden'>

        {/* <Servicebanner3
      icon="/services/vas/banner.svg" heading="BML VAS" title="Faster Delivery To Accelerate Sales Everywhere" description="BML is the only 3PL who can handle your end-to-end logistics including freight, distribution, eCommerce fulfillment, and DTC fulfillment. Start streamlining your fulfillment eCommerce operations today." buttontext="Get Started" buttonlink="/services" bannerImage="/services/vas/banner.png"
      /> */}
         {/* <Ftwzbanner title="FTWZ for Re Export Purpose" bgImg="/about/about.jpg" /> */}
         <div className='aspect-[2.67] max-md:hidden '>
            <Image
                        src="/ftwz/banners/reexports.png"
                        width={1600}
                        height={1000}
                        alt="Small Square"
                        className="w-full object-contain"
                      />
            </div>
            <div className='aspect-[1]  md:hidden '>
                    <Image
                      src="/ftwz/banners/reexports-mobile.png"
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
{/* <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section4">

<Four/>
</div> */}
<Ftwz4/>
<Eximmap/>
    </div>
  )
}

export default Page
