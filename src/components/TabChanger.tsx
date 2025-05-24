// import { useState } from "react";
// import { motion } from "framer-motion";

// interface Tab {
//   name: string;
//   content: string;
//   icon: string;
//   color: string;
// }

// const tabs: Tab[] = [
//   {
//     name: "Develop",
//     content:
//       "Build cutting-edge solutions with our advanced development tools.",
//     icon: "💻",
//     color: "from-cyan-500 to-blue-600",
//   },
//   {
//     name: "Engage",
//     content: "Connect with a global network to amplify your impact.",
//     icon: "🌍",
//     color: "from-green-500 to-teal-500",
//   },
// ];

// const AnimatedTab = () => {
//   const [activeTab, setActiveTab] = useState<number>(0);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-950 p-6">
//       <div className="w-full max-w-4xl bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-gray-800/50">
//         {/* Tab Headers */}
//         <div className="flex justify-center gap-4 mb-10">
//           {tabs.map((tab, index) => {
//             const baseColor = tab.color.split(" ")[0].replace("from-", "");
//             const isActive = activeTab === index;
//             return (
//               <motion.button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 className={`relative flex flex-col items-center px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ${
//                   isActive
//                     ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-${baseColor}/50`
//                     : "text-gray-400 bg-gray-800/40 hover:bg-gray-800/70 hover:text-white"
//                 }`}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: `0 0 15px 2px ${baseColor}`,
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="flex items-center gap-2 text-xl">
//                   {tab.icon} {tab.name}
//                 </span>
//                 {isActive && (
//                   <motion.span
//                     className="mt-2 w-16 h-1 bg-white/80 rounded-full"
//                     layoutId="neonIndicator"
//                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   />
//                 )}
//               </motion.button>
//             );
//           })}
//         </div>

//         {/* Tab Content */}
//         <div className="relative min-h-[300px] overflow-hidden">
//           {tabs.map((tab, index) => {
//             const isActive = activeTab === index;
//             return (
//               <motion.div
//                 key={index}
//                 className={`absolute inset-0 p-8 rounded-2xl bg-gradient-to-br ${tab.color} text-white border border-white/20`}
//                 initial={{
//                   x: index > activeTab ? "100%" : "-100%",
//                   opacity: 0,
//                 }}
//                 animate={{
//                   x: isActive ? 0 : index > activeTab ? "100%" : "-100%",
//                   opacity: isActive ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               >
//                 <motion.div
//                   className="flex flex-col gap-4"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.15, duration: 0.4 }}
//                 >
//                   <h2 className="text-3xl font-extrabold flex items-center gap-3">
//                     <span className="p-3 rounded-full bg-white/10">
//                       {tab.icon}
//                     </span>
//                     {tab.name}
//                   </h2>
//                   <p className="text-lg leading-relaxed max-w-xl">
//                     {tab.content}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedTab;

// import { useState } from "react";
// import { motion } from "framer-motion";

// interface Tab {
//   name: string;
//   content: string;
//   icon: string;
// }
// const tabs: Tab[] = [
//   {
//     name: "Discover",
//     content:
//       "Explore a futuristic platform designed to spark innovation and creativity.",
//     icon: "⚡️",
//   },
//   {
//     name: "Develop",
//     content:
//       "Build cutting-edge solutions with our advanced development tools.",
//     icon: "💻",
//   },
// ];

// const AnimatedTab = () => {
//   const [activeTab, setActiveTab] = useState<number>(0);

