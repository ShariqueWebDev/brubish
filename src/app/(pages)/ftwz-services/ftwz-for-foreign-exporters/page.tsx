import Foreignexportsbanner from '@/components/ftwz/foreignexport/Foreignexportsbanner'
import Fourforeignexport from '@/components/ftwz/foreignexport/Four'
import Oneforeignexport from '@/components/ftwz/foreignexport/One'
import Threeforeignexport from '@/components/ftwz/foreignexport/Three'
import Twoforeignexport from '@/components/ftwz/foreignexport/Two'
import Ftwz4 from '@/components/ftwz/Ftwz4'
import Eximmap from '@/components/services/Eximmap'
import Vasone from '@/components/services/vas/Vasone'
import Ftwzbanner from '@/components/shared/ftwzbanner'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='overflow-x-hidden'>

      {/* <Ftwzbanner title="BML FTWZ For Foreign Exporters" bgImg="/about/about.jpg" /> */}

     <div className='aspect-[2.67] max-md:hidden '>
                          <Image
                                      src="/ftwz/banners/foreignexporters.png"
                                      width={1600}
                                      height={1000}
                                      alt="Small Square"
                                      className="w-full object-contain"
                                    />
                          </div>
                          <div className='aspect-[1]  md:hidden '>
                                  <Image
                                    src="/ftwz/banners/foreignexporters-mobile.png"
                                    width={1600}
                                    height={1000}
                                    alt="Small Square"
                                    className="w-full object-contain"
                                  />
                                </div>
      {/* <Foreignexportsbanner/> */}
      <Oneforeignexport />
      <Twoforeignexport />
      <Threeforeignexport />
      <Fourforeignexport />
      {/* <Vasone/> */}
      <Ftwz4 />
      <Eximmap />

      {/* <Fourforeignexport/> */}
    </div>
  )
}

export default Page
