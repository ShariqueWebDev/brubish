import { ChevronRight } from 'lucide-react'
import React from 'react'

const Parallex = () => {
  return (
    <div className="relative ">
      <div
        className="bg-bottom h-[80vh] md:h-[70vh] text-white  object-cover relative"
        style={{
          backgroundImage: `url("https://images.ctfassets.net/92fo1e671z6m/2sNHVhW9ssB7H6IQE3V6dC/e7ca8a7e7a80f57325ab6795ac4c4d94/EWR_Photo_1.jpg?w=1600&h=894&q=50&fm=webp")`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/50"></div>
        <div className="flex flex-col items-center justify-center relative z-10">
          {/* main content */}

          <div className="flex items-center justify-center h-[80vh] md:h-[70vh] w-full ">
            <div className=" p-4 md:p-10 text-white w-full ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                <h2 className="font-bold text-left  max-md:w-full text-3xl md:text-6xl">
                  How Brubish
                  <br /> Can Help
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2  text-base md:text-lg w-full">
                  <p className="">
                    <span className="font-bold text-xl">1. </span>
                    <br className="max-md:hidden" />
                    Logistics
                    <br />
                    Parks
                  </p>
                  <p>
                    <span className="font-bold text-xl">2. </span>
                    <br className="max-md:hidden" />
                    Industrial
                    <br />
                    Parks
                  </p>
                  <p>
                    <span className="font-bold text-xl">3. </span>
                    <br className="max-md:hidden" />
                    Free
                    <br />
                    Zones
                  </p>
                  <p>
                    <span className="font-bold text-xl">4. </span>
                    <br className="max-md:hidden" />
                    Special Economics
                    <br />
                    Zones
                  </p>
                </div>
              </div>
              <p className="max-w-[1000px] mt-10 md:mt-20  text-sm md:text-lg">
                Brubish is a comprehensive logistics service provider
                specializing in freight forwarding, warehousing, and supply
                chain solutions. With a strong focus on efficiency and
                reliability, we offer customized services tailored to meet
                diverse client needs. Our expertise extends to FTWZ (Free Trade
                and Warehousing Zones) services, ensuring seamless cross-border
                operations. Brubish is committed to delivering excellence in
                global logistics, ensuring your goods are handled with care and
                precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallex
