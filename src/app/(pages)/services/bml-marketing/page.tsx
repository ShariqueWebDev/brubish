import Ftwz4 from '@/components/ftwz/Ftwz4'
import Sectors from '@/components/Home/Sectors'
import Eximmap from '@/components/services/Eximmap'
import Marketingthree from '@/components/services/sourcing/Marketingthree'
import HowItWorks from '@/components/services/sourcing/Marketingtwo'
import Sourcingfive from '@/components/services/sourcing/Sourcingfive'
import Sourcingfour from '@/components/services/sourcing/Sourcingfour'
import Sourcingseven from '@/components/services/sourcing/Sourcingseven'
import Sourcingsix from '@/components/services/sourcing/Sourcingsix'
import Sourcingthree from '@/components/services/sourcing/Sourcingthree'
import Sourcingtwo from '@/components/services/sourcing/Sourcingtwo'
import Gofurther from '@/components/shared/Gofurther'
import Servicebanner2 from '@/components/shared/Servicebanner2'
import Servicebanner3 from '@/components/shared/Servicebanner3'
import Servicebanner5 from '@/components/shared/Servicebanner5'
import Submenu from '@/components/shared/Submenu'
import React from 'react'



const sections = [
  {
    id: 1,
    name: "BML Marketing",
    url: "#section1",

  },
  {
    id: 2,
    name: "Advantage",
    url: "#section2"
  },
  {
    id: 3,
    name: "Sectors",
    url: "#section3"
  },

  {
    id: 4,
    name: "FAQ's",
    url: "#section4"
  },
]


const Page = () => {
  return (
    <div>
<Servicebanner3
      icon="/services/icons/marketing.png" heading="BML Marketing" title="Reach Your Customers Faster" description="BML optimizes supply chains to ensure your products reach the right audience quickly. Reduce lead times and boost market presence." buttontext="Get Started" buttonlink="/services" bannerImage="/services/marketing/banner.png"
      />
          <Submenu sections={sections} />
      {/* <Marketingthree/> */}
      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]' id="section1">
      <HowItWorks/>
      <Sourcingseven/>
        </div>
  
    {/* <Sourcingsix/> */}
    <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]' id="section2">
      <Sourcingtwo/>
      </div>
    <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]' id="section3">
      <Sectors/>
      <Ftwz4/>
<Eximmap/>
      </div>
      {/* <Gofurther/> */}
    </div>
  )
}

export default Page
