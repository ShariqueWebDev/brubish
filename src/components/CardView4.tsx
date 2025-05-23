// "use client";
// import Image from "next/image";

// const CardView4 = () => {
//   const cards = [
// {
//   title: "Speed Boat",
//   image: "/marine-equipment_img/speed-boat.jpg",
// },
// {
//   title: "Speed Boat Engine",
//   image: "/marine-equipment_img/speed-boat-engine.jpg",
// },
// {
//   title: "Fender",
//   image: "/marine-equipment_img/fender.jpg",
// },
// {
//   title: "SMAG Grab",
//   image: "/marine-equipment_img/smag-grab.jpg",
// },
// {
//   title: "Horn",
//   image: "/marine-equipment_img/horn.jpg",
// },
// {
//   title: "Tank Cleaning Machine",
//   image: "/marine-equipment_img/tank-cleaning-machine.jpg",
// },
// {
//   title: "ACB",
//   image: "/marine-equipment_img/acb.jpg",
// },
// {
//   title: "Framo Pump",
//   image: "/marine-equipment_img/framo-pump.jpg",
// },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
// <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
//   Marine Equipment
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

// export default CardView4;

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

interface GalleryItem4 {
  title: string;
  image: string;
}

const galleryItems: GalleryItem4[] = [
  {
    title: "Speed Boat",
    image: "/marine-equipment_img/speed-boat.jpg",
  },
  {
    title: "Speed Boat Engine",
    image: "/marine-equipment_img/speed-boat-engine.jpg",
  },
  {
    title: "Fender",
    image: "/marine-equipment_img/fender.jpg",
  },
  {
    title: "SMAG Grab",
    image: "/marine-equipment_img/smag-grab.jpg",
  },
  {
    title: "Horn",
    image: "/marine-equipment_img/horn.jpg",
  },
  {
    title: "Tank Cleaning Machine",
    image: "/marine-equipment_img/tank-cleaning-machine.jpg",
  },
  {
    title: "ACB",
    image: "/marine-equipment_img/acb.jpg",
  },
  {
    title: "Framo Pump",
    image: "/marine-equipment_img/framo-pump.jpg",
  },
];

export default function CardView4() {
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
            Marine Equipment
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
