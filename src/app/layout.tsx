import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";


import Footer from "@/components/HeaderAndFooter/Footer";

import FloatingButton from "@/components/shared/FloatingButton";
import NewHeader from "@/components/HeaderAndFooter/NewHeader";
import {Open_Sans,DM_Sans} from 'next/font/google'

import AosComp from "@/components/AOS/Aos";
export const WEBSITE_URL = 'https://bml.demo-web.live'


// import {Urbanist} from 'next/font/google'

const urbanist = Open_Sans({
  subsets : ["latin"],
  weight:["400","700","300"]
})



export const servicesData = [
  {
    id: 1,
    name: "BML Marketing",
    url: "/bml-marketing",
    logo: "/services/icons/marketing.png",
    description: "Sourcing from where its plentiful to where its needful."
  },
  {
    id: 123,
     name: "BML FTWZ",
    url: "/ftwz-services",
    logo: "/services/icons/ftwz.png",
    description: "Duty free warehousing service across India."
  }
  ,
  {
    id: 2,
    name: "BML Finance",
    url: "/bml-finance",
    logo: "/services/icons/finance.png",
    description: "Comprehensive financial services tailored for SME's."
  },
  {
    id: 3,
    name: "BML Freight",
    url: "/bml-freight",
    logo: "/services/icons/freight.png",
    description: "Fast and reliable freight services for global shipments."
  },
  {
    id: 4,
    name: "BML Insurance",
    url: "/bml-insurance",
    logo: "/services/icons/insurance.png",
    description: "Comprehensive insurance coverage for all your logistic needs."
  },
  {
    id: 5, 
    name: "BML Trucking",
    url: "/bml-trucking",
    logo: "/services/icons/trucking.png",
    description: "Dependable trucking services to ensure timely deliveries."
  },
  {
    id: 6, 

    name: "BML VAS",
    url: "/bml-vas",
    logo: "/services/icons/vas.png",
    description: "Value added services to enhance efficiency across the supply chain."
  },
  {
    id: 7, 

    name: "BML Customs",
    url: "/bml-customs",
    logo: "/services/icons/custom.png",
    description: "Experts custom clearance services for seamless cross border trade."
  }
];

export const ftwzData = [
  {
    id: 1, logo: "/ftwz/icons/indian-import.png",

    name: "FTWZ For Indian Importers",
    url: "ftwz-for-indian-importers",
  },
  {
    id: 2, logo: "/ftwz/icons/foriegn-export.png",

    name: "FTWZ For Foreign Exporters",
    url: "ftwz-for-foreign-exporters",
  },
  {
    id: 3, logo: "/ftwz/icons/indian-export.png",

    name: "FTWZ For Indian Exporters",
    url: "ftwz-for-indian-exporters",
  },

  {
    id: 4, logo: "/ftwz/icons/ecommerce2.png",

    name: "FTWZ For E-commerce Companies",
    url: "ftwz-for-ecommerce-companies",
  },
  {
    id: 5, logo: "/ftwz/icons/consolidation.png",

    name: " FTWZ For Consolidation",
    url: "ftwz-for-consolidation",
  },

  {
    id: 6, logo: "/ftwz/icons/re-export2.png",
    name: "FTWZ For Re-export Purpose ",
    url: "ftwz-for-re-export-purpose",
  },


];



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
          className={`${urbanist.className}  antialiased`}
      >
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
