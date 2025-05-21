import Bmlfourcards from '@/components/services/Bmlfourcards'
import Insurancefour from '@/components/services/insurance/Insurancefour'
import Insurancethree from '@/components/services/insurance/Insurancethree'
import Insurancetwo from '@/components/services/insurance/Insurancetwo'
import Lrsection from '@/components/services/Lrsection'

import Servicebanner3 from '@/components/shared/Servicebanner3'
import Submenu from '@/components/shared/Submenu'
import React from 'react'


const sections =[
  {
      id:1,
      name:"BML Insurance",
      url:"#section1"
  },
  {
      id:2,
      name:"Benefits",
      url:"#section2"
  },
  {
      id:3,
      name:"Types Of Insurance",
      url:"#section3"
  },
  {
      id:4,
      name:"Why BML?",
      url:"#section4"
  },
  {
      id:5,
      name:"FAQs",
      url:"#section5"
  }
]

const Page = () => {
  return (
    <div className=''>
      <Servicebanner3
      icon="/services/insurance/banneri.svg" heading="BML Insurance" title="Secure Your Shipments" description="BML Insurance protects your goods in transit with comprehensive coverage and claims support. Ship with confidence." buttontext="Get Started" buttonlink="/services" bannerImage="/services/insurance/banner.png"
      />
      <Submenu sections={sections} />


      <div id="section1" className='scroll-mt-[20vh] md:scroll-mt-[20vh]'>
      <Lrsection/>
        </div>
        <div >
      {/* <Whybmlservice/> */}
        </div>

        <div >
          <Insurancethree/>
        </div>

        <div id="section2" className='scroll-mt-[19vh] md:scroll-mt-[25vh]'>
          <Insurancefour/>
        </div>
        <div id="section3" className='scroll-mt-[19vh] md:scroll-mt-[15vh]'>
      <Bmlfourcards/>
        </div>
        <div id="section4" className='scroll-mt-[19vh] md:scroll-mt-[20vh]'>
      {/* <Tabswithimg/> */}
      <Insurancetwo/>
        </div>




        <div id="section5" className='scroll-mt-[19vh] md:scroll-mt-[15vh]'>
      {/* <Servicefaq/> */}
          </div>
    </div>
  )
}

export default Page
