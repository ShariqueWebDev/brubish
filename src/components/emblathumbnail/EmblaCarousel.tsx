import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import "./thumbs.css"
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options,setActiveindex } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })


  useEffect(() => {
    setActiveindex(selectedIndex)
  },[selectedIndex])

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla ">
    
    <div className="embla-thumbs  max-md:mx-auto  w-[320px] md:w-[550px]   mb-4 -ml-0 md:-ml-32">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container  ">
            {slides.map((data,index) => (
              <Thumb
              data={data}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((data,index) => (
            <div className="embla__slide"  key={index}>
              <div className="  md:mx-4 ">
                <Image src={data.image} alt={data.name} height={400} width={500} className='w-full h-full mx-auto !object-contain max-w-[400px]' />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default EmblaCarousel
