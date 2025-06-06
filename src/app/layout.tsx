import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import Footer from "@/components/HeaderAndFooter/Footer";

import FloatingButton from "@/components/shared/FloatingButton";
import NewHeader from "@/components/HeaderAndFooter/NewHeader";
import { Open_Sans, DM_Sans } from "next/font/google";

import AosComp from "@/components/AOS/Aos";
export const WEBSITE_URL = "https://brubish.com";

// import {Urbanist} from 'next/font/google'

const urbanist = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300"],
});

export const servicesData = [
  {
    id: 1,
    name: "Brubish Marketing",
    url: "/brubish-marketing",
    logo: "/services/icons/marketing.png",
    description: "Sourcing from where its plentiful to where its needful.",
  },
  {
    id: 123,
    name: "Brubish FTWZ",
    url: "/ftwz-services",
    logo: "/services/icons/ftwz.png",
    description: "Duty free warehousing service across India.",
  },
  {
    id: 2,
    name: "Brubish Finance",
    url: "/brubish-finance",
    logo: "/services/icons/finance.png",
    description: "Comprehensive financial services tailored for SME's.",
  },
  {
    id: 3,
    name: "Brubish Freight",
    url: "/brubish-freight",
    logo: "/services/icons/freight.png",
    description: "Fast and reliable freight services for global shipments.",
  },
  {
    id: 4,
    name: "Brubish Insurance",
    url: "/brubish-insurance",
    logo: "/services/icons/insurance.png",
    description:
      "Comprehensive insurance coverage for all your logistic needs.",
  },
  {
    id: 5,
    name: "Brubish Trucking",
    url: "/brubish-trucking",
    logo: "/services/icons/trucking.png",
    description: "Dependable trucking services to ensure timely deliveries.",
  },
  {
    id: 6,

    name: "Brubish VAS",
    url: "/brubish-vas",
    logo: "/services/icons/vas.png",
    description:
      "Value added services to enhance efficiency across the supply chain.",
  },
  {
    id: 7,

    name: "Brubish Customs",
    url: "/brubish-customs",
    logo: "/services/icons/custom.png",
    description:
      "Experts custom clearance services for seamless cross border trade.",
  },
];

export const ftwzData = [
  {
    id: 1,
    logo: "/ftwz/icons/indian-import.png",

    name: "FTWZ For Indian Importers",
    url: "ftwz-for-indian-importers",
  },
  {
    id: 2,
    logo: "/ftwz/icons/foriegn-export.png",

    name: "FTWZ For Foreign Exporters",
    url: "ftwz-for-foreign-exporters",
  },
  {
    id: 3,
    logo: "/ftwz/icons/indian-export.png",

    name: "FTWZ For Indian Exporters",
    url: "ftwz-for-indian-exporters",
  },

  {
    id: 4,
    logo: "/ftwz/icons/ecommerce2.png",

    name: "FTWZ For E-commerce Companies",
    url: "ftwz-for-ecommerce-companies",
  },
  {
    id: 5,
    logo: "/ftwz/icons/consolidation.png",

    name: " FTWZ For Consolidation",
    url: "ftwz-for-consolidation",
  },

  {
    id: 6,
    logo: "/ftwz/icons/re-export2.png",
    name: "FTWZ For Re-export Purpose ",
    url: "ftwz-for-re-export-purpose",
  },
];

export const productsData = [
  {
    id: 1,
    logo: "/products-icons/cargo-ship.png",

    name: "Vessel Spares & Parts",
    url: "vessel-spares",
  },
  {
    id: 2,
    logo: "/products-icons/crucible.png",

    name: "Steel",
    url: "steel",
  },
  {
    id: 2,
    logo: "/products-icons/metal.png",

    name: "Metal",
    url: "metal",
  },
  {
    id: 3,
    logo: "/products-icons/paper.png",

    name: "Paper & Pulp",
    url: "paper-pulp",
  },

  {
    id: 4,
    logo: "/products-icons/goods.png",

    name: "Consumer Goods",
    url: "consumer-goods",
  },
  {
    id: 5,
    logo: "/products-icons/app.png",

    name: " Household Appliances",
    url: "household-appliances",
  },

  {
    id: 6,
    logo: "/products-icons/agri.png",
    name: "Agricultural Products ",
    url: "agri-products",
  },
  {
    id: 7,
    logo: "/products-icons/fashion.png",
    name: "Fashion ",
    url: "fashion",
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}  antialiased`}>
        {/* <LenisWrapper> */}
        <NextTopLoader showSpinner={false} easing="ease" color="#0399C9" />
        <AosComp />
        {/* <Announcement /> */}
        <NewHeader />
        {children}
        <FloatingButton />
        <Footer />
        {/* </LenisWrapper> */}
      </body>
    </html>
  );
}
