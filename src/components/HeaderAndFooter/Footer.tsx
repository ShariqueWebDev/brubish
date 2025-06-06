import { ftwzData, productsData } from "@/app/layout";
import { ArrowRight, MailIcon, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const servicesfooterdata = [
  {
    id: 1,
    name: "Brubish Marketing",
    url: "brubish-marketing",
  },
  {
    id: 133,
    name: "Brubish FTWZ",
    url: "ftwz-services",
  },
  {
    id: 2,
    name: "Brubish Finance",
    url: "brubish-finance",
  },
  {
    id: 3,
    name: "Brubish Freight",
    url: "brubish-freight",
  },
  {
    id: 4,
    name: "Brubish Insurance",
    url: "brubish-insurance",
  },
  {
    id: 5,
    name: "Brubish Trucking",
    url: "brubish-trucking",
  },
  {
    id: 6,
    name: "Brubish VAS",
    url: "brubish-vas",
  },
  {
    id: 7,
    name: "Brubish Customs",
    url: "brubish-customs",
  },
];

export const footerftwzData = [
  {
    id: 1,
    logo: "/headericons/indianimporters.svg",

    name: "Indian Importers",
    url: "ftwz-for-indian-importers",
  },
  {
    id: 2,
    logo: "/headericons/foreigncompanies.svg",

    name: "Foreign Exporters",
    url: "ftwz-for-foreign-exporters",
  },
  {
    id: 3,
    logo: "/headericons/indianexporters.svg",

    name: "Indian Exporters",
    url: "ftwz-for-indian-exporters",
  },

  {
    id: 4,
    logo: "/headericons/indianecommerce.svg",

    name: "E-commerce Companies",
    url: "ftwz-for-ecommerce-companies",
  },
  {
    id: 5,
    logo: "/headericons/foreignecommerce.svg",

    name: "Consolidation",
    url: "ftwz-for-consolidation",
  },

  {
    id: 6,
    logo: "/headericons/reexport.svg",

    // name: "FTWZ For Re-export Purpose / Merchant Trading",
    name: "Re-export Purpose ",
    url: "ftwz-for-re-export-purpose",
  },
];

const Footer = async () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={` overflow-x-hidden  `}>
      <div className=" border-t mt-10  pt-10 pb-5 container px-4 mx-auto ">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[20%,80%]">
            <div className="">
              <img
                src="/logo/logo1.png"
                className="mr-5 w-[200px] mb-3 -ml-2 "
                alt="Footer Logo"
              />
              <p className="mt-2 text-sm  text-gray-800 ">
                Brubish is a tech enabled platform aiming to transform SME’s
                into large business with it’s end to end supply chain solutions
              </p>
              <div className=" mt-3 bg-primary rounded-md p-3">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Ship Server ID : TN-316609
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Procure PS ID : 15743
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5   sm:grid-cols-2  lg:grid-cols-5">
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-lg ">Quick Links</p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="flex text-gray-800 flex-col mt-4 space-y-2 text-sm xl:text-sm">
                  <Link
                    className=" flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200"
                    href={"/"}
                  >
                    <ArrowRight size={16} />
                    <span className="hover:text-amber-600">Home</span>
                  </Link>
                  {/* <Link className=" flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200" href={"/a"}>
                    <ArrowRight size={16} /><span className="hover:text-amber-600">About Us</span>
                  </Link> */}

                  <Link
                    className="flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200"
                    href={"/contact-us"}
                  >
                    <ArrowRight className="" size={16} />
                    <span className="hover:text-amber-600">Contact Us </span>
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-lg ">
                  Brubish Services
                </p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="flex flex-col mt-4 space-y-2  text-sm ">
                  {servicesfooterdata?.map((data) => {
                    return (
                      <Link
                        className="hover:text-amber-600 text-gray-800"
                        href={`/services/${data?.url}`}
                      >
                        {data?.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-lg ">
                  Brubish Products
                </p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="flex flex-col mt-4 space-y-2  text-sm xl:text-sm">
                  {productsData?.map((data) => {
                    return (
                      <Link
                        className="hover:text-amber-600 text-gray-800"
                        href={`/products/${data?.url}`}
                      >
                        {data?.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-lg text-amber-500 ">
                  Brubish FTWZ Services
                </p>
                <div className="w-20 h-0.5 bg-amber-500 text-gray-800 rounded-full"></div>
                <div className="flex flex-col mt-4 space-y-2 text-sm xl:text-sm">
                  {footerftwzData?.map((data) => {
                    return (
                      <Link
                        className="hover:text-amber-600 text-gray-800"
                        href={`/ftwz-services/${data?.url}`}
                      >
                        {data?.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-lg">Contact Info</p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="space-y-3 text-gray-800 mt-4 text-[14px] xl:text-[14px]">
                  <div className="flex  items-center space-x-2">
                    <div>
                      <MapPin size={17} color="#000" className="min-w-5" />
                    </div>
                    <h2>
                      Plot No D-9/10 ,Duvvada, Vishakhapatnam, Andhra
                      Pradesh-530049
                    </h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneCall size={17} color="#000" />
                    <a href="tel:+917901790164">+917901790164</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneCall size={17} color="#000" />
                    <a href="tel:+919631963163">+919631963163</a>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MailIcon size={17} className="min-w-[20px]" color="#000" />
                    <a href="mailto:sales@brubish.com">sales@brubish.com</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MailIcon size={17} className="min-w-[20px]" color="#000" />
                    <a href="mailto:spares@brubish.com">spares@brubish.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="mt- text-sm xl:text-sm text-center">
            © {currentYear} All Rights Reserved{" "}
            <a href="/" className="text-amber-500" target="_blank">
              Brubish
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
