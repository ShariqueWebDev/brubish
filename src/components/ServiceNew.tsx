"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

const ServiceNew = ({
  imgData,
  banner_title,
  banner_desc,
}: {
  imgData: any;
  banner_title: any;
  banner_desc: any;
}) => {
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
      className=" py-20 md:h-[90vh] h-[70vh] overflow-hidden "
      style={{
        // backgroundColor: "#f7f7f9",
        backgroundImage: `url(${imgData})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        // "radial-gradient(circle closest-corner at 60% 40%, #f5d14254, #fff0 52%),  radial-gradient(circle farthest-side at 0 100%, #866bf04d, #fff0 31%)",
      }}
    >
      {/* <div className="absolute left-0 top-0 !overflow-hidden">
        <Image
          src={imgData}
          width={2000}
          height={1000}
          alt=""
          className="w-full md:!h-full h-[90vh] object-cover object-center"
        />
      </div> */}
      <div className="bg-gradient-to-r from-black/80 via-black/60 absolute top-0 left-0  inset-0"></div>
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full relative lg:w-1/2 space-y-8 md:pl-22">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#feba0d]  !text-xs text-black inline-block font-semibold px-3 py-1 rounded-full">
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

            <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {banner_title}
            </h1>

            <p className="text-sm text-gray-300 max-w-xl tracking-wide leading-6">
              {banner_desc}
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center bg-[#fdcc4f] text-white px-5 py-2 rounded-lg hover:bg-[#9f833b] transition-colors duration-300 group"
            >
              <span className="text-sm font-medium">Inquire Now</span>
              <Image
                src="https://cdn.prod.website-files.com/6787a0ca9071ad357581470a/67969a629020ff1b34e0680b_Primary%20Button%20Icon.svg"
                alt="Arrow"
                width={10}
                height={10}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="">{/* <Image src={} /> */}</div>
    </section>
  );
};

export default ServiceNew;
