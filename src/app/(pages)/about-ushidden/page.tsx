import Aboutfaq from "@/components/aboutus/Aboutfaq";
import Aboutgoals from "@/components/aboutus/Aboutgoals";
import Aboutsection2 from "@/components/aboutus/Aboutsection2";
import Aboutsection4 from "@/components/aboutus/Aboutsection4";
import Servicesweprovide from "@/components/aboutus/Servicesweprovide";
import Bannerfull2 from "@/components/shared/Bannerfull2";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <Bannerfull2 title="About Us" bgImg="/about/about.webp" page="About Us" />
      <Aboutsection2 />
      <Aboutgoals />
      <Aboutsection4 />
      <Servicesweprovide />
      <Aboutfaq />
    </div>
  );
};

export default Page;
