import Heading from '@/components/shared/Heading';
import Subheading from '@/components/shared/Subheading';
import Image from 'next/image';
import React from 'react';

const Sourcingseven = () => {
  return (
    <div className="flex sjcontainer py-8 md:pt-16  md:pb-10 flex-col-reverse gap-x-10 md:flex-row items-center w-full">
    

      <div className="flex-1 group">
        <span className="text-sm text-left md:text-center block  md:text-base font-bold md:py-1.5 text-gray-500 uppercase">
          BML Marketing Advantage
        </span>
        <p className="text-sm  md:text-2xl font-bold pb-1.5 text-black">
          <Subheading className=' text-left md:text-center mt-2 mb-5' title={`We help in sourcing commodities from where they are Plentiful to where they are Needed`} />
        </p>
        
        <Image
            src="/services/marketing/advantages3.png"
            alt="banner"
            className="!object-cover max-md:hidden duration-300 w-full h-full md:min-h-[200px]  px-2"
            width={1600}
            height={1000}
          />
          <div className='md:hidden'>

        <Image
            src="/services/marketing/advantages-mobile.png"
            alt="banner"
            className="!object-cover duration-300 w-full h-full md:min-h-[200px] "
            width={1200}
            height={1000}
            />
          <div className=' text-left items-center'>
        <div className="text-sm  md:text-base text-gray-600 duration-300 mt-2">
        <strong>From Plentiful:</strong> With expensive sourcing solutions ,BML marketing helps you to source right product from right manufacturer from the country where they are plentiful.
        </div>
        <div className="text-sm md:text-base text-gray-600 duration-300 mt-4">
        <strong>To Needful:</strong>We help from sourcing the product from plentiful country to India and delivering it to your customers.
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sourcingseven;
