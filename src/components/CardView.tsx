// "use client";
// import Image from "next/image";

// const CardView = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cards Grid */}
//           <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Card 1: Effective Innovation */}
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105">
//               <Image
//                 src="/card-view_img/2345.webp"
//                 alt="Effective Innovation"
//                 width={940}
//                 height={600}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h5 className="text-xl font-semibold text-gray-900 mb-2">
//                   Effective Innovation
//                 </h5>
//               </div>
//             </div>

//             {/* Card 2: Sustainable Practices */}
//             <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105">
//               <Image
//                 src="/card-view_img/2345.webp"
//                 alt="Sustainable Practices"
//                 width={940}
//                 height={600}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h5 className="text-xl font-semibold mb-2">
//                   Sustainable Practices
//                 </h5>
//               </div>
//             </div>

//             {/* Card 3: Global Expertise */}
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105">
//               <Image
//                 src="/card-view_img/2345.webp"
//                 alt="Global Expertise"
//                 width={940}
//                 height={600}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h5 className="text-xl font-semibold text-gray-900 mb-2">
//                   Global Expertise
//                 </h5>
//               </div>
//             </div>

//             {/* Card 4: Trusted by Thousands */}
//             <div className="bg-green-600 text-white rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-105">
//               <Image
//                 src="/card-view_img/2345.webp"
//                 alt="Trusted by Thousands"
//                 width={940}
//                 height={600}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h5 className="text-xl font-semibold mb-2">
//                   Trusted by Thousands
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardView;

// "use client";
// import Image from "next/image";

// const CardView = () => {
//   const cards = [
//     {
//       id: "card-1",
//       title: "Main Engine",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//     },
//     {
//       id: "card-2",
//       title: "Main Engine Spares",
//       bgColor: "bg-gray-900",
//       textColor: "text-white",
//     },
//     {
//       id: "card-3",
//       title: "Generator",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//     },
//     {
//       id: "card-4",
//       title: "Generator Spares",
//       bgColor: "bg-green-600",
//       textColor: "text-white",
//     },
//     {
//       id: "card-5",
//       title: "Referigation Compressor",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//     },
//     {
//       id: "card-6",
//       title: "Referigation Compressor Spares",
//       bgColor: "bg-gray-900",
//       textColor: "text-white",
//     },
//     {
//       id: "card-7",
//       title: "Oil Purifier",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//     },
//     {
//       id: "card-8",
//       title: "Oil Purifier Spares",
//       bgColor: "bg-green-600",
//       textColor: "text-white",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
//             Focus Products
//           </span>
//           <h2 className="text-sm md:text-xl font-normal text-gray-900">
//             Focus Products are tools or services designed to enhance
//             concentration, productivity, and mental clarity. They often include
//             supplements, software, or physical items like planners and
//             noise-canceling devices.
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className={`${card.bgColor} ${card.textColor} rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105`}
//             >
//               <Image
//                 src="/card-view_img/2345.webp"
//                 alt={card.title}
//                 width={940}
//                 height={750}
//                 className="w-full h-60 object-cover"
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

// export default CardView;

// "use client";
// import Image from "next/image";

// const CardView = () => {
//   const cards = [
//     {
//       id: "card-1",
//       title: "Main Engine",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-2",
//       title: "Main Engine Spares",
//       bgColor: "bg-gray-900",
//       textColor: "text-white",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-3",
//       title: "Generator",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-4",
//       title: "Generator Spares",
//       bgColor: "bg-green-600",
//       textColor: "text-white",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-5",
//       title: "Refrigeration Compressor",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-6",
//       title: "Refrigeration Compressor Spares",
//       bgColor: "bg-gray-900",
//       textColor: "text-white",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-7",
//       title: "Oil Purifier",
//       bgColor: "bg-gray-100",
//       textColor: "text-gray-900",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-8",
//       title: "Oil Purifier Spares",
//       bgColor: "bg-green-600",
//       textColor: "text-white",
//       image: "/card-view_img/43.png",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
//             Focus Products
//           </span>
//           <h2 className="text-sm md:text-xl font-normal text-gray-900">
//             Focus Products are tools or services designed to enhance
//             concentration, productivity, and mental clarity. They often include
//             supplements, software, or physical items like planners and
//             noise-canceling devices.
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className={`${card.bgColor} ${card.textColor} rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105`}
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

