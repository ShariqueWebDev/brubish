import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../embla/EmblaCarousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Homebanner = () => {
  return (
    <div className="relative w-full max-sm:py-10  max-lg:py-16 lg:h-[90vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/banner.webp')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/20"></div>

      {/* Content */}
      <div className="relative sjcontainer z-10 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-[55%,45%] space-x-0 lg:space-x-20 items-center justify-between h-full px-6 lg:px-12">
        {/* Left Side: Title, Description, and Button */}
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          className="text-white space-y-4 flex-1 order-2 lg:order-none text-center lg:text-left"
        >
          <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[57px]">
            From Sourcing To Last Mile Delivery, We’ve got you covered
          </h1>

          <div
            data-aos="zoom-in"
            className="bg-white/50  lg:hidden rounded-md p-1.5 order-1 lg:order-none lg:w-[60%] max-w-[450px]  mx-auto lg:mx-0"
          >
            <Image
              src="/banner-assets.png"
              width={400}
              height={400}
              alt="Small Square"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-sm lg:text-base text-white font-[500]">
            Brubish is a tech enabled platform aiming to transform SME's into
            large business with its end-to-end supply chain solutions
          </p>
          <Link
            data-aos="zoom-in"
            href="/contact-us"
            className=" mt-4 font-bold text-gray-900  block mx-auto lg:mx-0 px-4 w-[160px] text-center py-2 bg-gradient-to-tr from-secondary to-secondary1 hover:to-amber-400 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:-translate-y-1 duration-200"
          >
            Get In Touch
          </Link>
        </div>

        {/* Right Side: Small Square Image */}
        <div
          data-aos="zoom-in"
          className="bg-white/50 rounded-md max-lg:hidden p-1.5 order-1 lg:order-none  max-w-[450px]   mx-auto lg:mx-0"
        >
          <Image
            src="/banner-assets.png"
            width={400}
            height={400}
            alt="Small Square"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
