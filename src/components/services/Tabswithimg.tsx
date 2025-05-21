"use client"
import React, { useState } from 'react'
import EmblaCarousel from '../emblathumbnail/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { ArrowBigRightIcon, Box, PackageCheck, Shield, TruckIcon, Warehouse } from 'lucide-react'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 3

const SLIDES = [
    {
        id: 1,
        name: "Comprehensive Protection",
        icon: <Shield size={25}  />,
        image: "https://img.freepik.com/premium-photo/global-business-logistics-import-export-container-cargo-freight-ship-loading-port-by-crane-container-handlers-cargo-airplane-truck-highway-transport-industry-concept-depth-blur-effect_144356-64376.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
        title: "Comprehensive Cargo Insurance",
        description: "Get full protection for your goods during transportation, covering loss, theft, or damage from the point of origin to the destination."
    },
    {
        id: 2,
        name: "Liability Safeguards",
        icon: <PackageCheck size={25}  />,
        image: "https://img.freepik.com/premium-photo/global-business-logistics-import-export-container-cargo-freight-ship-loading-port-by-crane-container-handlers-cargo-airplane-truck-highway-transport-industry-concept-depth-blur-effect_144356-64376.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
        title: "Freight Liability Insurance",
        description: "Protect your company from financial responsibility for damage, loss, or delays that happen while your goods are under our care."
    },
    {
        id: 3,
        name: "Secure Warehousing",
        icon: <Warehouse size={25} />,
        image: "https://img.freepik.com/premium-photo/global-business-logistics-import-export-container-cargo-freight-ship-loading-port-by-crane-container-handlers-cargo-airplane-truck-highway-transport-industry-concept-depth-blur-effect_144356-64376.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
        title: "Warehouse Insurance",
        description: "Ensure that your stored goods are safe from unforeseen events like fire, theft, or natural disasters while they are in our warehouse."
    }
]


const Tabswithimg = () => {

    const [activeindex, setActiveindex] = useState(1)
    console.log(activeindex);

    return (
        <div className=' sjcontainer py-16'>
            <h2 className=' text-xl md:text-3xl text-center font-[500] mb-2'>BML Insurance Services</h2>
            <div className='flex items-center flex-col-reverse md:flex-row'>
                <div className='md:w-[30%] mx-auto text-center my-auto'>
                    <h2 className=' text-xl max-md:mt-4 md:text-xl font-[500]'>{SLIDES[activeindex].title}</h2>
                    <p className=' px-2 text-xs md:text-sm mt-2 text-gray-500'>{SLIDES[activeindex].description}</p>
                </div>
                <div className='md:w-[70%]'>
                    <EmblaCarousel setActiveindex={setActiveindex} slides={SLIDES} options={OPTIONS} />
                </div>
            </div>
        </div>
    )
}

export default Tabswithimg
