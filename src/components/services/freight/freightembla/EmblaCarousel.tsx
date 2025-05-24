import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.css";
import Image from "next/image";
import Subheading from "@/components/shared/Subheading";

const TWEEN_FACTOR_BASE = 0.2;

const data = [
  {
    img: "/services/freight/frieght-3.webp",
    title:
      "Instantly compare air, Ocean, and trucking freight quotes from 75+ providers with the perfect balance of price and transit time",
  },
  {
    img: "/services/freight/frieght-4.webp",
    title:
      "Refreshingly easy logistics management with milestone tracking and proactive issue resolution from vetted providers you can trust",
  },
  {
    img: "/services/freight/frieght-5.webp",
    title:
      "Our Freight Team is available to help with every step of your shipment process, from document to delivery specifics",
  },
];

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map(
        (slideNode) =>
          slideNode.querySelector(".embla__slide__numberfr") as HTMLElement
      )
      .filter((node) => node !== null);
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    },
    []
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
    emblaApi.on("select", onSelect);
  }, [emblaApi, tweenScale, onSelect]);

  return (
    <div className="emblafr">
      <Subheading
        title="Ship Smoother on the Digital Freight Marketplace."
        className="text-center"
      />

      <div className="flex items-center max-w-[800px] justify-around mx-auto md:pl-6 mt-6 md:mt-10 mb-8">
        {["Compare", "Manage and Track", "Get Extra Support"]?.map(
          (heading, index) => (
            <div
              key={heading}
              className="embla__slide__numberfr cursor-pointer"
              onClick={() => scrollToIndex(index)}
            >
              <h3
                className={`duration-500 ${
                  currentIndex === index
                    ? "text-black scale-110"
                    : "text-gray-500"
                } font-[400] text-sm mx-4 pb-1 md:text-xl text-center`}
              >
                {heading}
              </h3>
            </div>
          )
        )}
      </div>
      <div className="embla__viewportfr" ref={emblaRef}>
        <div className="embla__containerfr">
          {data.map((item, index) => (
            <div className="embla__slidefr" key={index}>
              <div className="embla__slide__numberfr">
                <div className="">
                  <Image
                    className="w-[500px] !object-contain"
                    src={item.img}
                    alt="freight benefits slide"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-amber-500 font-bold text-base md:text-xl lg:px-20 mt-10 text-center">
        {data[currentIndex]?.title}
      </p>
    </div>
  );
};

export default EmblaCarousel;
