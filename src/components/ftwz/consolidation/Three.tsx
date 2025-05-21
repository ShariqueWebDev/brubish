import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import React from 'react'

const Three = () => {
  return (
    <div className='bg-amber-50'>

    <div className='sjcontainer text-sm py-12 md:py-20'>
      <Heading className=' mb-6 md:mb-10 text-center' title='Vendor Managed Inventory' />
      <div className=' max-lg:space-y-10  '>
        <section className='border p-[3px]  border-amber-400  '>
        <div className='border md:flex border-amber-400 '>
          <div className=' flex-1 md:border-r border-amber-400'>
            <h3 className='border-b border-amber-200 md:text-center text-lg px-4 text-amber-500 font-bold py-3'>CURRENT PROCESS</h3>
            <div className='space-y-4 p-4 text-gray-600'>
              <p>Individual shipments from various overseas
                suppliers meant for various customers in India
                arrive through multiple gateways</p>
              <p>Shipments are cleared at various customs
                stations & dispatched to Indian customer on
                payment of customs duty</p>
            </div>
          </div>
          <div className=' flex-1'>
          <div className=' border-amber-400  '>
            </div>
            <h3 className='border-b max-md:border-t-2 border-amber-200 md:text-center text-lg text-amber-500 font-bold  px-4 py-3'>CHALLENGES</h3>
            <div className='space-y-4 p-4 text-gray-600'>
              <p>Higher logistics costs and multiple customs
                clearance charges at Destination</p>
              <p>Higher order to delivery lead time due longer
                transit time to India</p>
              <p>
                VMI/SMI & JIT not possible to be practiced            </p>
            </div>
          </div>
          </div>
        </section>

        <section className='relative md:py-10'>
          <Image  src="/ftwz/consolidation/34a.png" alt="consolidation" width={1600} height={1000} className="w-full  !object-contain " />
        </section>
        <section className='border border-amber-400 p-[3px]'>
        <div className='border border-amber-400  h-full'>
          <h3 className='border-b border-amber-200  px-4 py-3 text-lg text-amber-500 font-bold '>PROPOSED MODEL - FTWZ</h3>
          <div className='space-y-4 p-4 text-gray-600'>

            <p>Overseas supplier can hold cargo in BML FTWZ under
              their ownership – FTWZ acting as Custodian / IOR</p>
            <p>Availability of stock near to the Plant / End
              customers in India, reducing delivery lead time by
              creating a JIT model</p>
            <p>Multiple Batch coming in via different shipment
              modes meant to single customer in India can be
              moved as a single shipment reducing logistics and
              customs clearance cost</p>
            <p>Duty Deferred storage of cargo</p>
            <p>Invoice can be raised from overseas office based on
              purchase orders raised by customers whilst goods
              are stored in BML FTWZ</p>
            <p>Scope of Value add services such as MRP labelling,
              kitting, re-packing, quality checking within BML FTWZ
              prior to dispatch</p>
            <p>Upon instructions, dispatches can be made to
              various customers in India, basis Bill of Entry filing,
              assessment & duty payment, as and when required</p>
            <p>Transfer of Title to customer at the FTWZ frontier
              thereby reducing risks associated with long transit of
              goods when procured from overseas</p>


            <p>Higher logistics costs and multiple customs
              clearance charges at Destination</p>
            <p>Higher order to delivery lead time due longer
              transit time to India</p>
            <p>
              VMI/SMI & JIT not possible to be practiced</p>
          </div>
          </div>
        </section>


      </div>
    </div>
    </div>

  )
}

export default Three
