import React from 'react';
import Heading from '../shared/Heading';

const data = [
    {
        id: 1,
        title: "Cargo Insurance",
        description: "Comprehensive coverage for goods during transport, ensuring protection against loss or damage.",
    },
    {
        id: 2,
        title: "Freight Liability Insurance",
        description: "Protects your company from liabilities in case of damage to goods under your care during transit.",
    },
    {
        id: 3,
        title: "Warehouse Insurance",
        description: "Safeguards your stored goods from risks like fire, theft, or natural disasters while in our warehouses.",
    },
    {
        id: 4,
        title: "Marine Insurance",
        description: "Specialized insurance for goods transported via sea routes, offering coverage for cargo and vessel.",
    }
];

const Bmlfourcards = () => {
  return (
    <div className='bg-gray-50 '>
      <div className='sjcontainer py-16 md:py-24'>
        <Heading title="BML Insurance Services" className='text- mb-2' />
        <div className='text-sm md:text-base max-w-[1000px] mt-2 mb-8'>
          At BML, we offer a range of comprehensive insurance services designed to protect your cargo and assets during every step of the logistics process. Our insurance solutions are tailored to provide peace of mind, ensuring the safety and security of your goods, no matter the journey.
        </div>

        <div className='grid grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-8 mt-2 '>
          {data?.map((section, index) => {
            let borderColor, bgcolor;
            switch (index) {
              case 0:
                borderColor = '#fdc34d'; // Light Red
                bgcolor = 'bg-[#fdc34d]'; // Matching Background Red
                break;
              case 1:
                borderColor = '#fbbf24'; // Bright Red
                bgcolor = 'bg-[#fbbf24]'; // Matching Background Red
                break;
              case 2:
                borderColor = '#fbbf24'; // Deep Red
                bgcolor = 'bg-[#fbbf24]'; // Matching Background Red
                break;
              case 3:
                borderColor = '#fdc34d'; // Darker Red
                bgcolor = 'bg-[#fdc34d]'; // Matching Background Red
                break;
              default:
                borderColor = '#fbbf24'; // Fallback Border Color (Very Dark Red)
                bgcolor = 'bg-[#fbbf24]'; // Fallback Background Color
                break;
            }

            return (
              <div className={`border text-center shadow-md h-full flex flex-col`} key={index} style={{ borderColor }}>
                <h3 className={`relative ${bgcolor} text-white py-2 font-bold text-base md:text-lg`}>
                  {section.title}
                  <span
                    style={{
                      clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                      width: '0',
                      height: '0',
                      borderLeft: '13px solid transparent',
                      borderRight: '13px solid transparent',
                      borderTop: `13px solid ${borderColor}`,
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: '-13px',
                    }}
                  />
                </h3>
                <div className="text-sm md:text-base text-gray-600 p-1 md:p-4 pt-6 bg-white flex-grow" dangerouslySetInnerHTML={{ __html: section?.description || "" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bmlfourcards;
