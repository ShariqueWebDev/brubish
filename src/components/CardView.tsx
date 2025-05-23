"use client";

import { useEffect, useRef } from "react";
// import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { Image } from "antd";

export default function Lightbox({
  main_title,
  product_detials,
}: {
  main_title: string;
  product_detials: any;
}) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const lgInstance = useRef<any>(null);

  // useEffect(() => {
  //   if (galleryRef.current) {
  //     lgInstance.current = lightGallery(galleryRef.current, {
  //       dynamic: true,
  //       dynamicEl: Pro.map((item) => ({
  //         src: item.image,
  //         thumb: item.image,
  //         subHtml: `<h4>${item.title}</h4>`,
  //       })),
  //       plugins: [lgZoom, lgThumbnail],
  //     });
  //   }

  //   return () => {
  //     lgInstance.current?.destroy();
  //     lgInstance.current = null;
  //   };
  // }, []);

  const openGallery = (index: number) => {
    lgInstance.current?.openGallery(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
            {main_title}
          </span>
        </div>

        {/* card  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {product_detials.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => openGallery(index)}
              className="cursor-pointer bg-gray-100 text-gray-900 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="max-w-[300px] ">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-2">
                <p className="text-sm font-normal mb-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div ref={galleryRef} style={{ display: "none" }} />
      </div>
    </section>
  );
}
