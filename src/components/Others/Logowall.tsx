import React from "react";

const Logowall = () => {
  return <div></div>;
};

export default Logowall;

// "use client";
// import { useState } from "react";
// import "./LogoWall.css";
// import Image from "next/image";

// function LogoWall({
//   items = [],
//   direction = "horizontal",
//   pauseOnHover = false,
//   size = "clamp(8rem, 1rem + 30vmin, 25rem)",
//   duration = "60s",
//   textColor = "#ffffff",
//   bgColor = "#060606",
//   bgAccentColor = "#111111",
// }) {
//   const [isPaused, setIsPaused] = useState(false);

//   const wrapperClass = [
//     "logoWall-wrapper",
//     direction === "vertical" && "wrapper--vertical",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   const marqueeClass = [
//     "marquee",
//     direction === "vertical" && "marquee--vertical",
//     isPaused && "paused",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   console.log(items);

//   return (
//     <article
//       className={wrapperClass}
//       style={
//         {
//           ["--size"]: size,
//           ["--duration"]: duration,
//           ["--color-text"]: textColor,
//           ["--color-bg"]: bgColor,
//           ["--color-bg-accent"]: bgAccentColor,
//         } as React.CSSProperties
//       }
//     >
//       <div
//         className={marqueeClass}
//         onMouseEnter={() => pauseOnHover && setIsPaused(true)}
//         onMouseLeave={() => pauseOnHover && setIsPaused(false)}
//       >
//         <div className="marquee__group">
//           {items?.map((item, idx) => (
//             <>
//               {item?.product_detail?.map((img: any, index: number) => {
//                 return (
//                   <Image
//                     height={400}
//                     width={400}
//                     className="bg-gray-200 border !shadow-lg"
//                     key={idx}
//                     src={img?.image}
//                     alt={item}
//                   />
//                 );
//               })}
//             </>
//           ))}
//         </div>
//         <div className="marquee__group" aria-hidden="true">
//           {items.map((item, idx) => (
//             <>
//               {item?.product_detail?.map((img, index) => {
//                 return (
//                   <Image
//                     height={400}
//                     width={400}
//                     className="bg-gray-200 border !shadow-lg"
//                     key={`dup1-${idx}`}
//                     src={img?.image}
//                     alt={item}
//                   />
//                 );
//               })}
//             </>
//             // <Image
//             //   height={400}
//             //   width={400}
//             //   className="bg-gray-200 border"
//             //   key={`dup1-${idx}`}
//             //   src={item}
//             //   alt={item}
//             // />
//           ))}
//         </div>
//       </div>

//       <div
//         className={`${marqueeClass} marquee--reverse`}
//         onMouseEnter={() => pauseOnHover && setIsPaused(true)}
//         onMouseLeave={() => pauseOnHover && setIsPaused(false)}
//       >
//         <div className="marquee__group">
//           {items.map((item, idx) => (
//             <>
//               {item?.product_detail?.map((img, index) => {
//                 return (
//                   <Image
//                     height={400}
//                     width={400}
//                     className="bg-gray-200 border shadow-lg "
//                     key={`rev-${idx}`}
//                     src={img?.image}
//                     alt={item}
//                   />
//                 );
//               })}
//             </>
//             // <Image
//             //   height={400}
//             //   width={400}
//             //   key={`rev-${idx}`}
//             //   className="bg-gray-200 border"
//             //   src={item}
//             //   alt={item}
//             // />
//           ))}
//         </div>
//         <div className="marquee__group" aria-hidden="true">
//           {items.map((item, idx) => (
//             <>
//               {item?.product_detail?.map((img, index) => {
//                 return (
//                   <Image
//                     height={400}
//                     width={400}
//                     className="bg-gray-200 border shadow-lg"
//                     key={`dup2-${idx}`}
//                     src={img?.image}
//                     alt={item}
//                   />
//                 );
//               })}
//             </>
//             // <Image
//             //   height={400}
//             //   width={400}
//             //   key={`dup2-${idx}`}
//             //   className="bg-gray-200 border"
//             //   src={item}
//             //   alt={item}
//             // />
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// }

// export default LogoWall;
