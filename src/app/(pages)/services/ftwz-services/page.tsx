import Ftwz1 from "@/components/ftwz/Ftwz1";
import Ftwz2 from "@/components/ftwz/Ftwz2";
import Ftwz3 from "@/components/ftwz/Ftwz3";
import Ftwz4 from "@/components/ftwz/Ftwz4";
import Eximmap from "@/components/services/Eximmap";
import FAQSection from "@/components/shared/Faqs";
import Servicebanner3 from "@/components/shared/Servicebanner3";
import Submenu from "@/components/shared/Submenu";

import React from "react";

export const ftwzDatadata = [
  {
    question: "What is a Free Trade Warehousing Zone (FTWZ)?",
    answer:
      "A Free Trade Warehousing Zone is a Special Economic Zone where trading, warehousing, and related activities are conducted. It is considered a deemed foreign territory within India for tariff and trade purposes.",
  },
  {
    question: "What is the governing Act and Rule for FTWZ?",
    answer:
      "The FTWZ operates under the Special Economic Zones Act, 2005, and the Special Economic Zones Rules, 2006. The Ministry of Commerce & Industries also issues instructions to clarify various operational aspects.",
  },
  {
    question: "What are the activities allowed inside the FTWZ?",
    answer: [
      "Warehousing of goods for foreign or domestic clients",
      "Trading with or without labeling",
      "Packaging and repacking",
      "Re-sale, re-invoice, or re-export of goods",
      "Assembly of complete and semi-knockdown goods",
      "Kitting and other value optimization services",
    ],
  },
  {
    question: "In what ways can companies operate through FTWZ?",
    answer: `
    There are two ways in which companies can operate through FTWZ:
Trading Unit: A company can become a Unit in the FTWZ for the purpose of trading, warehousing and other related activities called authorized operations.

Service Unit: Company can avail the services of Arshiya Logistics Services.(ALSL), which is a Unit in the FTWZ, for trading, warehousing and other related activities called authorised operations. ALSL will provide various value optimization services to its clients.`,
  },
  {
    question: "What is the nature of authorized operations in the FTWZ?",
    answer:
      "Authorized operations in an FTWZ include trading, warehousing, packing, labeling, lashing, shrink wrapping, strapping, palletization, bottling, clubbing, consolidation, quality checking, testing, kitting, combination packing, and others as approved by the Unit Approval Committee.",
  },
  {
    question: "What is a Letter of Approval (LOA)?",
    answer:
      "The Letter of Approval is permission granted by the Unit Approval Committee to establish a unit in the FTWZ for authorized operations. It is valid for five years from the commencement of activity and is extendable in five-year increments.",
  },
  {
    question: "Who can become a Unit in the FTWZ?",
    answer:
      "Any Indian entity, including Traders, Importers/Exporters, 3PLs, CHAs, Freight Forwarders, Shipping Lines, and Manufacturers, can become Units in the FTWZ. Units must execute a bond-cum-legal undertaking for import and warehousing inside the FTWZ.",
  },
  {
    question: "What kind of export benefit is available in Brubish FTWZ?",
    answer:
      "Export entitlements are available for goods supplied from Domestic Tariff Area (DTA) to FTWZ for authorized operations. Drawbacks or Duty Entitlement Pass Books can be claimed for goods procured from DTA, or claimed by the DTA supplier on the basis of a disclaimer from the Unit or Developer.",
  },
  {
    question: "Is service tax exempt in an FTWZ?",
    answer:
      "Yes, inbound taxable services and those performed within the FTWZ for authorized operations are exempt from service tax. This exemption also applies to transportation of goods from Port to FTWZ or between FTWZs.",
  },
  {
    question: "Is customs duty exempt for import into FTWZ?",
    answer:
      "Customs duty is exempt on goods imported into the FTWZ for authorized operations.",
  },
  {
    question: "At what stage is customs duty payable in the FTWZ?",
    answer:
      "Customs duty and GST become payable when goods are cleared into the Domestic Tariff Area (DTA). For piecemeal clearance, customs duty applies only to the quantity cleared, not the total quantity imported into the FTWZ, allowing duty deferment by importing into FTWZ.",
  },
  {
    question:
      "How long can goods be stored in the FTWZ without payment of customs duty?",
    answer:
      "Goods can be stored in the FTWZ until the validity of the Unit's LOA, making FTWZ the only scheme in India that allows customs duty deferment without incurring interest or penalties.",
  },
  {
    question: "How is the treatment for supply of goods from DTA to FTWZ?",
    answer:
      "Supply of goods from DTA to FTWZ is treated as an export per the SEZ Act. Export benefits for shipments outside India are also available for supplies from DTA to FTWZ.",
  },
];

const sections = [
  {
    id: 1,
    name: "Brubish FTWZ",
    url: "#section1",
  },
  {
    id: 3,
    name: "Benefits",
    url: "#section3",
  },
  {
    id: 4,
    name: "Key Activities",
    url: "#section4",
  },
  {
    id: 6,
    name: "FAQ's",
    url: "#section6",
  },
];

