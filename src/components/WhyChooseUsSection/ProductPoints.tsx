import React from "react";
import WhyChooseCardProductsection from "./WhyChooseCardProductSection";

const ProductPoints = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-10 md:mt-16 mt-7 md:bg-[#f4f5f6] rounded-lg md:p-7 p-4 ">
        {data?.whyChooseUs?.PartSpeciality?.map((item: any, index: number) => {
          return <WhyChooseCardProductsection key={index} data={item} />;
        })}
        {/* <WhyChooseCard
              icon={GiWorld}
              title="Global  Network"
              description="Our robust global logistics network connects your business to international markets, offering seamless transportation solutions that span continents and ensure your goods are delivered without any delays."
              iconColor="white"
              iconSize={70}
            />
            <WhyChooseCard
              icon={GiForklift}
              title="Warehousing Solutions"
              description="We offer secure, state-of-the-art warehousing facilities tailored to your needs, with efficient inventory management systems that optimize storage and streamline the distribution process for ultimate convenience."
              iconColor="white"
              iconSize={70}
            />
            <WhyChooseCard
              icon={GiCargoShip}
              title="Specialized  Services"
              description="Our specialized freight services cater to unique shipping requirements, ensuring safe, reliable, and cost-effective transport solutions for all types of cargo, from standard shipments to oversized loads."
              iconColor="white"
              iconSize={70}
            />

            <WhyChooseCard
              icon={GiPathDistance}
              title="Efficient Supply Chain"
              description="Streamline your supply chain with our optimized logistics solutions, ensuring seamless coordination between sourcing, storage, and delivery for maximum business efficiency and customer satisfaction."
              iconColor="white"
              iconSize={70}
            />

            <WhyChooseCard
              icon={GiTruck}
              title="Innovative Transportation"
              description="Utilizing cutting-edge technology and eco-friendly practices, we provide advanced transportation services tailored to modern logistics challenges and evolving customer expectations."
              iconColor="white"
              iconSize={70}
            /> */}
      </div>
    </div>
  );
};

export default ProductPoints;
