"use client"
import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'
import EmblaCarousel from './embla/EmblaCarousel'

const OPTIONS: EmblaOptionsType = {}
const Sourcingsix = () => {
  return (
    <div className='py-20 bg-secondary1/20'>
     <EmblaCarousel  options={OPTIONS} />
    </div>
  )
}

export default Sourcingsix
