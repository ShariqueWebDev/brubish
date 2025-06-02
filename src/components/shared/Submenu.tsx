import Link from "next/link";
import React from "react";

const Submenu = ({ sections }) => {
  return (
    <div className="sticky md:top-[15vh] top-[11vh] border  border-gray-300 my-10 py-4 z-40 mx-auto  bg-white rounded-lg w-[95vw] sm:w-[80vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-wrap gap-x-5 gap-y-3 px-3 items-center justify-around text-xs md:text-base">
        {sections?.map((section) => (
          <Link
            key={section.id}
            href={`${section.url}`}
            className="text-black group hover:text-amber-500 transition-colors duration-200 ease-in-out"
          >
            {section.name}
            <span
              className={`absolute bottom-0 left-1/2 h-[2px]  bg-amber-300 transition-all ease-in-out duration-500 transform -translate-x-1/2  w-0 group-hover:w-full
                    `}
            ></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
