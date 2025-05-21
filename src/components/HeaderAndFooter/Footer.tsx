
import { ftwzData } from "@/app/layout";
import {
  ArrowRight,
  MailIcon,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import React from "react";


const servicesfooterdata = [
  {
    id: 1,
    name: "BML Marketing",
    url: "bml-marketing",
  },
  {
    id: 133,
    name: "BML FTWZ",
    url: "ftwz-services",
  },
  {
    id: 2,
    name: "BML Finance",
    url: "bml-finance",
  },
  {
    id: 3,
    name: "BML Freight",
    url: "bml-freight",
  },
  {
    id: 4,
    name: "BML Insurance",
    url: "bml-insurance",
  },
  {
    id: 5,
    name: "BML Trucking",
    url: "bml-trucking",
  },
  {
    id: 6,
    name: "BML VAS",
    url: "bml-vas",
  },
  {
    id: 7,
    name: "BML Customs",
    url: "bml-customs",
  }
];

export const footerftwzData = [
  {
    id: 1, logo: "/headericons/indianimporters.svg",

    name: "Indian Importers",
    url: "ftwz-for-indian-importers",
  },
  {
    id: 2, logo: "/headericons/foreigncompanies.svg",

    name: "Foreign Exporters",
    url: "ftwz-for-foreign-exporters",
  },
  {
    id: 3, logo: "/headericons/indianexporters.svg",

    name: "Indian Exporters",
    url: "ftwz-for-indian-exporters",
  },

  {
    id: 4, logo: "/headericons/indianecommerce.svg",

    name: "E-commerce Companies",
    url: "ftwz-for-ecommerce-companies",
  },
  {
    id: 5, logo: "/headericons/foreignecommerce.svg",

    name: "Consolidation",
    url: "ftwz-for-consolidation",
  },

  {
    id: 6, logo: "/headericons/reexport.svg",

    // name: "FTWZ For Re-export Purpose / Merchant Trading",
    name: "Re-export Purpose ",
    url: "ftwz-for-re-export-purpose",
  },


];


const Footer = async () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className={` overflow-x-hidden `}>
      <div className=" border-t mt-10  py-10 container px-4 mx-auto ">


        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[30%,70%]">
            <div className="">
              <img
                src="/bml.png"
                className="mr-5 w-[150px] "
                alt="Footer Logo"
              />
              {/* <h2 className="font-bol text-xl">BML</h2> */}
              <p className="mt-2 text-sm xl:text-sm text-gray-800 ">
              BML is a tech enabled platform aiming to transform SME’s into large business with it’s end to end supply chain solutions
              </p>

            </div>
            <div className="grid grid-cols-1 gap-5   sm:grid-cols-2  lg:grid-cols-4">
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-lg md:text-xl">Quick Links</p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="flex text-gray-800 flex-col mt-4 space-y-2 text-sm xl:text-sm">
                  <Link className=" flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200" href={"/"}>
                    <ArrowRight size={16} /><span className="hover:text-amber-600">Home</span>
                  </Link>
                  {/* <Link className=" flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200" href={"/a"}>
                    <ArrowRight size={16} /><span className="hover:text-amber-600">About Us</span>
                  </Link> */}
                  <Link className=" flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200" href={"/knowledge-center"}>
                    <ArrowRight size={16} /><span className="hover:text-amber-600">Knowledge Center</span>
                  </Link>


                  <Link className="flex items-center hover:text-amber-600 gap-1 hover:ml-1 duration-200" href={"/contact-us"}>
                    <ArrowRight className="" size={16} /><span className="hover:text-amber-600">Contact Us </span>
                  </Link>

                 
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-lg md:text-xl">BML Services</p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="flex flex-col mt-4 space-y-2  text-sm xl:text-sm">
                  {
                    servicesfooterdata?.map((data) => {
                      return (
                        <Link className="hover:text-amber-600 text-gray-800" href={`/services/${data?.url}`}>
                          {data?.name}
                        </Link>
                      )
                    })
                  }

                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-lg text-amber-500 md:text-xl">BML FTWZ Services</p>
                <div className="w-20 h-0.5 bg-amber-500 text-gray-800 rounded-full"></div>
                <div className="flex flex-col mt-4 space-y-2 text-sm xl:text-sm">
                  {
                    footerftwzData?.map((data) => {
                      return (
                        <Link className="hover:text-amber-600 text-gray-800" href={`/ftwz-services/${data?.url}`}>
                          {data?.name}
                        </Link>
                      )
                    })
                  }

                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-amber-500 text-xl">Contact Info</p>
                <div className="w-20 h-0.5 bg-amber-500 rounded-full"></div>
                <div className="space-y-3 text-gray-800 mt-4 text-[12px] xl:text-[14px]">
                  <div className="flex  items-center space-x-2">
                    <div>
                      <MapPin size={20} color="#000" className="min-w-5" />
                    </div>
                    <h2>
                     
                      Plot No D-9/10 ,Duvvada, Vishakhapatnam, Andhra Pradesh-530049
                    </h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneCall size={20} color="#000" />
                    <a href="tel:+917901790164">+7901790164</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneCall size={20} color="#000" />
                    <a href="tel:919631963163">9631963163</a>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MailIcon size={20} className="min-w-[20px]" color="#000" />
                    <a href="mailto:Info@bookmylogistic.com">
                    Info@bookmylogistic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="mt- text-sm xl:text-sm md:text-center">
            © {currentYear} All Rights Reserved{" "}
            <a href="/" className="text-amber-500" target="_blank">
              BML
            </a>{" "}


          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
