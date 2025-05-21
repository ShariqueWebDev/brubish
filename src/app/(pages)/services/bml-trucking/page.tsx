// import Servicefaq from '@/components/services/Servicefaq'
import Truckfour from '@/components/services/trucking/Truckfour'
import Truckthree from '@/components/services/trucking/Truckthree'
import Trucktwo from '@/components/services/trucking/Trucktwo'
import FAQSection from '@/components/shared/Faqs'

import Servicebanner3 from '@/components/shared/Servicebanner3'
import Submenu from '@/components/shared/Submenu'

import React from 'react'





const truckingData = [
  {
    question:"Do you offer purely domestic (intra-country) trucking?",
    answer: "Yes, BML and our partners provide live unloads and drop & hook trucking service whether hauling port to door or just between warehouses."
  },
  {
    question: "How do you select and onboard carriers onto the Transmission apps?",
    answer: "Potential trucking carriers are assessed on fleet size, safety rating, vehicle maintenance operations, driver history, insurance, preferred lanes, and preferred cargo. Carriers are provided operational tools and training on how to communicate milestone updates to BML. Communication in the Platform is done by combining driver updates in the mobile app with automated data streams like GPS data and geofencing."
  },
  {
    question: "What if other freight forwarders ship my freight?",
    answer: "Not a problem. You can still source your trucking leg in the BML Platform. BML and its partners provide FTL, LTL, drayage, and cartage. We even offer clients cross border services and dangerous goods service. Our FTL services include dry vans, straight trucks, flatbeds, refrigerated trucks, Sprinter vans, and domestic intermodal moves."
  },
  {
    question: "We prefer to use our own fleet. Can we still use Transmission?",
    answer: "No, for this scenario the Carrier does not operate on Transmission: the D/O (and PU# if applicable) is sent via email to carrier, and BML has no stake in the shipment thereafter."
  }
 
];


const sections =[
  {
      id:1,
      name:"BML Transport",
      url:"#section1",
      
  },
  {
      id:3,
      name:"Services Offered",
      url:"#section2"
  },
  {
      id:2,
      name:"Benefits",
      url:"#section4"
  },
 
  {
      id:5,
      name:"FAQ's",
      url:"#section5"
  }
]



const Page = () => {
  return (
    <div>
       <Servicebanner3
      icon="/services/trucking/t90.svg" istrucking={true} heading="BML Trucking" title="Reliable Last-Mile Solutions" description="BML Trucking ensures timely delivery with a robust fleet and real-time tracking. Reliable transport, anywhere you need." buttontext="Get Started" buttonlink="/services" bannerImage="/bmlgif.gif"
      />

<Submenu sections={sections} />
      {/* <Truckingsectiontwo/>
      <Truckingsectionthree/> */}
       {/* <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section1">
      <Truckone/>


      
      </div> */}

<div className='sjcontainer my-8 md:my-16'>
        {/* <Heading className='text-center mb-4 md:mb-8' title='Transport, But Better' /> */}

{/* <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-5'></div> */}

     {/* <Image height={1600} width={2000} className='w-full h-full' src="/imagevector.png" alt="sda"  /> */}
      {/* <Gofurther/> */}
        </div>
      <div className='scroll-mt-[25vh] md:scroll-mt-[16vh]'  id="section1">
        <Truckthree/>

</div>
      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section2">
      <Trucktwo/>

</div>

<div className='scroll-mt-[20vh] md:scroll-mt-[15vh]'  id="section4">
      <Truckfour/>

</div>



<div className='scroll-mt-[15vh] md:scroll-mt-[15vh]'  id="section5">
        {/* <Servicefaq data = {truckingData} /> */}
        <FAQSection faqData={truckingData}/>
</div>
        
    </div>
  )
}

export default Page
