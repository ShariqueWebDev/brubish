import Heading from '@/components/shared/Heading';
import Subheading from '@/components/shared/Subheading';
import { ArrowRight } from 'lucide-react';
import React from 'react'


const ftwzServicesData = [
  "Any goods entering FTWZ from DTA are treated as deemed export providing immediate export benefits",
  "GST exemption is offered on all activities being performed inside the FTWZ",
  "Quality check before physical shipment from India incurs reduced reverse logistics and gives peace of mind to buyers and sellers as entire transaction happens under one roof in an integrated manner",
  "Lowering ‘back to town’ costs with better aggregation and consolidation",
  "Proper aggregation of cargo with other FTWZ users for cost optimization through last mile distribution",
  "VAS can be provided like sorting, labeling, packing, kitting, bar-coding, palletization and others in a GST exempt manner with regulatory benefits",
  "Brubish FTWZ is available with global class storage yards and facility to store any special cargo with services that are GST exempted",
  "Foreign exchange transaction capability for all the services being rendered",
  "Micro and medium manufacturers and exporters of agro-products can export with peace of mind as QC control and any rejections happen within the territorial boundaries of India",
];

const Two = () => {
  return (
    <div className="sjcontainer my-12 md:my-24">
      <Subheading className="  mb-3" title="Benefits for Indian Exporters" />
      <div className="mt-4">
        <p className="font-[400] text-gray-500 text-base md:text-2xl">
          Some of the accruing tangible advantages for imports through Brubish
          FTWZ into India are listed as below
        </p>
        <ul className=" grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 gap-y-5 md:gap-y-10  my-6">
          {ftwzServicesData.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              className=" text-sm md:text-base  text-gray-700  border  p-2 md:p-4 rounded-lg shadow-lg hover:-translate-y-2 duration-200"
            >
              <p className="text-4xl font-bold text-secondary">{index + 1}.</p>
              <p className=" text-left mt-3 text-sm  md:text-[15px] text-gray-500">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Two
