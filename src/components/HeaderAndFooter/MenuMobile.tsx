import { ftwzData, productsData, servicesData } from "@/app/layout";
import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  // { id: 8, name: "Home", url: "/" },
  { id: 2, name: "About Us", url: "/" },
  { id: 1, name: "Services", subMenu: true },
  { id: 3, name: "FTWZ Services", ftwz: true },
  { id: 3, name: "Products", productsMenu: true },
  { id: 5, name: "Knowledge Center", url: "/knowledge-center" },
  { id: 6, name: "Contact Us", url: "/contact-us" },
];

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  contactData,
  setShowContactMenu,
  showContactMenu,
  showProductsMenu,
  setShowProductsMenu,
}) => {
  const handleCatMenuToggle = () => {
    setShowCatMenu((prev: any) => {
      if (!prev) {
        setShowContactMenu(false);
        setShowProductsMenu(false);
      } // Close Contact Menu if opening Cat Menu
      return !prev;
    });
  };

  const handleContactMenuToggle = () => {
    setShowContactMenu((prev: any) => {
      if (!prev) {
        setShowCatMenu(false);
        setShowProductsMenu(false);
      } // Close Cat Menu if opening Contact Menu
      return !prev;
    });
  };
  const handleProductsMenuToggle = () => {
    setShowProductsMenu((prev: any) => {
      if (!prev) {
        setShowCatMenu(false);
        setShowContactMenu(false);
      } // Close Cat Menu if opening Contact Menu
      return !prev;
    });
  };

  return (
    <>
      <ul className="flex flex-col lg:hidden font-normal text-base absolute top-[8svh] h-[100vh] left-0 w-full bg-white border-t text-black z-50">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={handleCatMenuToggle}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="-mx-5 mt-4 -mb-4 max-h-[50vh] overflow-y-scroll">
                    {servicesData?.map((category, index) => (
                      <Link
                        key={index}
                        href={`/services${category.url}`}
                        onClick={() => {
                          setShowCatMenu(false);
                          setMobileMenu(false); // Close the mobile menu on click
                        }}
                      >
                        <li className="py-1.5 text-amber-500  font-bold flex justify-between items-center px-10 hover:bg-gray-50 border-b border-white rounded-md transition-all ease-in-out text-sm my-1">
                          {category?.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : item?.ftwz ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={handleContactMenuToggle}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showContactMenu && (
                  <ul className="-mx-5 mt-4 -mb-4 max-h-[40vh] overflow-y-scroll">
                    {ftwzData?.map((category, index) => (
                      <Link
                        key={index}
                        href={`/ftwz-services/${category.url}`}
                        onClick={() => {
                          setShowContactMenu(false);
                          setMobileMenu(false); // Close the mobile menu on click
                        }}
                      >
                        <li className="py-1.5 text-amber-500  font-bold flex justify-between items-center px-10 hover:bg-gray-50 border-b border-white rounded-md transition-all ease-in-out text-sm my-1">
                          {category?.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : item?.productsMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={handleProductsMenuToggle}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showProductsMenu && (
                  <ul className="-mx-5 mt-4 -mb-4 max-h-[40vh] overflow-y-scroll">
                    {productsData?.map((proItem, index) => (
                      <Link
                        key={index}
                        href={`/products/${proItem?.url}`}
                        onClick={() => {
                          setShowProductsMenu(false);
                          setMobileMenu(false); // Close the mobile menu on click
                        }}
                      >
                        <li className="py-1.5 text-amber-500  font-bold flex justify-between items-center px-10 hover:bg-gray-50 border-b border-white rounded-md transition-all ease-in-out text-sm my-1">
                          {proItem?.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default MenuMobile;
