"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

const ServiceNew: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images: Slide[] = [
    {
      src: "/service-new_img/aerial-view-container-cargo-ship-sea_335224-735.avif",
      alt: "Slide 1",
    },
    {
      src: "/service-new_img/WhatsApp Image 2025-05-23 at 15.44.16_3ddec24f.jpg",
      alt: "Slide 2",
    },
    {
      src: "/service-new_img/WhatsApp Image 2025-05-23 at 15.44.16_811eeea6.jpg",
      alt: "Slide 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="pb-16"
      style={{
        backgroundColor: "#f7f7f9",
        backgroundImage:
          "radial-gradient(circle closest-corner at 60% 40%, #f5d14254, #fff0 52%), radial-gradient(circle farthest-side at 0 100%, #866bf04d, #fff0 31%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 md:pl-22">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#feba0d] text-black text-sm font-semibold px-3 py-1 rounded-full">
                  Brubish India Private Limited
                </span>
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                <img
                  src="/service-new_img/flag-of-india.png"
                  alt="India Flag"
                  className="h-4"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Leaders in shipping Solution
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Our vision is to become a leader in the field of{" "}
              <span className="font-semibold">shipping </span> solutions with
              timely supply of high quality services to the marine business
              keeping our feet firm in the track of innovative exposition
            </p>

            <a
              href="/contact"
              className="inline-flex items-center bg-[#fdcc4f] text-white px-6 py-3 rounded-lg hover:bg-[#9f833b] transition-colors duration-300 group"
            >
              <span className="text-base font-medium">Inquire Now</span>
              <Image
                src="https://cdn.prod.website-files.com/6787a0ca9071ad357581470a/67969a629020ff1b34e0680b_Primary%20Button%20Icon.svg"
                alt="Arrow"
                width={15}
                height={15}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              {/* {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  />
                </div>
              ))} */}

              {images.map((image) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    image === images[currentSlide] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain rounded-sm"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  />
                </div>
              ))}
            </div>

            {/* Slider Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous Slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="Next Slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNew;
