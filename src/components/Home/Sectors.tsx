import Image from 'next/image';
import React from 'react';
import Heading from '../shared/Heading';

const data = [
    { id: 1, name: "Chemicals", icon: "/icons2/chemicals.svg" },
    { id: 2, name: "Liquor", icon: "/icons2/liquor.svg" },
    { id: 3, name: "Pharmaceutical", icon: "/icons2/pharmaceutical.svg" },
    { id: 4, name: "Polymer", icon: "/icons2/polymer.svg" },
    { id: 5, name: "Cosmetics", icon: "/icons2/cosmetic.svg" },
    { id: 6, name: "Luxury Items", icon: "/icons2/luxury.svg" },
    { id: 7, name: "Aircraft Parts & Spares", icon: "/icons2/aeroplane.svg" },
    { id: 8, name: "Medical Devices", icon: "/icons2/medicaldevices.svg" },
    { id: 9, name: "Machinery", icon: "/icons2/machinery.svg" },
    { id: 10, name: "Auto Parts", icon: "/icons2/autoparts.svg" },
    { id: 11, name: "Electronics", icon: "/icons2/electronics.svg" },
    { id: 12, name: "FMCG Foods", icon: "/icons2/foods.svg" },
    { id: 12, name: "Metals", icon: "/icons2/metals.svg" },
    { id: 12, name: "Fashion", icon: "/icons2/fashion.svg" },
    { id: 12, name: "E-Commerce", icon: "/icons2/ecommerce.svg" },
    { id: 12, name: "Consumer goods", icon: "/icons2/goods.svg" },
    { id: 12, name: "Textile", icon: "/icons2/textile.svg" },
    { id: 12, name: "Household", icon: "/icons2/household.svg" },
];

const Sectors = () => {
  return (
    <div className=" py-10 md:py-16 bg-gray-50">

    <div className='sjcontainer pb-10'>
       <Heading title="Sectors We Work For" className='text-center' />
       {/* <div className='w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3'></div> */}

    <div className="grid mt-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-2">
    {data.map((item,index) => (
  <div data-aos="zoom-in" data-aos-delay={index * 10}
    key={item.id}
    className="p-1  md:p-4 group m-1.5 md:m-2 border-b shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-center"
  >
    <img
      src={item.icon}
      alt={item.name}
      className="w-16 h-16  mx-auto group-hover:scale-105 duration-300 "
    />
    <h3 className="text-[10px]   sm:text-base mt-3">{item.name}</h3>
  </div>
))}
    </div>
      </div>
      </div>
  );
};

export default Sectors;
