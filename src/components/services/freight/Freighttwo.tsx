import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const data =[
    {
        id:1,
        title:"Sell and Export",
        icon:"/icons/aeroplane.svg",
        data:[
           `Get in on time with Trucking, Haulage, and Customs working in sync.`
           ,`Filings handled. We work closely with carriers to make sure your cargo sails on time.`
        ]
    },
    {
        id:2,
        title:"Procure and Import",
        icon:"/icons/aeroplane.svg",
        data:[
            `
Orchestrate Inventory, with Customs, DPD/CFS Handling, Free detention and demurrage days, haulage, and trucking to your warehouse.`,
`International procurement is made easy, with data on costs, transit times, and predictive ETA, at your fingertips.`
        ]
    },
    {
        id:3,
        title:"Cashflow Managed",
        icon:"/icons/aeroplane.svg",
        data:[
            `
Invoicing and Payments, ease your cash flow.`,
`Pay in the currency of your choice.`,
`Split invoices to manage costs across your supply chain.`,
`
Apply for PayLater and get deferred payment dates.`
        ]
    },
]

const Freighttwo = () => {
  return (
    <div className='sjcontainer md:py-16 py-8'>

        <div className='grid md:grid-cols-[60%,40%] '>
                <div className='flex-1'>
        <h2 className=' text-2xl md:text-5xl'>Turbocharge your Business</h2>
                    <div className='mx-auto  mt-8 border-l-2 border-primary pl-2 md:pl-10'>

                 
                    {
                       data?.map((single) => {
                        return (
                            <div className='py-6'>
                                <div className='flex mb-4 gap-x-3 items-center'>
                                <Image className='h-10 w-10 !object-contain' src={single.icon}  alt="services" width={100} height={100}  />
                                <h3 className='font-[500] text-xl md:text-3xl'>{single.title}</h3>
                                </div>
                                <div className=' pl-5 md:pl-10'>
                                    {
                                        single?.data?.map((point,index) => {
                                            return (
<div key={index} className='flex font-light text-gray-700 items-center text-sm md:text-base gap-3 my-2'>
                        <span className='bg-secondary  rounded-full p-1.5'><FaCheck size={10} /></span> {point}
                        </div>
                                            )
                                        })
                                    }
                                </div>
                                </div>
                        )
                       }) 
                    }
                       </div>
                </div>
                <div className=' h-[50vh] md:h-[100vh] flex-1  w-full'>
                    <Image className='h-full w-full !object-contain' src="/services/image2.png"  alt="services" width={500} height={1000}  />
                </div>
        </div>
    </div>
  )
}

export default Freighttwo
