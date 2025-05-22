"use client"
import {
 
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
  PhoneCall,
  Twitter,
} from "lucide-react";
// import { Facebook, Instagram, YouTube, LinkedIn } from 'lucide-react'
import Link from "next/link";
import React, { useState } from "react";


const Announcement = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="hidden md:flex h-[10svh] px-16 items-center justify-between">
      {/* <Link href={"/"} className="flex">
        <img
          src="/mainlogo1.png"
          className="w-[180px] md:w-[280px]"
          alt="brubish"
          onClick={() => setMobileMenu(false)}
        />

      </Link> */}
      <Link href="/" className="text-primary font-bold text-3xl tracking-wider">
        Brubish
      </Link>
      <div className="flex items-center gap-10">
        <div className="flex items-start gap-2">
          <div className=" rounded-full">
            <PhoneCall color="#00008b" size={22} />
          </div>
          <div className="text-primary">
            <p className="text-primary text-base">Phone No.</p>
            <p className="text-primary text-sm font-bold -mt-1">
              {" "}
              <a href="tel:+91123456789">+91 123456789</a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="  rounded-full">
            <Mail color="#00008b" size={22} />
          </div>
          <div className="text-primary">
            <p className="text-primary text-base">Email Address</p>
            <p className="text-primary text-sm font-bold -mt-1">
              <a href="mailto:Info@bookmylogistic.com">
                Info@bookmylogistic.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