// export default CardView;

// "use client";
// import Image from "next/image";

// const CardView = () => {
//   const cards = [
//     {
//       id: "card-1",
//       title: "Main Engine",
//       image: "/focus-product_img/43.png",
//     },
//     {
//       id: "card-2",
//       title: "Main Engine Spares",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-3",
//       title: "Generator",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-4",
//       title: "Generator Spares",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-5",
//       title: "Refrigeration Compressor",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-6",
//       title: "Refrigeration Compressor Spares",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-7",
//       title: "Oil Purifier",
//       image: "/card-view_img/43.png",
//     },
//     {
//       id: "card-8",
//       title: "Oil Purifier Spares",
//       image: "/card-view_img/43.png",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
//             Focus Products
//           </span>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((card) => (
//             <div
//               key={card.id}
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

// export default CardView;

//////////////////////////// all good component ////////////

// "use client";
// import Image from "next/image";

// const CardView = () => {
//   const cards = [
// {
//   title: "Main Engine",
//   image: "/focus-product_img/main-engine.jpg",
// },
// {
//   title: "Main Engine Spares",
//   image: "/focus-product_img/main-engine-spares.jpg",
// },
// {
//   title: "Generator",
//   image: "/focus-product_img/generator.jpg",
// },
// {
//   title: "Generator Spares",
//   image: "/focus-product_img/generator-spares.jpg",
// },
// {
//   title: "Refrigeration Compressor",
//   image: "/focus-product_img/referigation-compressor.jpg",
// },
// {
//   title: "Refrigeration Compressor Spares",
//   image: "/focus-product_img/referigation-compressor-spares.jpg",
// },
// {
//   title: "Oil Purifier",
//   image: "/focus-product_img/oil-purifier.jpg",
// },
// {
//   title: "Oil Purifier Spares",
//   image: "/focus-product_img/oil-purifier-spares.jpg",
// },

// {
//   title: "Fresh Water Generators",
//   image: "/focus-product_img/main-engine.jpg",
// },
// {
//   title: "Breathing Compressor",
//   image: "/focus-product_img/main-engine-spares.jpg",
// },
// {
//   title: "Generator",
//   image: "/focus-product_img/generator.jpg",
// },
// {
//   title: "Generator Spares",
//   image: "/focus-product_img/generator-spares.jpg",
// },
// {
//   title: "Refrigeration Compressor",
//   image: "/focus-product_img/referigation-compressor.jpg",
// },
// {
//   title: "Refrigeration Compressor Spares",
//   image: "/focus-product_img/referigation-compressor-spares.jpg",
// },
// {
//   title: "Oil Purifier",
//   image: "/focus-product_img/oil-purifier.jpg",
// },
// {
//   title: "Oil Purifier Spares",
//   image: "/focus-product_img/oil-purifier-spares.jpg",
// },

// {
//   title: "Fresh Water Generators",
//   image: "/focus-product_img/fresh-water-generator.jpg",
// },
// {
//   title: "Breathing Compressor",
//   image: "/focus-product_img/breathing-compressor.jpg",
// },
// {
//   title: "Emergency Generator",
//   image: "/focus-product_img/emergency-generator.jpg",
// },
// {
//   title: "Heat Exchanger",
//   image: "/focus-product_img/heat-exchanger.jpg",
// },
// {
//   title: "Hydraulic Motors",
//   image: "/focus-product_img/hydraulic-motors.jpg",
// },
// {
//   title: "Hydraulic Pumps",
//   image: "/focus-product_img/hydraulic-pumps.jpg",
// },
// {
//   title: "Air Compressor",
//   image: "/focus-product_img/air-compressor.jpg",
// },
// {
//   title: "Turbo Charger",
//   image: "/focus-product_img/turbo-charger.jpg",
// },

// {
//   title: "Engine Governor",
//   image: "/focus-product_img/governor.jpg",
// },
// {
//   title: "Auxiliary Engine & its Spares",
//   image: "/focus-product_img/aux-engine.jpg",
// },
// {
//   title: "Radar",
//   image: "/focus-product_img/radar.jpg",
// },
// {
//   title: "Anchor",
//   image: "/focus-product_img/anchor.jpg",
// },
// {
//   title: "Deck Crane & its Spares",
//   image: "/focus-product_img/cranes.jpg",
// },
//   ];