//   return (
//     <div className="min-h-screen  p-6 text-black">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
//         {/* Left 50% - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-8 text-sm leading-relaxed">
//           <div>
//             <h2 className="text-lg font-semibold mb-2">Engines</h2>
//             <p>
//               Bergen ▪ Bukh ▪ Caterpillar ▪ Cummins ▪ Daihatsu ▪ Deutz ▪ Fiat ▪
//               Himsen ▪ Mak ▪ Man B & W ▪ Mirrlees Blackstone ▪ Mitsubishi ▪
//               Rolls Royce ▪ Saab ▪ SKL ▪ Stork ▪ STK ▪ Sulzer ▪ Volvo Penta ▪ W.
//               H. Allen ▪ Wartsila ▪ Yanmar
//             </p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-2">Compressors</h2>
//             <p>
//               Atlas Copco ▪ Compair Reavell ▪ Hamworthy ▪ Hatlapa ▪ Ingersoll
//               Rand ▪ J.P. Sauer Sohn ▪ Matsubara ▪ Donghwa ▪ Sperre ▪ Tamrock ▪
//               Tamrotor ▪ Tanabe ▪ Telkoku ▪ Yanmar
//             </p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-2">Pumps</h2>
//             <p>
//               Allweiler ▪ Azcuedickow ▪ Hamworthy ▪ Heishin ▪ IMO ▪ Iron ▪ KSB ▪
//               Naniwa ▪ Shinko ▪ Shinkokinzoku ▪ Taiko Kikai ▪ Teikoku ▪ Thune
//               Kureka
//             </p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-2">Purifiers</h2>
//             <p>
//               Alfa Laval ▪ Mitsubishi ▪ Samgong ▪ Westfali ▪ Sabroe ▪ Daikin
//             </p>
//           </div>
//         </div>

//         {/* Right 50% - AnimatedTab */}
//         <div className="w-full lg:w-1/2">
//           <div className="bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-gray-800/50">
//             {/* Tab Headers */}
//             <div className="flex justify-center gap-4 mb-10">
//               {tabs.map((tab, index) => {
//                 const isActive = activeTab === index;
//                 return (
//                   <motion.button
//                     key={index}
//                     onClick={() => setActiveTab(index)}
//                     className={`relative flex flex-col items-center px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ${
//                       isActive
//                         ? `bg-blue-600 text-white shadow-lg`
//                         : "text-gray-400 bg-gray-800/40 hover:bg-gray-800/70 hover:text-white"
//                     }`}
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: `0 0 15px 2px rgba(59,130,246,0.6)`,
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <span className="flex items-center gap-2 text-xl">
//                       {tab.icon} {tab.name}
//                     </span>
//                     {isActive && (
//                       <motion.span
//                         className="mt-2 w-16 h-1 bg-white/80 rounded-full"
//                         layoutId="neonIndicator"
//                         transition={{
//                           type: "spring",
//                           stiffness: 500,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </motion.button>
//                 );
//               })}
//             </div>

//             {/* Tab Content */}
//             <div className="relative min-h-[300px] overflow-hidden">
//               {tabs.map((tab, index) => {
//                 const isActive = activeTab === index;
//                 return (
//                   <motion.div
//                     key={index}
//                     className="absolute inset-0 p-8 rounded-2xl bg-blue-700 text-white border border-white/20"
//                     initial={{
//                       x: index > activeTab ? "100%" : "-100%",
//                       opacity: 0,
//                     }}
//                     animate={{
//                       x: isActive ? 0 : index > activeTab ? "100%" : "-100%",
//                       opacity: isActive ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                   >
//                     <motion.div
//                       className="flex flex-col gap-4"
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.15, duration: 0.4 }}
//                     >
//                       <h2 className="text-3xl font-extrabold flex items-center gap-3">
//                         <span className="p-3 rounded-full bg-white/10">
//                           {tab.icon}
//                         </span>
//                         {tab.name}
//                       </h2>
//                       <p className="text-lg leading-relaxed max-w-xl">
//                         {tab.content}
//                       </p>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedTab;

import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaCheck,
  FaCogs,
  FaCompress,
  FaPumpSoap,
  FaFilter,
} from "react-icons/fa";
interface Tab {
  name: string;
  content?: string;
  icon: string;
  points?: string[];
}

