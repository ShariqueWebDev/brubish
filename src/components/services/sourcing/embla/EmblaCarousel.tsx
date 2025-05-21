import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import "./sourcing.css"
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}


const slides = [
    {
        id:2,
   
        title:"The BML Platform allows our company constant visibility to our supply chain. From shipment consolidation options, booking alternatives and data analytics, we have been able to lower freight costs and receive goods in a timely manner.",
        name:"Ernee Ong",
        position:"Managing Director"
    },
    {
        id:1,
       
        title:"The BML Platform has made it easy for anyone in the organization to follow the status of a shipment which allows us to work better as a team and provide better support to our customers.!",
        name:"Willy Kwa",
        position:"Regional Director, Head APAC"
    },
    {
      id:3,
     
      title:"We have a well-managed and attentive account team. Platform visibility and milestones are key and BML does a great job of tracking each one for real-time decision making.",
      name:"Willy Kwa",
      position:"Regional Director, Head APAC"
  },
    

]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {  options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla sjcontainer  px-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data,index) => (
            <div className="embla__slide " key={index}>
              <div className=" border p-4 py-2 md:py-12 bg-white shadow-lg rounded-md ">
              
                <FaQuoteLeft color='#00008b' size={40} className='mb-3'/>
                <p className=' text-sm lg:text-xl font-[400]  '>{data.title}</p>
                <h3 className='text-2xl uppercase text-gray-600 mt-4 mb-0'>{data.name}</h3>
                <p className='text-sm text-primary  '>{data.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

<div className='flex items-center justify-end'>

      <div className="embla__controls  ">
        <div className="embla__buttons">
   

          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
       
    

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      
        </div>

       
      </div>
</div>
    </section>
  )
}

export default EmblaCarousel
