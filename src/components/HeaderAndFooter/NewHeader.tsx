"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import Image from "next/image";

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }
  }, [mobileMenu]);

  // const [headerClass, setHeaderClass] = useState("sticky top-0");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // setHeaderClass("fixed top-0  shadow-md ");
      } else {
        // setHeaderClass("sticky top-0 ");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`   shadow-[0_3px_10px_rgb(0,0,0,0.2)] sticky top-0 z-50 bg-white `}
    >
      <div className="sjcontainer flex px-5 lg:px-10  h-[13vh] w-full  mx-auto items-center justify-between transition-transform duration-300">
        <Link href={"/"} className=" max-lg:hidden ">
          {/* <div className="text-[#ffb200] text-4xl font-semibold">Brubish</div> */}
          <div className="w-14">
            <Image
              src={"/logo/logo2.png"}
              className="w-full h-full bg-cover bg-center"
              width={300}
              height={400}
              alt="Brubish"
            />
          </div>
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          showContactMenu={showContactMenu}
          setShowContactMenu={setShowContactMenu}
          setMobileMenu={setMobileMenu}
          setShowProductsMenu={setShowProductsMenu}
          showProductsMenu={showProductsMenu}
        />

        <>
          {mobileMenu && (
            <div
              className=" max-md:hidden fixed inset-0 bg-black opacity-50 z-10"
              onClick={() => setMobileMenu(false)} // Clicking on overlay closes the menu
            ></div>
          )}

          <div
            className={`fixed top-0 z-30 right-0 h-full w-full md:w-[400px] bg-white shadow-lg transition-transform duration-300 ease-in-out`}
            style={{
              transform: mobileMenu ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <MenuMobile
              showCatMenu={showCatMenu}
              showContactMenu={showContactMenu}
              setShowCatMenu={setShowCatMenu}
              setShowContactMenu={setShowContactMenu}
              setMobileMenu={setMobileMenu}
              showProductsMenu={showProductsMenu}
              setShowProductsMenu={setShowProductsMenu}
            />
          </div>
        </>

        <div className="flex  lg:hidden  h-[10vh] overflow-hidden  items-center gap-2 justify-between w-full lg:w-auto text-black">
          {/* <div className="hidden lg:flex gap-3 rounded-full justify-center lg:justify-between items-center cursor-pointer relative">
          <SocialIcons />
        </div> */}
          <Link href={"/"} className="block  lg:hidden">
            <div className="w-12">
              <Image
                width={300}
                height={400}
                src="/logo/logo2.png"
                className="w-[150px]"
                alt="Brubish"
                onClick={() => setMobileMenu(false)}
              />
            </div>
          </Link>
          {/* <Link href="/" className='text-gray-500 font-bold text-xl tracking-wider z-30'>BML</Link> */}

          {/* Mobile Icon Start */}
          <div className="w-8 lg:w-12 h-8 lg:h-12 rounded-full flex lg:hidden justify-center items-center cursor-pointer relative -mr-2 z-30">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                color="#FFBA0C"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                color="#FFBA0C"
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
