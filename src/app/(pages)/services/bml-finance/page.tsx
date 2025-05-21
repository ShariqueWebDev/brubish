import Financefive from '@/components/services/finance/Financefive'
import Financefour from '@/components/services/finance/Financefour'
import Financeseven from '@/components/services/finance/Financeseven'
import Financesix from '@/components/services/finance/Financesix'
import Financethree from '@/components/services/finance/Financethree'
import Financetwo from '@/components/services/finance/Financetwo'
import Servicebanner2 from '@/components/shared/Servicebanner2'
import Servicebanner3 from '@/components/shared/Servicebanner3'
import React from 'react'
import Submenu from '@/components/shared/Submenu'
import Financeeight from '@/components/services/finance/Financeeight'
import FAQSection from '@/components/shared/Faqs'



const purchaseFinanceInfo = [
  {
    question: "Maximum Working Capital Limit Offered by BML for BML Finance",
    answer: "It depends on the eligibility, your requirement, and our comfort. If you meet our basic guidelines and our team is comfortable with the credit assessment, we offer a decent working capital limit."
  },
  {
    question: "Does BML Provide Unsecured BML Finance Only?",
    answer: "No, BML provides both secured and unsecured working capital limits to SMEs. Unsecured BML Finance is completely collateral-free, while secured BML Finance is given against a bank guarantee or residential/commercial property."
  },
  {
    question: "Purpose of BML Finance",
    answer: "BML Finance is a working capital loan offered to SMEs for purchasing raw materials on advance payment terms."
  },
  {
    question: "Eligibility for BML Finance",
    answer: "The working capital loan eligibility depends on the business vintage and turnover. SMEs must have a minimum turnover of 3 crores and a business vintage of at least 3 years to apply online."
  },
  {
    question: "Is BML Finance Similar to Cash Credit?",
    answer: "Yes"
  },
 
];



const sections =[
  {
      id:1,
      name:"BML Finance",
      url:"#section1",
      
  },
  {
      id:2,
      name:"Benefits",
      url:"#section2"
  },
  {
      id:3,
      name:"Eligibility & Documents",
      url:"#section3"
  },
  {
      id:4,
      name:"How To Apply",
      url:"#section4"
  },
  {
      id:5,
      name:"Why BML",
      url:"#section5"
  },
  {
    id:6,
    name:"FAQ's",
    url:"#section6"
},
]


const Page = () => {
  return (
    <div>
     <Servicebanner3
      icon="/services/icons/finance.png" heading="BML Finance" title="Smarter Financial Solutions" description="BML Finance offers trade credit, financing, and flexible payment options. Manage cash flow and grow your business with ease." buttontext="Get Started" buttonlink="/services" bannerImage="/services/finance/banner.png"
      />
      <Submenu sections={sections} />
      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section1">
        <Financeeight/>
      </div>

      <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section2">
      <Financethree/>
      <Financetwo/>
        </div>

        <div className='scroll-mt-[30vh] md:scroll-mt-[22vh]'  id="section3">
        <Financesix/>

        </div>

       
      <Financefive/>
      
        <div className='scroll-mt-[25vh] md:scroll-mt-[22vh]'  id="section4">
        <Financeseven/>
        </div>

        <div className='scroll-mt-[30vh] md:scroll-mt-[22vh]'  id="section5">
        <Financefour/>
        </div>


     <div className='scroll-mt-[25vh] md:scroll-mt-[16vh]' id="section6">

      {/* <Servicefaq data= {purchaseFinanceInfo}/> */}
      <FAQSection faqData={purchaseFinanceInfo}/>
      </div>
    </div>
  )
}

export default Page
