import { Metadata } from "next";
import React from "react";
import { WEBSITE_URL } from "../layout";

export const metadata: Metadata = {
  title: "Book My Logistics",
  description:
    "BML offer duty free economic activity in line with local trade and commerce regulations.",
  openGraph: {
    title: "Book My Logistics",
    description:
      "BML offer duty free economic activity in line with local trade and commerce regulations.",
    url: WEBSITE_URL,
    type: "website",
    images: [
      {
        url: `${WEBSITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: "Book My Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book My Logistics",
    description:
      "BML offer duty free economic activity in line with local trade and commerce regulations.",
    images: [`${WEBSITE_URL}/opengraph.png`],
  },
  alternates: {
    canonical: `${WEBSITE_URL}`,
  },
};

const layout = ({ children }: any) => {
  return <div className="">{children}</div>;
};

export default layout;