const tabs: Tab[] = [
  {
    name: "EQUIPMENT",
    icon: "⚙️",
    points: [
      "Aalborg",
      "Anchors & Chains Kamewa",
      "Aquamaster Rauma",
      "Automation",
      "Backwash Filters",
      "Boll & Kirch",
      "Cathelco",
      "Cathodic Protection",
      "Danfoss Pusnes",
      "Dsk Sockets Rexroth",
      "Filters",
      "Flowmeters",
      "Governor",
      "Heat Exchangers",
      "Hydraulic Pumps & Motor",
      "Garbage Compactors",
    ],
  },
  {
    name: "EQUIPMENT",
    icon: "🛠️",
    points: [
      "Hydraulics",
      "Kawasaki Precision",
      "Kvaerner",

      "Navigation Equipment",
      "Porsgrunn Steering Gear",
      "PR. Gauges",
      "Saacke",
      "Tank Coatinge",
      "Telemecanique",
      "Turbo Chargers",
      "Wabco / Nabco",
      "Zinc Anodes",
      "Mooring / Deck Equipments",
    ],
  },
];

const AnimatedTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="min-h- flex gap-10 md:flex-row flex-col justify-center md:px-20 px-4 !my-16 text-black">
      {/* Left 50% - Text Content */}
      <div className="w-full lg:w-1/2 space-y-10  text-sm leading-relaxed">
        {/* Shared Item Template */}
        {[
          {
            icon: <FaCogs className="text-blue-600 text-3xl sm:text-5xl" />,
            title: "Engines",
            content:
              "Bergen ▪ Bukh ▪ Caterpillar ▪ Cummins ▪ Daihatsu ▪ Deutz ▪ Fiat ▪ Himsen ▪ Mak ▪ Man B & W ▪ Mirrlees Blackstone ▪ Mitsubishi ▪ Rolls Royce ▪ Saab ▪ SKL ▪ Stork ▪ STK ▪ Sulzer ▪ Volvo Penta ▪ W. H. Allen ▪ Wartsila ▪ Yanmar",
          },
          {
            icon: (
              <FaCompress className="text-green-600 text-3xl sm:text-5xl" />
            ),
            title: "Compressors",
            content:
              "Atlas Copco ▪ Compair Reavell ▪ Hamworthy ▪ Hatlapa ▪ Ingersoll Rand ▪ J.P. Sauer Sohn ▪ Matsubara ▪ Donghwa ▪ Sperre ▪ Tamrock ▪ Tamrotor ▪ Tanabe ▪ Telkoku ▪ Yanmar",
          },
          {
            icon: (
              <FaPumpSoap className="text-indigo-600 text-3xl sm:text-5xl" />
            ),
            title: "Pumps",
            content:
              "Allweiler ▪ Azcuedickow ▪ Hamworthy ▪ Heishin ▪ IMO ▪ Iron ▪ KSB ▪ Naniwa ▪ Shinko ▪ Shinkokinzoku ▪ Taiko Kikai ▪ Teikoku ▪ Thune Kureka",
          },
          {
            icon: <FaFilter className="text-red-600 text-3xl sm:text-5xl" />,
            title: "Purifiers",
            content:
              "Alfa Laval ▪ Mitsubishi ▪ Samgong ▪ Westfali ▪ Sabroe ▪ Daikin",
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="w-10 h-10  flex items-center justify-center">
              {section.icon}
            </div>
            <div>
              <h2 className=" font-semibold mb-1 sm:mb-2 text-lg flex items-center space-x-2">
                <span>{section.title}</span>
              </h2>
              <p className="text-sm tracking-wide leading-6 text-gray-600  ">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right 50% - AnimatedTab */}
      <div className="w-full md:w-1/2">
        <div className="backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex flex-col justify-center items-center px-4 sm:px-6 py-2 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 border border-black ${
                    isActive
                      ? "text-black bg-[#feba0d] shadow-sm border-none"
                      : "text-black hover:bg-gray-800/70 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex justify-center items-center gap-2 text-sm ">
                    {tab.icon} {tab.name}
                  </span>
                  {/* {isActive && (
                      <motion.span
                        className="mt-2 w-12 sm:w-16 h-1 bg-black rounded-full"
                        layoutId="neonIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )} */}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[200px] sm:min-h-[300px] overflow-auto mt-5">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <motion.div
                  key={index}
                  className={`p-4 sm:p-8 rounded-2xl text-black ${
                    isActive ? "relative" : "hidden"
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    {tab.points && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc list-outside text-sm sm:text-md max-w-4xl">
                        {tab.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 mb-1 text-gray00"
                          >
                            <FaCheck className="text-primary mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTab;