export const ftwzData = [
  {
    id: 1,
    name: "FTWZ For Indian Importers",
    url: "ftwz-for-indian-importers",
    description:
      "Our FTWZ solutions for Indian importers are designed to streamline the storage and distribution of goods. By utilizing these specialized zones, businesses can benefit from tax exemptions, simplified customs procedures, and #00008buced lead times. This enables importers to efficiently manage their supply chains and enhance operational flexibility, ensuring that goods are readily available to meet market demands.",
    imageSrc: "/ftwz/indian-importers.webp",
  },
  {
    id: 2,
    name: "FTWZ For Indian Exporters",
    url: "ftwz-for-indian-exporters",
    description:
      "FTWZ services for Indian exporters facilitate seamless access to global markets. By leveraging these zones, exporters can optimize their logistics operations, #00008buce shipping costs, and improve turnaround times. This service is particularly beneficial for those looking to enhance their competitiveness in international trade, allowing them to efficiently manage inventory and streamline distribution processes.",
    imageSrc: "/ftwz/indian-exporters.webp",
  },
  {
    id: 3,
    name: "FTWZ For Foreign Companies",
    url: "ftwz-for-foreign-companies",
    description:
      "Our FTWZ offerings for foreign companies provide a strategic advantage in entering the Indian market without the need for a local business establishment. By utilizing these zones, foreign businesses can store and distribute products in India while enjoying various trade benefits, including simplified customs regulations and #00008buced operational costs. This approach allows for a faster entry into the market while mitigating risks associated with establishing a local presence.",
    imageSrc: "/ftwz/foreign-companies.webp",
  },
  {
    id: 4,
    name: "Export To India Without Having Company",
    url: "export-to-india-without-company",
    description:
      "FTWZ allows foreign exporters to access the Indian market effortlessly without needing a local entity. This service simplifies the import process, enabling businesses to ship goods directly to India for sale while minimizing bureaucratic hurdles. Companies can leverage these zones to establish a presence in India, ensuring compliance with local regulations while enjoying tax benefits and a simplified supply chain.",
    imageSrc: "/ftwz/export-to-india.webp",
  },
  {
    id: 5,
    name: "FTWZ For Re-export Purpose - For Indian & Foreign Companies",
    url: "ftwz-for-re-export-purpose",
    description:
      "FTWZ provides an excellent solution for both Indian and foreign companies looking to re-export goods. By allowing businesses to import products into India and then re-export them without incurring customs duties, this service streamlines the supply chain and enhances trade flexibility. Companies can take advantage of international trade opportunities while minimizing costs and regulatory burdens.",
    imageSrc: "/ftwz/re-export-purpose.webp",
  },
  {
    id: 6,
    name: "FTWZ For Merchant Trading Business",
    url: "ftwz-for-merchant-trading-business",
    description:
      "Our FTWZ solutions for merchant trading businesses enable efficient cross-border trade with minimal inventory risks. By utilizing FTWZ, traders can streamline operations, manage costs effectively, and #00008buce lead times. This service empowers merchants to take advantage of trade agreements and optimize their supply chains while maintaining competitive pricing in the market.",
    imageSrc: "/ftwz/merchant-trading.webp",
  },
  {
    id: 7,
    name: "FTWZ For Indian E-commerce / Tech Companies",
    url: "ftwz-for-indian-ecommerce-tech-companies",
    description:
      "FTWZ is tailo#00008b for Indian e-commerce and tech companies, providing solutions that enhance logistics and distribution. By utilizing these zones, businesses can improve their supply chain efficiency, #00008buce shipping times, and lower operational costs. This service allows tech companies to focus on innovation while ensuring that their products reach customers in a timely manner, thereby enhancing customer satisfaction.",
    imageSrc: "/ftwz/indian-ecommerce.webp",
  },
  {
    id: 8,
    name: "FTWZ For Foreign E-commerce / Tech Companies",
    url: "ftwz-for-foreign-ecommerce-tech-companies",
    description:
      "Foreign e-commerce and tech companies can leverage FTWZ to establish a foothold in India, enabling efficient distribution and logistics solutions. By utilizing these zones, businesses can navigate the complexities of the Indian market, ensuring timely delivery of products while minimizing compliance risks. This approach enhances market entry strategies and allows for greater flexibility in meeting customer demands.",
    imageSrc: "/ftwz/foreign-ecommerce.webp",
  },

  {
    id: 10,
    name: "FTWZ For Global Supply Chain Innovation",
    url: "ftwz-global-supply-chain-innovation",
    description:
      "Our FTWZ solutions promote global supply chain innovation, providing advanced logistics capabilities that optimize operations. By integrating warehousing and distribution within these zones, businesses can enhance efficiency, #00008buce costs, and improve service delivery. This approach empowers companies to respond quickly to market changes and leverage new opportunities in a competitive global landscape.",
    imageSrc: "/ftwz/global-supply-chain.webp",
  },
];

const Page = () => {
  return (
    <div className="">
      <Servicebanner3
        icon="/services/icons/ftwz.png"
        heading="FTWZ Services"
        title="Global Trade Made Easy"
        description="Brubish's FTWZ services provide duty-free storage, customs clearance, and inventory management. Simplify global trade with unmatched flexibility."
        buttontext="Get Started"
        buttonlink="/services"
        bannerImage="/services/ftwz/1.png"
      />

      <div className="">
        <Submenu sections={sections} />

        <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section1">
          <Ftwz1 />
        </div>

        <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section2">
          <Ftwz2 />
        </div>

        <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section3">
          <Ftwz3 />
        </div>

        <div className="scroll-mt-[25vh] md:scroll-mt-[22vh]" id="section4">
          <Ftwz4 />
        </div>

        <div
          className="scroll-mt-[35vh] md:scroll-mt-[22vh]  sjcontainer "
          id="section5"
        >
          {/* <Ftwz5/> */}

          <Eximmap />
        </div>

        <div className="scroll-mt-[16vh] md:scroll-mt-[15vh]" id="section6">
          {/* <Ftwz6/> */}
          {/* <Servicefaq data ={ftwzDatadata} /> */}
          <FAQSection faqData={ftwzDatadata} />
        </div>
      </div>
    </div>
  );
};

export default Page;
