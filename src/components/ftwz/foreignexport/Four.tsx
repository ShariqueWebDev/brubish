import Heading from '@/components/shared/Heading';
import Subheading from '@/components/shared/Subheading';
import Image from 'next/image';
import React from 'react';
import { FaCogs, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const data = [
  {
    icon: <FaCogs />,
    title: 'Simplification',
    description: 'Foreign companies can import goods into India without the need to set up an office, hire staff, or establish a branch.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Compliance',
    description: 'Eliminates the need for companies to possess their own regulatory documents, simplifying compliance requirements.',
  },
  {
    icon: <FaHandshake />,
    title: 'Partnership',
    description: 'Partnering with LOM allows access to FTWZ facilities and the use of LOM’s IEC (Import & Export Certificate) for hassle-free import/export processes.',
  },
];

const Fourforeignexport = () => {
  return (
    <div className='bg-amber-50'>
    <div className="sjcontainer py-10  md:py-20 ">
      <Subheading title="Case Study - Overseas companies - IEC not mandatory" className='text-center' />
      <div className="my-4">
        <Image
          src="/ftwz/consolidation/32aa.png"
          alt="consolidation"
          width={1600}
          height={1000}
          className="!object-contain mix-blend-multiply w-full h-auto"
          />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
          key={index}
          className="bg-white hover:bg-amber-50 duration-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-lg flex flex-col items-center text-center"
          >
            <div className="text-amber-500 text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default Fourforeignexport;
