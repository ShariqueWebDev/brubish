"use client";
import { ftwzData, productsData, servicesData } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "About Us",
    url: "/",
  },
  // {
  //   id: 2,
  //   name: "About Us",
  //   url: "/about-us",
  // },
  {
    id: 2,
    name: "Brubish Services",
    subMenu: true,
  },

  {
    id: 3,
    name: "FTWZ Services",
    ftwz: true,
  },
  {
    id: 3,
    name: "Products",
    productsMenu: true,
  },

  {
    id: 5,
    name: "Contact Us",
    url: "/contact-us",
  },
];

const Menu = ({
  showCatMenu,
  setShowCatMenu,
  setShowContactMenu,
  showContactMenu,
  showProductsMenu,
  setShowProductsMenu,
}) => {
  const path = usePathname();

  return (
    <>
      <div className="hidden lg:flex items-center gap-8 ">
        {data.map((item: any) => {
          const isActive = path === item.url;

          return (
            <div key={item.id} className="">
              {item?.subMenu ? (
                <div
                  className={`cursor-pointer text-[15px] font-[400] flex items-center hover:text-gray-900 group gap-2 relative`}
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                  onClick={() => setShowCatMenu(false)}
                >
                  <span>{item.name}</span>
                  <BsChevronDown
                    strokeWidth={1}
                    size={14}
                    className="transition-all ease-in-out duration-500 group-hover:-rotate-180"
                  />

                  <div
                    className={`absolute top-5 transform -left-[106px] min-w-[280px] px-1 py-1`}
                    style={{
                      transform: showCatMenu
                        ? "translateY(0)"
                        : "translateY(5px)",
                      scale: showCatMenu ? 1 : 0,
                      opacity: showCatMenu ? 1 : 0,
                      transition:
                        "transform 0.2s ease-in-out , opacity 0.4s ease-in-out", // Separate transition for opacity with delay
                    }}
                  >
                    <div className="relative">
                      {/* Arrow */}
                      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-amber-500"></div>

                      <div className="bg-white rounded-lg pb-2 mt-4 transition-all ease-in-out text-gray-800 tracking-wide  w-full shadow-lg border border-t-2 border-amber-500">
                        {servicesData?.map((subItem, index) => (
                          <Link
                            key={index}
                            href={`/services${subItem?.url}`}
                            onClick={() => setShowCatMenu(false)}
                          >
                            <div
                              className={`h-10 flex justify-start gap-x-2 py-2 hover:px-6 items-center text-sm px-4 hover:text-amber-600  rounded-md transition-all ease-in-out`}
                            >
                              <Image
                                src={subItem.logo}
                                alt="header icon"
                                width={25}
                                height={25}
                              />
                              <span>{subItem?.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item?.ftwz ? (
                <div
                  className={`cursor-pointer text-[15px] flex items-center font-[400] hover:text-gray-900 group gap-2 relative`}
                  onMouseEnter={() => setShowContactMenu(true)}
                  onMouseLeave={() => setShowContactMenu(false)}
                  onClick={() => setShowContactMenu(false)}
                >
                  <span>{item.name}</span>
                  <BsChevronDown
                    strokeWidth={1}
                    size={14}
                    className="transition-all  ease-in-out duration-500 group-hover:-rotate-180"
                  />

                  <div
                    className={`absolute top-5 transform -left-[206px] min-w-[550px] px-1 py-1`}
                    style={{
                      transform: showContactMenu
                        ? "translateY(0)"
                        : "translateY(5px)",
                      scale: showContactMenu ? 1 : 0,
                      opacity: showContactMenu ? 1 : 0,
                      transition:
                        "transform 0.2s ease-in-out , opacity 0.4s ease-in-out", // Separate transition for opacity with delay
                    }}
                  >
                    <div className="relative">
                      {/* Arrow */}
                      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-amber-500"></div>

                      <div className="bg-white rounded-lg pb-2 mt-4 transition-all ease-in-out text-gray-700 w-full shadow-lg border border-t-2 border-amber-500">
                        {ftwzData?.map((contactItem, index) => (
                          <Link
                            key={index}
                            href={`/ftwz-services/${contactItem?.url}`}
                            onClick={() => setShowContactMenu(false)}
                          >
                            <div
                              className={`h-10 flex justify-start font-[400] hover:px-6 my-2 gap-x-2 items-center text-sm px-4 hover:text-amber-600 rounded-md transition-all ease-in-out`}
                            >
                              <Image
                                src={contactItem?.logo}
                                alt="header icon"
                                width={25}
                                height={25}
                              />
                              <span>{contactItem?.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item?.productsMenu ? (
                <>
                  {item?.productsMenu && (
                    <div
                      className={`cursor-pointer text-[15px] font-[400] flex items-center hover:text-gray-900 group gap-2 relative`}
                      onMouseEnter={() => setShowProductsMenu(true)}
                      onMouseLeave={() => setShowProductsMenu(false)}
                      onClick={() => setShowProductsMenu(false)}
                    >
                      <span>{item.name}</span>
                      <BsChevronDown
                        strokeWidth={1}
                        size={14}
                        className="transition-all ease-in-out duration-500 group-hover:-rotate-180"
                      />

                      <div
                        className={`absolute top-5 transform -left-[106px] min-w-[280px] px-1 py-1`}
                        style={{
                          transform: showProductsMenu
                            ? "translateY(0)"
                            : "translateY(5px)",
                          scale: showProductsMenu ? 1 : 0,
                          opacity: showProductsMenu ? 1 : 0,
                          transition:
                            "transform 0.2s ease-in-out , opacity 0.4s ease-in-out", // Separate transition for opacity with delay
                        }}
                      >
                        <div className="relative">
                          {/* Arrow */}
                          <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-amber-500"></div>

                          <div className="bg-white rounded-lg pb-2 mt-4 transition-all ease-in-out text-gray-800 tracking-wide  w-full shadow-lg border border-t-2 border-amber-500">
                            {productsData?.map((proItem, index) => {
                              return (
                                <Link
                                  key={proItem?.id}
                                  href={`/products/${proItem?.url}`}
                                  onClick={() => setShowProductsMenu(false)}
                                >
                                  <div
                                    className={`h-10 flex justify-start gap-x-2 py-2 hover:px-6 items-center text-sm px-4 hover:text-amber-600  rounded-md transition-all ease-in-out`}
                                  >
                                    <Image
                                      src={proItem.logo}
                                      alt="header icon"
                                      width={25}
                                      height={25}
                                    />
                                    <span>{proItem?.name}</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div
                  className={`relative ${
                    item.name === "About Us" && "-mb-1"
                  } cursor-pointer font-[400] text-[15px] transition-all ease-in-out border-b-1 ${
                    isActive
                      ? "text-amber-600 border-white"
                      : "border-transparent hover:text-amber-600 group"
                  } pb-1`}
                  onClick={(e) => {
                    if (item?.name === "About Us") {
                      e.preventDefault(); // Prevent link navigation
                      window.scrollTo({
                        top: window.innerHeight * 0.9,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <Link href={item?.url}>{item.name}</Link>
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] bg-amber-600 transition-all ease-in-out duration-500 transform -translate-x-1/2 ${
                      isActive
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
