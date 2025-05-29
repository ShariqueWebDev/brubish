// import Image from "next/image";
// import React from "react";

// type Award = {
//   title: string;
//   year: string;
//   description: string;
//   imageUrl: string;
// };

// export default function AwardWay(): JSX.Element {
//   const awards: Award[] = [
//     {
//       title: "Tanvi Marine Enterprises",
//       year: "2015",
//       description:
//         "Awarded for pioneering the use of cutting-edge technologies...",
//       imageUrl: "/framer_image/BRUBISH_INDIA_EMS_1_.webp",
//     },
//     {
//       title: "Tanvi Marine Enterprises",
//       year: "2018",
//       description:
//         "Awarded for pioneering the use of cutting-edge technologies...",
//       imageUrl: "/framer_image/BRUBISH_INDIA_OHSMS_1_.webp",
//     },
//     // {
//     //   title: "ABS Quality Evaluations",
//     //   year: "2015",
//     //   description: "Recognized for excellence in patient care...",
//     //   imageUrl: "/framer_image/ISO14001-2015.jpg",
//     // },
//     // {
//     //   title: "ABS Quality Evaluations",
//     //   year: "2018",
//     //   description:
//     //     "Honored for maintaining exceptional patient satisfaction...",
//     //   imageUrl: "/framer_image/ISO45001.jpg",
//     // },
//     // {
//     //   title: "Tanvi Marine Enterprises",
//     //   year: "2024",
//     //   description:
//     //     "Awarded for pioneering the use of cutting-edge technologies...",
//     //   imageUrl: "/framer_image/ISO-9001-2015.jpg",
//     // },
//   ];

//   return (
//     <section className="bg-gray-100/50 py-20">
//       <div className="container mx-auto max-w-screen-xl px-4">
//         {/* Header Section */}
//         <div className="mb-10 text-center">
//           <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 p-2 text-xs font-bold uppercase text-blue-600 lg:text-sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-5 w-5 shrink-0 text-blue-700"
//             >
//               <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//               <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
//             </svg>
//             Awards
//           </div>
//           <h2 className="mb-5 font-roboto text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
//             Awards & Achievements
//           </h2>
//           <p className="mx-auto max-w-lg text-sm text-gray-600 lg:text-base">
//             We are honored to receive industry awards and recognition for our
//             commitment to exceptional patient care, innovation, and service.
//           </p>
//         </div>

//         {/* Awards Grid */}

//         <div className="grid gap-10 pt-14 md:grid-cols-2 lg:grid-cols-3">
//           {awards.map((award) => (
//             <div
//               key={`${award.title}-${award.year}`}
//               className="rounded-2xl border-2 border-white bg-gradient-to-b from-white/10 to-white/50 px-4 pb-4 shadow-[0px_5px_60px_rgba(0,0,0,0.05)]"
//             >
//               <div className="mt-4 flex justify-center">
//                 <Image
//                   src={award.imageUrl}
//                   alt={award.title}
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   className="w-full h-[500px] rounded-lg object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import React from "react";

type Award = {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
};

export default function AwardWay(): JSX.Element {
  const awards: Award[] = [
    {
      title: "Tanvi Marine Enterprises",
      year: "2015",
      description:
        "Awarded for pioneering the use of cutting-edge technologies...",
      imageUrl: "/framer_image/BRUBISH_INDIA_EMS_1_.webp",
    },
    {
      title: "Tanvi Marine Enterprises",
      year: "2018",
      description:
        "Awarded for pioneering the use of cutting-edge technologies...",
      imageUrl: "/framer_image/BRUBISH_INDIA_OHSMS_1_.webp",
    },
  ];

  return (
    <section className=" md:!py-16 py-10">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="mb-5 uppercase  font-semibold text-gray-800 md:text-3xl text-2xl ">
            Certifications
          </h2>
          <p className="mx-auto md:px-60 text-sm text-gray-600">
            We are proud to be ISO 14001:2015 and ISO 45001:2018 certified,
            demonstrating our commitment to environmental responsibility and
            occupational health and safety. These certifications reflect our
            dedication to maintaining high standards in sustainable operations
            and ensuring a safe working environment
          </p>
        </div>

        {/* Awards Grid */}
        <div className="min-h-[400px] grid gap-10 md:px-20 md:grid-cols-2">
          {awards.map((award) => (
            <div
              key={`${award.title}-${award.year}`}
              className="rounded-2xl border-2 border-white bg-gradient-to-b from-white/10 to-white/50 pb-4 shadow-[0px_5px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="flex justify-center">
                <Image
                  src={award.imageUrl}
                  alt={award.title}
                  width={400}
                  height={300}
                  sizes="80vw"
                  className="rounded-lg object-contain py-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
