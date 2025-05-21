import React from 'react';
import { FaBox, FaBoxOpen, FaHandsHelping, FaPaintBrush, FaTruck, FaCut, FaFileAlt, FaTags, FaCheckCircle, FaPallet, FaRecycle, FaWineBottle } from 'react-icons/fa';
import Heading from '../shared/Heading';
import Image from 'next/image';
import Subheading from '../shared/Subheading';

const data = [
  { id: 1, icon: <FaBox className="text-white" />, title: "Storage" },
  { id: 2, icon: <FaBoxOpen className="text-white" />, title: "Packaging" },
  { id: 3, icon: <FaHandsHelping className="text-white" />, title: "Handling" },
  { id: 4, icon: <FaPaintBrush className="text-white" />, title: "Painting" },
  { id: 5, icon: <FaTruck className="text-white" />, title: "Transportation" },
  { id: 6, icon: <FaCut className="text-white" />, title: "Cutting" },
  { id: 7, icon: <FaFileAlt className="text-white" />, title: "Documentation" },
  { id: 8, icon: <FaPallet className="text-white" />, title: "Pallestisation" },
  { id: 9, icon: <FaTags className="text-white" />, title: "Tagging & Labeling" },
  { id: 10, icon: <FaCheckCircle className="text-white" />, title: "Quality Assurance" },
  { id: 11, icon: <FaBox className="text-white" />, title: "Packing" },
  // { id: 12, icon: <FaRecycle className="text-white" />, title: "Refurbishment, Repairs & Maintenance" },
  { id: 13, icon: <FaWineBottle className="text-white" />, title: "Bottling" },
];

const Ftwz4 = () => {
  return (
    <div className='py-8 md:py-10 '>
      <div className='sjcontainer'>
        <Subheading className='text-center mb-4' title="Value Added Services" 
        />
          
        {/* <div className="grid grid-cols-3 gap-0.5  mx-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-4 border bg-secondary hover:bg-amber-500 duration-200 shadow-sm"
            >
              <div className="text-gray-400">
                <div className="text-[20px] md:text-[36px]">
                  {React.cloneElement(item.icon, { size: '1em' })}
                </div>
              </div>
              <span className="font-[400] text-xs lg:text-lg  text-white">{item.title}</span>
            </div>
          ))}
        </div> */}
        <div>
     <Image
                 src="/services/vas/vasimage.png"
                 alt="banner"
                 className="!object-contain  w-full h-full  max-w-[800px] mx-auto  md:px-2"
                 width={1600}
                 height={1000}
               />
        </div>
      </div>
    </div>
  );
};

export default Ftwz4;
