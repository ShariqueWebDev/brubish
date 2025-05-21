"use client"
import React, { useEffect } from 'react'
import Homebanner from './Homebanner'
import Fouricons from './Fouricons'
import Leftrightsection from './Leftrightsection'
import Sectors from './Sectors'
import Parallex from './Parallex'
import Whybml from './Whybml'
import Imagevector from './Imagevector'

import Homeinfo from './Homeinfo'
import Freightthree from '../services/freight/Freightthree'
import Homeservices from './Homeservices'
import Homemap from './Map'

const Homewrapper = () => {

  return (
    <div>
       <Homebanner/>
       <div data-aos="fade-bottom" >
                <Homeinfo/>
      </div>
       <div data-aos="fade-bottom" >
      <Freightthree/>
      </div>
      <div data-aos="fade-bottom" >
      <Homeservices/>
      {/* <Fouricons/> */}
       </div>
       <div data-aos="fade-bottom" >  

<Whybml/>
</div>
{/* <div data-aos="fade-bottom" >
      <Imagevector/>
        </div> */}
      {/* <Leftrightsection/> */}
        <div data-aos="fade-bottom">
      <Sectors/>
            </div>
      {/* <Shipmentsteps/> */}

     
      <div data-aos="fade-bottom" >
      <Homemap/>
        </div>
        {/* <Parallex/> */}
     

       

    </div>
  )
}

export default Homewrapper





