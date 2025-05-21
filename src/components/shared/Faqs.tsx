"use client";
import React, { useState, useRef } from "react";
import { ChevronDown, MoveRight } from "lucide-react";
import { Flame } from "lucide-react";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";
import Heading from "./Heading";
import Subheading from "./Subheading";

// FAQ Data
const faqData = [
    {
      question: "What Microsoft courses do you offer?",
      answer: "educ4te offers a range of courses including Microsoft Excel, Word, PowerPoint, Azure Fundamentals, and Power BI, tailored for all skill levels."
    },
    {
      question: "Are the courses beginner-friendly?",
      answer: "Yes, our courses are designed for beginners, with step-by-step instructions to help you master Microsoft tools efficiently."
    },
    {
      question: "Do you provide certifications?",
      answer: "Upon completion of select courses, you will receive a certification of completion to showcase your skills."
    },
    {
      question: "Can I access the courses on mobile devices?",
      answer: "Absolutely! All our courses are optimized for mobile, tablet, and desktop, allowing you to learn on the go."
    },
    {
      question: "What support do you offer for students?",
      answer: "We provide 24/7 customer support and access to an exclusive student community for questions and discussions."
    },
   
  
  ];

export default function FAQSection({faqData}) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="sjcontainer py-12 md:py-16">
       
        <div className="grid gap-x-10 lg:grid-cols-[55%,40%] items-center">

    <div className="  mx-auto md:p-6">
      {/* Header Section */}

      <div className="mb-8 text-center">
        {/* <div className="mb-4 bg-orange-100 text-themeOrange hover:bg-orange-100 inline-flex items-center px-6 text-sm font-[500] py-1.5 rounded-3xl">
          <Flame className="w-4 h-4 mr-1 text-themeOrange" />
          FAQs
        </div> */}
        <Heading  title="FAQ's" className="text-center !font-[500] mb-2" />
      </div>

      <div className="relative lg:hidden mb-8 mt-10">

   
        <Image src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-6685.jpg?t=st=1734070317~exp=1734073917~hmac=88738e2e48faa98519a5e9939aa4de7b964a3a4b90aa84b9dfeac1742f348077&w=996"
      className="w-full rounded-2xl overflow-hidden" className="w-full rounded-2xl overflow-hidden" width={800}  height={800} alt="s" />
   
</div>

      {/* Accordion Section */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>

     


    </div>
    <div className="relative  h-full max-lg:hidden">
  <div className=" sticky  mt-20 !top-40">
    <Image
      src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-6685.jpg?t=st=1734070317~exp=1734073917~hmac=88738e2e48faa98519a5e9939aa4de7b964a3a4b90aa84b9dfeac1742f348077&w=996"
      className="w-full rounded-2xl overflow-hidden"
      width={800}
      height={800}
      alt="FAQs Illustration"
    />
  </div>
</div>

    </div>
    {/* <div className="flex items-center justify-center w-full mt-6">
          <Link href={"/faqs"}>
            <p className="py-2.5 hover:shadow-md text-sm md:text-base flex items-center  hover:opacity-90 px-6 bg-gradient-to-r from-themeOrange to-themeOrangeLight gap-1 lg:gap-2  text-white rounded-sm">
              Browse More FAQ's
              <MoveRight
                size={18}
                className="mt-1"
                strokeWidth={1}
                color="#fff"
              />
            </p>
          </Link>
        </div> */}
    </div>

  );
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border  rounded-lg  ">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-sm md:text-base text-gray-900">{question}</span>
        <MdDoubleArrow
          className={`w-5 h-5 min-w-5 text-themeOrange transition-transform duration-200 ${
            isOpen ? "transform rotate-90" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0
        }}
      >
        <div className="px-6 pb-4 text-sm text-gray-600">{answer}</div>
      </div>
    </div>
  );
}
