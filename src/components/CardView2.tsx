// "use client";
// import Image from "next/image";

// const CardView2 = () => {
//   const cards = [
//     {
//       title: "Pressure Switch, Transmitter & Control",
//       image: "/various-control-equipment_img/pressure-switch.jpg",
//     },
//     {
//       title: "Tempratur & Pressure Calibrator",
//       image: "/various-control-equipment_img/temperature-calibrator.jpg",
//     },
//     {
//       title: "Float & Level Switch",
//       image: "/various-control-equipment_img/float-level-switch.jpg",
//     },
//     {
//       title: "Positioner",
//       image: "/various-control-equipment_img/positioner.jpg",
//     },
//     {
//       title: "Differential Pressure Transmitter",
//       image:
//         "/various-control-equipment_img/differential-pressure-transmitter.jpg",
//     },
//     {
//       title: "Pneumatic Valves",
//       image: "/various-control-equipment_img/pneumatic-valve.jpg",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
// <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
//   Various Control Equipment
// </span>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 text-gray-900 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
//             >
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 width={940}
//                 height={750}
//                 className="w-full object-contain"
//               />
//               <div className="p-2">
//                 <h5 className="text-sm font-normal mb-2">{card.title}</h5>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardView2;

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

interface GalleryItem2 {
  title: string;
  image: string;
}

const galleryItems: GalleryItem2[] = [
  {
    title: "Pressure Switch, Transmitter & Control",
    image: "/various-control-equipment_img/pressure-switch.jpg",
  },
  {
    title: "Tempratur & Pressure Calibrator",
    image: "/various-control-equipment_img/temperature-calibrator.jpg",
  },
  {
    title: "Float & Level Switch",
    image: "/various-control-equipment_img/float-level-switch.jpg",
  },
  {
    title: "Positioner",
    image: "/various-control-equipment_img/positioner.jpg",
  },
  {
    title: "Differential Pressure Transmitter",
    image:
      "/various-control-equipment_img/differential-pressure-transmitter.jpg",
  },
  {
    title: "Pneumatic Valves",
    image: "/various-control-equipment_img/pneumatic-valve.jpg",
  },
];

export default function CardView2() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const lgInstance = useRef<any>(null);

  useEffect(() => {
    if (galleryRef.current) {
      lgInstance.current = lightGallery(galleryRef.current, {
        dynamic: true,
        dynamicEl: galleryItems.map((item) => ({
          src: item.image,
          thumb: item.image,
          subHtml: `<h4>${item.title}</h4>`,
        })),
        plugins: [lgZoom, lgThumbnail],
      });
    }

    return () => {
      lgInstance.current?.destroy();
      lgInstance.current = null;
    };
  }, []);

  const openGallery = (index: number) => {
    lgInstance.current?.openGallery(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
            Various Control Equipment
          </span>
        </div>

        {/* card  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openGallery(index)}
              className="cursor-pointer bg-gray-100 text-gray-900 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={940}
                height={750}
                className="w-full object-contain"
              />

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