//   return (
// <section className="py-16 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Section Header */}
//     <div className="text-center mb-12">
// <span className="inline-block mb-4 bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
//   Focus Products
// </span>
//     </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {cards.map((card, index) => (
//         <div
//           key={index} // Using index here as the key
//           className="bg-gray-100 text-gray-900 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
//         >
//           <Image
//             src={card.image}
//             alt={card.title}
//             width={940}
//             height={750}
//             className="w-full object-contain"
//           />
//           <div className="p-2">
//             <h5 className="text-sm font-normal mb-2">{card.title}</h5>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   );
// };

// export default CardView;

// npm install lightgallery lg-zoom lg-thumbnail

// "use client";

// import { useEffect, useRef } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import lightGallery, { LightGallery } from "lightgallery";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgThumbnail from "lightgallery/plugins/thumbnail";

// interface GalleryItem {
//   title: string;
//   image: string;
// }

// const galleryItems: GalleryItem[] = [
//   { title: "Main Engine", image: "/focus-product_img/main-engine.jpg" },
//   {
//     title: "Main Engine Spares",
//     image: "/focus-product_img/main-engine-spares.jpg",
//   },
//   { title: "Generator", image: "/focus-product_img/generator.jpg" },
//   {
//     title: "Generator Spares",
//     image: "/focus-product_img/generator-spares.jpg",
//   },
//   {
//     title: "Refrigeration Compressor",
//     image: "/focus-product_img/referigation-compressor.jpg",
//   },
//   {
//     title: "Refrigeration Compressor Spares",
//     image: "/focus-product_img/referigation-compressor-spares.jpg",
//   },
//   { title: "Oil Purifier", image: "/focus-product_img/oil-purifier.jpg" },
//   {
//     title: "Oil Purifier Spares",
//     image: "/focus-product_img/oil-purifier-spares.jpg",
//   },
//   {
//     title: "Fresh Water Generators",
//     image: "/focus-product_img/main-engine.jpg",
//   },
//   {
//     title: "Breathing Compressor",
//     image: "/focus-product_img/main-engine-spares.jpg",
//   },
// ];

// export default function Lightbox() {
//   const galleryRef = useRef<HTMLDivElement | null>(null);
//   const lgInstance = useRef<LightGallery | null>(null);

//   useEffect(() => {
//     if (galleryRef.current) {
//       lgInstance.current = lightGallery(galleryRef.current, {
//         dynamic: true,
//         dynamicEl: galleryItems.map((item) => ({
//           src: item.image,
//           thumb: item.image,
//           subHtml: `<h4>${item.title}</h4>`,
//         })),
//         plugins: [lgZoom, lgThumbnail],
//       });
//     }

//     return () => {
//       lgInstance.current?.destroy();
//     };
//   }, []);

//   const openGallery = (index: number) => {
//     lgInstance.current?.openGallery(index);
//   };

//   return (
//     <>
//       <Head>
//         <title>Product Gallery</title>
//         <meta name="description" content="Focus products image gallery" />
//       </Head>
//       <div className="p-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {galleryItems.map((item, index) => (
//             <div
//               key={index}
//               className="p-3 cursor-pointer hover:shadow-lg transition-shadow duration-300"
//               onClick={() => openGallery(index)}
//             >
//               <div className="relative w-full h-60">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//               <p className="mt-2 text-center text-gray-700 font-semibold">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Hidden container for dynamic gallery */}
//         <div ref={galleryRef} style={{ display: "none" }}></div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import lightGallery from "lightgallery";
// import type { LightGallery } from "lightgallery/lg";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgThumbnail from "lightgallery/plugins/thumbnail";

// interface GalleryItem {
//   title: string;
//   image: string;
// }

