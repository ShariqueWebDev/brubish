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
import ProductSectionChooseUs from "@/components/WhyChooseUsSection/ProductSectionChooseUs";
import {
  // pageDataDetials,
  ProductPageDataDetials,
} from "../../../../lib/productsData/pageData";
import Image from "next/image";
import AutoHorizontalScrollingSection from "@/components/Others/AutoHorizontalScrollingSection";
import EmblaCarouselProductCarousel from "@/components/Others/EmblaProductCarousel.tsx/EmblaProductCarousel";
import ProductPoints from "@/components/WhyChooseUsSection/ProductPoints";

const ProductPage = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const currentGallery = galleryItems.find(
    (item: GalleryItem3) => item.slug === slug
  );

  const pageSectionData = ProductPageDataDetials.find(
    (item: any) => item.slug === slug
  );

  // console.log(currentGallery);

  if (!currentGallery) {
    return (
      <p className="text-center mt-10">No products found for this page.</p>
    );
  }

  console.log(pageSectionData);

  const creatives = [
    "/pictures/1.webp",
    "/pictures/2.webp",
    "/pictures/3.webp",
    "/pictures/4.webp",
    "/pictures/5.webp",
    "/pictures/6.webp",
    "/pictures/7.webp",
  ];

  return (
    <section>
      <ServiceNew
        imgData={pageSectionData?.bgImg}
        banner_title={pageSectionData?.banner_title}
        banner_desc={pageSectionData?.banner_desc}
      />
      <EmblaCarouselProductCarousel slides={currentGallery?.products[0]} />
      <div className="px-20">
        <ProductPoints data={pageSectionData} />
      </div>
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
      {/* <AboutTech /> */}
      {/* <AutoHorizontalScrollingSection gallery={currentGallery?.products} /> */}
      {/* 
      <div className="relative md:mt-16 mt-10 h-[300px]">
        <Image
          src={pageSectionData?.bottomImg || ""}
          width={1600}
          height={700}
          alt=""
          className="object-cover w-full h-[300px]"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {pageSectionData?.topTitle}
          </h2>
          <p className=" text-sm text-gray-300 md:px-60 ">
            {pageSectionData?.topDesc}
          </p>
        </div>
      </div> */}

      <AwardWay />
      <div className="md:px-16 px-4  py-10">
        {/* <WhyChooseUsSection /> */}
        <div className="">
          <ProductSectionChooseUs data={pageSectionData} />
        </div>
      </div>
      <div className="md:px-20 px-4">
        <AdvantageWeb />
      </div>

      {slug === "vessel-spares" && <TabChanger />}
    </section>
  );
};

export default ProductPage;
