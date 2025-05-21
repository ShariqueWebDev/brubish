import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Ftwzbanner = ({title=""}) => {
  return (
    <div className="relative w-full  py-20 md:py-40 ">
      {/* Background Image */}
      
      <div
        className="absolute  inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1)), url("https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1374.jpg?t=st=1736159895~exp=1736163495~hmac=758271dfcf560c106033e942b58ff9dc6e934748292d72d91b53546b39c878bc&w=900")`,
          backgroundBlendMode: 'overlay',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute   inset-0 bg-gradient-to-t from-black/50 via-white/20 to-white/20"></div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col   items-center justify-between h-full">
        {/* Left Side: Title, Description, and Button */}
        <div data-aos="fade-up" data-aos-duration="400" className=" space-y-4 flex-1 order-2 lg:order-none text-center lg:text-left">
          <h1  className=" text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[57px]">
           {title}
          </h1>

    </div>
    </div>
    </div>
  );
};

export default Ftwzbanner;
