"use client"
import React from 'react'
import EmblaCarousel from './freightembla/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Freightseven = () => {
  return (
    <div className=' sjcontainer mb-20'>
    
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Freightseven
