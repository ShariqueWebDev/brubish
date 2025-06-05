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
} from "../../../../../lib/productsData/products_data";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";
import ProductSectionChooseUs from "@/components/WhyChooseUsSection/ProductSectionChooseUs";
import {
  // pageDataDetials,
  ProductPageDataDetials,
} from "../../../../../lib/productsData/pageData";
import Image from "next/image";
import AutoHorizontalScrollingSection from "@/components/Others/AutoHorizontalScrollingSection";
import EmblaCarouselProductCarousel from "@/components/Others/EmblaProductCarousel.tsx/EmblaProductCarousel";
import ProductPoints from "@/components/WhyChooseUsSection/ProductPoints";
import Link from "next/link";
import { WEBSITE_URL } from "@/app/layout";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  return {
    title:
      "Brubish Logistics | FTWZ, Consolidation, VMI & Trade Solutions in India",
    description:
      "Brubish is your trusted partner for FTWZ logistics, consolidation, vendor-managed inventory (VMI), international trade facilitation, and duty-free supply chain solutions across India.",
    openGraph: {
      title:
        "Brubish Logistics | FTWZ, Consolidation, VMI & Trade Solutions in India",
      description:
        "Empowering global trade with Brubish: FTWZ logistics, multi-vendor consolidation, VMI, JIT delivery, and duty-free inventory management tailored for Indian and international businesses.",
      url: `${WEBSITE_URL}/products/${slug}`, // Update path if different
      type: "website",
      images: [
        {
          url: `${WEBSITE_URL}/logo/brubish-favicon.jpeg`,
          width: 1200,
          height: 630,
          alt: "Brubish Logistics - FTWZ & Trade Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Brubish Logistics | FTWZ, Consolidation, VMI & Trade Solutions",
      description:
        "Unlock seamless trade and logistics with Brubish: Consolidation, VMI, FTWZ warehousing, and optimized global supply chain management across India.",
      images: [`${WEBSITE_URL}/logo/brubish-favicon.jpeg`],
    },
    alternates: {
      canonical: `${WEBSITE_URL}/products/${slug}`, // Dynamically inserted slug
    },
  };
}

const ProductPage = ({ params: { slug } }: { params: { slug: string } }) => {
  // const params = useParams();
  // const { slug } = params as { slug: string };

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
      {/* <ServiceNew
        imgData={pageSectionData?.bgImg}
        banner_title={pageSectionData?.banner_title}
        banner_desc={pageSectionData?.banner_desc}
      /> */}
      <div className="">
        <section
          className=" py-20 md:h-[90vh] h-[70vh] overflow-hidden "
          style={{
            // backgroundColor: "#f7f7f9",
            backgroundImage: `url(${pageSectionData?.bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            // "radial-gradient(circle closest-corner at 60% 40%, #f5d14254, #fff0 52%),  radial-gradient(circle farthest-side at 0 100%, #866bf04d, #fff0 31%)",
          }}
        >
          {/* <div className="absolute left-0 top-0 !overflow-hidden">
        <Image
          src={imgData}
          width={2000}
          height={1000}
          alt=""
          className="w-full md:!h-full h-[90vh] object-cover object-center"
        />
      </div> */}
          <div className="bg-gradient-to-r from-black/80 via-black/60 absolute top-0 left-0  inset-0"></div>
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="w-full relative lg:w-1/2 space-y-8 md:pl-22">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#feba0d]  !text-xs text-black inline-block font-semibold px-3 py-1 rounded-full">
                      Brubish India Private Limited
                    </span>
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <img
                      src="/service-new_img/flag-of-india.png"
                      alt="India Flag"
                      className="h-4"
                    />
                  </div>
                </div>

                <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {pageSectionData?.banner_title}
                </h1>

                <p className="text-sm text-gray-300 max-w-xl tracking-wide leading-6">
                  {pageSectionData?.banner_desc}
                </p>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center bg-[#fdcc4f] text-white px-5 py-2 rounded-lg hover:bg-[#9f833b] transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium">Inquire Now</span>
                  <Image
                    src="https://cdn.prod.website-files.com/6787a0ca9071ad357581470a/67969a629020ff1b34e0680b_Primary%20Button%20Icon.svg"
                    alt="Arrow"
                    width={10}
                    height={10}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="">{/* <Image src={} /> */}</div>
        </section>
      </div>
      <EmblaCarouselProductCarousel slides={currentGallery?.products[0]} />
      <div className="md:px-20 ">
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
