"use client";

import React from "react";
import { useParams } from "next/navigation";
// import { galleryItems } from "@/app/layout";
import CardView from "@/components/CardView";
// import other CardViews if you need specialized rendering
import ServiceNew from "@/components/ServiceNew";
import AboutTech from "@/components/AboutTech";
import AdvantageWeb from "@/components/AdvantageWeb";
import AwardWay from "@/components/AwardWay";
import TabChanger from "@/components/TabChanger";
import {
  GalleryItem3,
  galleryItems,
} from "../../../../lib/productsData/products_data";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";

const ProductPage = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const currentGallery = galleryItems.find(
    (item: GalleryItem3) => item.slug === slug
  );
  // console.log(currentGallery);

  if (!currentGallery) {
    return (
      <p className="text-center mt-10">No products found for this page.</p>
    );
  }

  return (
    <section>
      <ServiceNew />
      {/* <AboutTech /> */}
      <div className="md:px-16 px-4  py-10">
        <WhyChooseUsSection />
      </div>
      <div className="md:px-20 px-4">
        <AdvantageWeb />
      </div>
      <AwardWay />

      {currentGallery?.products?.map((item: any, index: number) => {
        // console.log(item);

        return (
          <CardView
            key={index}
            // title={section.main_title}
            main_title={item?.main_title}
            product_detials={item?.product_detail}
          />
        );
      })}

      <TabChanger />
    </section>
  );
};

export default ProductPage;
