import Image from "next/image";
import Link from "next/link";
import React from "react";

interface reverseDataProps {
  title: string;
  img: string;
  desc: string;
  viewtxt: string;
  viewmoreredirect: string;
}

const BinfinitMainDivComp: React.FC<reverseDataProps> = ({
  title,
  desc,
  img,
  viewtxt,
  viewmoreredirect,
}) => {
  return (
    <div className="w-full h-auto md:h-[60vh] rounded-lg overflow-hidden   flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-[58.33%] w-full overflow-hidden h-full md:h-full group">
        <Image
          src={img || "/marketing/what-we-do-energy.webp"}
          width={1200}
          height={1000}
          alt="mineral"
          className="md:object-cover object-cover border object-center w-full h-full transition-transform duration-500 ease-out transform origin-center group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#f4f5f6] md:w-[41.66%] w-full flex justify-center items-start md:px-20 px-8 py-6 md:py-0 flex-col">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
            {title || "Marketing"}
          </h3>

          <p className="text-sm md:text-sm text-black/[0.8] mb-4">
            {desc ||
              "We are one of leading marketers of physical commodities. See how we serve the needs of our customers all over the world."}
          </p>

          {/* <div className="flex gap-2 items-center justify-start group">
            <button className="bg-none text-black text-sm md:text-base font-medium">
              {viewtxt || "View More"}
            </button>
            <Link href={viewmoreredirect}>
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-10 md:h-10 transition-all"
              >
                <g
                  className="transition-transform transform origin-center group-hover:translate-x-0.5"
                  stroke="black"
                  fill="black"
                >
                  <path
                    d="M28 20H14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M25 23L28 20L25 17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>

                <path
                  d="M7 6.56497C14.3204 -0.854991 26.1892 -0.854991 33.5097 6.56497C40.8301 13.9849 40.8301 26.0151 33.5097 33.435C26.1892 40.855 14.3204 40.855 7 33.435"
                  stroke="black"
                  fill="none"
                  className="opacity-0 transition-opacity group-hover:opacity-100 stroke-current"
                  strokeWidth="2"
                ></path>
              </svg>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BinfinitMainDivComp;
