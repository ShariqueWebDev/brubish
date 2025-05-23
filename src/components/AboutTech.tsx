// D:\brudish\brubish\src\components\AboutTech.tsx
import Image from "next/image";
import React from "react";

const AboutTech: React.FC = () => {
  return (
    <section className="bg-white py-9 md:py-10 md:px-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-18">
        {/* Image Section - 40% width */}
        <div className="flex justify-center items-center w-full md:w-2.5/5">
          <div className="w-full max-w-[420px] h-auto flex justify-center items-center">
            <Image
              src="/service-new_img/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg"
              alt="Integration Banner"
              width={420}
              height={300}
              className="w-full h-42 object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Text Content - 60% width */}
        <div className="w-full md:w-2.5/5">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why We?
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Brubish India Private Limited is bringing 15 years of its
              founder’s expertise in the field of essential purchases and
              outsourcing for the entire need of marine business. We are totally
              for quick response and fast delivery of any requirement for your
              ship at the nearest port anywhere in the world. We are building
              our reputation for the emergency services as we could outsource
              the actual parts and replacement all around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTech;