// const galleryItems: GalleryItem[] = [
//   { title: "Main Engine", image: "/focus-product_img/main-engine.jpg" },
//   {
//     title: "Main Engine Spares",
//     image: "/focus-product_img/main-engine-spares.jpg",
//   },
//   { title: "Generator", image: "/focus-product_img/generator.jpg" },
//   {
//     title: "Generator Spares",
//     image: "/focus-product_img/generator-spares.jpg",
//   },
//   {
//     title: "Refrigeration Compressor",
//     image: "/focus-product_img/referigation-compressor.jpg",
//   },
//   {
//     title: "Refrigeration Compressor Spares",
//     image: "/focus-product_img/referigation-compressor-spares.jpg",
//   },
//   { title: "Oil Purifier", image: "/focus-product_img/oil-purifier.jpg" },
//   {
//     title: "Oil Purifier Spares",
//     image: "/focus-product_img/oil-purifier-spares.jpg",
//   },
//   {
//     title: "Fresh Water Generators",
//     image: "/focus-product_img/main-engine.jpg",
//   },
//   {
//     title: "Breathing Compressor",
//     image: "/focus-product_img/main-engine-spares.jpg",
//   },
// ];

// export default function CardView() {
//   const galleryRef = useRef<HTMLDivElement | null>(null);
//   const lgInstance = useRef<LightGallery | null>(null);

//   useEffect(() => {
//     if (galleryRef.current) {
//       lgInstance.current = lightGallery(galleryRef.current, {
//         dynamic: true,
//         dynamicEl: galleryItems.map((item) => ({
//           src: item.image,
//           thumb: item.image,
//           subHtml: `<h4>${item.title}</h4>`,
//         })),
//         plugins: [lgZoom, lgThumbnail],
//       });
//     }

//     return () => {
//       lgInstance.current?.destroy();
//       lgInstance.current = null;
//     };
//   }, []);

//   const openGallery = (index: number) => {
//     lgInstance.current?.openGallery(index);
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold text-center mb-8">Product Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryItems.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => openGallery(index)}
//             className="cursor-pointer hover:shadow-lg transition-shadow duration-300 p-2"
//           >
//             <div className="relative w-full h-60 rounded-lg overflow-hidden">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 33vw"
//               />
//             </div>
//             <p className="text-center mt-2 text-gray-700 font-medium">
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div ref={galleryRef} style={{ display: "none" }} />
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

interface GalleryItem {
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { title: "Main Engine", image: "/focus-product_img/main-engine.jpg" },
  {
    title: "Main Engine Spares",
    image: "/focus-product_img/main-engine-spares.jpg",
  },
  { title: "Generator", image: "/focus-product_img/generator.jpg" },
  {
    title: "Generator Spares",
    image: "/focus-product_img/generator-spares.jpg",
  },
  {
    title: "Refrigeration Compressor",
    image: "/focus-product_img/referigation-compressor.jpg",
  },
  {
    title: "Refrigeration Compressor Spares",
    image: "/focus-product_img/referigation-compressor-spares.jpg",
  },
  { title: "Oil Purifier", image: "/focus-product_img/oil-purifier.jpg" },
  {
    title: "Oil Purifier Spares",
    image: "/focus-product_img/oil-purifier-spares.jpg",
  },
  {
    title: "Fresh Water Generators",
    image: "/focus-product_img/fresh-water-generator.jpg",
  },
  {
    title: "Breathing Compressor",
    image: "/focus-product_img/breathing-compressor.jpg",
  },
  {
    title: "Emergency Generator",
    image: "/focus-product_img/emergency-generator.jpg",
  },
  {
    title: "Heat Exchanger",
    image: "/focus-product_img/heat-exchanger.jpg",
  },
  {
    title: "Hydraulic Motors",
    image: "/focus-product_img/hydraulic-motors.jpg",
  },
  {
    title: "Hydraulic Pumps",
    image: "/focus-product_img/hydraulic-pumps.jpg",
  },
  {
    title: "Air Compressor",
    image: "/focus-product_img/air-compressor.jpg",
  },
  {
    title: "Turbo Charger",
    image: "/focus-product_img/turbo-charger.jpg",
  },

  {
    title: "Engine Governor",
    image: "/focus-product_img/governor.jpg",
  },
  {
    title: "Auxiliary Engine & its Spares",
    image: "/focus-product_img/aux-engine.jpg",
  },
  {
    title: "Radar",
    image: "/focus-product_img/radar.jpg",
  },
  {
    title: "Anchor",
    image: "/focus-product_img/anchor.jpg",
  },
  {
    title: "Deck Crane & its Spares",
    image: "/focus-product_img/cranes.jpg",
  },
];

export default function Lightbox() {
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
            Focus Products
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
