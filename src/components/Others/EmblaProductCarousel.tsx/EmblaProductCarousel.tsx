import React, { useEffect, useCallback, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaButtonProduct";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: any;
  options?: EmblaOptionsType;
};

const EmblaCarouselProductCarousel: React.FC<PropType> = ({
  slides,
  options,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    ...options,
    align: "start",
  });

  const autoplayInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (!emblaApi.canScrollNext()) {
      emblaApi.scrollTo(0); // Go back to start if at the end
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      autoplayInterval.current = setInterval(autoplay, 2000); // 3 seconds
    }

    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [emblaApi, autoplay]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="md:px-20 px-4 mx-auto mt-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[-0.25rem] touch-pan-y touch-pinch-zoom">
          {slides?.product_detail?.map((item: any, index: number) => (
            <div
              key={index}
              className="md:flex-[0_0_20%] flex-[0_0_100%] min-w-0 pl-1"
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              <div className="flex items-center justify-center h-[10rem] select-none rounded-md">
                <div className="h-[150px] border rounded-md border-gray-100 shadow-md">
                  <Image
                    src={item?.image}
                    width={800}
                    height={600}
                    alt=""
                    className="w-full h-full object-cover object-center rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-4 mt-6">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselProductCarousel;
