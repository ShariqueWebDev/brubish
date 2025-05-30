import Image from "next/image";
import React from "react";

interface WhyChooseCardProps {
  icon: string;
  title: string;
  description: string;
  iconColor?: string;
  iconSize?: number;
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  title,
  description,
  iconColor = "#000",
  iconSize = 70,
}) => {
  return (
    <div className=" mb-5 ">
      <div
        className="flex gap-3 items-center !w-full py-1"
        style={{
          width: iconSize,
          height: iconSize,
        }}
      >
        {/* <Icon size={40} color={"#ffb200 "} /> */}
        <div className=" w-12 h-12">
          <Image src={icon} width={100} height={100} alt="" />
        </div>
        <h4 className="text-2xl font-semibold">{title}</h4>
      </div>
      <hr className="mb-5 mt-1" />
      <div>
        <h6 className="md:text-sm text-xs !leading-6 tracking-wide text-gray-600 line-clamp-">
          {description}
        </h6>
      </div>
    </div>
  );
};

export default WhyChooseCard;
