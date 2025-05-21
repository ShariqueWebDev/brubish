import Customfive from '@/components/services/customs/Customfive'
import Customfour from '@/components/services/customs/Customfour'
import Customone from '@/components/services/customs/Customone'
import Customthree from '@/components/services/customs/Customthree'
import Customtwo from '@/components/services/customs/Customtwo'
import Customzero from '@/components/services/customs/Customzero'
import Servicebanner3 from '@/components/shared/Servicebanner3'
import Submenu from '@/components/shared/Submenu'
import React from 'react'


const sections =[
  {
      id:1,
      name:"BML Customs",
      url:"#section1",
      
  },
  {
      id:2,
      name:"Benefits",
      url:"#section2"
  },
  {
      id:3,
      name:"Why BML",
      url:"#section3"
  },
  {
    id:4,
    name:"FAQ's",
    url:"#section6"
},
]



const Page = () => {
  return (
    <div className=''>
    <Servicebanner3
      icon="/services/customs/z111.svg" heading="BML Customs" title="Simplifying Border Clearance" description="Experience hassle-free global trade with BML Customs – your trusted partner for seamless customs clearance and compliance." buttontext="Get Started" buttonlink="/services" bannerImage="/services/customs/banner.webp"
      />

    <Submenu  sections={sections} />


      {/* <Vassectionthree/> */}
      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section1">
      <Customzero />
      </div>
      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section2">
      <Customone />
      <Customtwo />
      </div>
      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section3">
      <Customthree />
      <Customfour />
      </div>
      {/* <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section4">
      <Customfive />
      </div> */}
      {/* <Gofurther/> */}
    </div>
  )
}

export default Page
