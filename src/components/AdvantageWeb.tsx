"use client";
import Image from "next/image";
import React from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const features: Feature[] = [
  {
    title: "Quick in Response",
    description:
      "We ensure rapid replies and prompt assistance for every request.",
    image: "/service-new_img/14302033.png",
    alt: "Quick Response",
  },

  {
    title: "Expert in Sourcing",
    description:
      "We excel at finding top-quality marine equipment across the globe.",
    image: "/service-new_img/economist_11163207.png",
    alt: "Expert Sourcing",
  },
  {
    title: "Trustworthy",
    description:
      "We provide dependable service and build lasting partnerships.",
    image: "/service-new_img/trust_17026916.png",
    alt: "Trustworthy Service",
  },

  {
    title: "Good in Logistics",
    description: "We manage global shipping with speed, care, and precision.",
    image: "/service-new_img/conveyor_6849450.png",
    alt: "Logistics Support",
  },

  {
    title: "Best Competitive Pricing",
    description: "We deliver top value by combining quality with fair pricing.",
    image: "/service-new_img/6043206.png",
    alt: "Competitive Pricing",
  },

  {
    title: "Professional",
    description:
      "Our skilled team ensures exceptional service and reliability.",
    image: "/service-new_img/3273073.png",
    alt: "Professional Service",
  },
];

const AdvantageWeb: React.FC = () => {
  return (
    <section id="feature" className="md:!py-16 py-10 bg-gray-50 p-4 md:p-10">
      <div className=" mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-5 md:text-3xl text-2xl font-semibold text-gray-800 uppercase">
            Our Advantages
          </span>
          <h2 className="text-sm md:px-60 font-normal text-gray-900">
            Our every product is original, in top working condition and of the
            best possible quality, to provide reliable solutions for your marine
            business needs. We offer competitive prices for our valued customers
            and overseas buyers.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Image
                src={feature.image}
                alt={feature.alt}
                width={313}
                height={200}
                className="w-full max-w-[313px] h-auto"
                sizes="(max-width: 479px) 100vw, 313px"
              />
            </div>
          ))} */}
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {feature.description}
              </p>
              <Image
                src={feature.image}
                alt={feature.alt}
                width={75}
                height={50}
                className="w-full max-w-[50px] h-auto"
                sizes="(max-width: 479px) 100vw, 75px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageWeb;
