"use client";
// import Servicefaq from '@/components/services/Servicefaq'
import Searchinput from "@/components/shared/Searchinput";
import React, { useEffect, useState } from "react";
// import Knowledgecenter from './knowledgecenter'
import { CollapseProps } from "antd";
import dynamic from "next/dynamic";

const Knowledgecenter = dynamic(() => import("./knowledgecenter"), {
  ssr: false,
  loading: () => <p className="text-center my-10">Loading...</p>,
});
export const faqItems: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className=" font-[500] text-lg md:text-lg">
        Flexible Financing Options
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        At Brubish, we understand that every business has unique financial
        needs, especially when it comes to maintaining smooth operations in the
        supply chain. Our flexible financing solutions are designed to provide
        the liquidity your business requires to grow and thrive. Whether you're
        looking for short-term loans or long-term financing, we offer options
        tailored to your needs.
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Tailored Financial Planning
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        Brubish offers personalized financial advisory services. Our team helps
        you streamline cash flow, optimize investments, and plan for growth with
        comprehensive strategies that align with your business goals.
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Risk Management Solutions
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        We provide comprehensive risk management services to protect your assets
        from market fluctuations and supply chain disruptions. Our strategies
        include securing insurance and managing credit risks to ensure business
        continuity.
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Custom Credit Solutions
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        Brubish offers custom credit solutions for businesses, helping you
        manage liquidity effectively. Whether it’s revolving credit or term
        loans, we ensure that your supply chain remains uninterrupted by
        financial constraints.
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Supply Chain Financing
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        We offer supply chain financing solutions that enable you to optimize
        cash flow, extend payment terms, and improve supplier relationships,
        allowing you to focus on scaling your operations efficiently.
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Trade Finance Solutions
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        Our trade finance services help businesses manage the complexities of
        international transactions. From letters of credit to export financing,
        we facilitate smoother cross-border operations and mitigate risks.
      </div>
    ),
  },
  {
    key: "7",
    label: (
      <div className=" text-lg md:text-lg font-[500]">Invoice Financing</div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        Brubish offers invoice financing solutions to help you unlock working
        capital from outstanding invoices. This ensures that your cash flow
        remains stable while awaiting payments from clients.
      </div>
    ),
  },
  {
    key: "8",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Equipment Leasing Options
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        We provide leasing options for logistics equipment, allowing businesses
        to acquire the tools they need without upfront capital expenditure. This
        helps you keep operations running smoothly while preserving cash flow.
      </div>
    ),
  },
  {
    key: "9",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Cash Flow Management Services
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        Effective cash flow management is critical for your business. Our
        services ensure that you have the liquidity needed to manage day-to-day
        expenses while planning for future growth opportunities.
      </div>
    ),
  },
  {
    key: "10",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Debt Restructuring Support
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        If your business faces financial challenges, Brubish offers debt
        restructuring support to help you manage and restructure existing debts.
        We work with you to ensure long-term financial stability.
      </div>
    ),
  },
  {
    key: "11",
    label: (
      <div className=" text-lg md:text-lg font-[500]">Insurance Solutions</div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        We provide comprehensive insurance solutions that cover risks across the
        logistics supply chain, ensuring your cargo, equipment, and operations
        are protected from unforeseen circumstances.
      </div>
    ),
  },
  {
    key: "12",
    label: (
      <div className=" text-lg md:text-lg font-[500]">
        Loan Programs for Expansion
      </div>
    ),
    children: (
      <div className="text-sm md:text-lg text-gray-500 font-[500]">
        Brubish offers specialized loan programs to support the expansion of
        your logistics operations. Whether you’re upgrading technology or
        expanding your fleet, we provide financing to help your business grow.
      </div>
    ),
  },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqItems);

  useEffect(() => {
    // Function to extract text from the JSX label
    const extractLabelText = (label: any) => {
      if (typeof label === "string") {
        return label;
      } else if (React.isValidElement(label)) {
        return label.props.children;
      }
      return "";
    };

    // Filter faqItems based on the search term
    const result = faqItems.filter((item) => {
      const labelText = extractLabelText(item.label).toLowerCase();
      return labelText.includes(searchTerm.toLowerCase());
    });

    setFilteredFaqs(result);
  }, [searchTerm]);

  const handleSearch = (e: any) => {
    console.log(e, "sgfsdgfsdf");

    setSearchTerm(e);
  };

  return (
    <div className="">
      <div
        className={`bg-[url('/knowledgecenter.png')] bg-secondary h-[80vh] flex items-center justify-center`}
      >
        <div>
          <h2 className=" text-3xl md:text-4xl text-center lg:text-6xl font-bold text-white">
            Hi. How can we help?
          </h2>
          <Searchinput onChange={handleSearch} />
        </div>
      </div>
      <Knowledgecenter data={filteredFaqs} />
    </div>
  );
};

export default Page;
