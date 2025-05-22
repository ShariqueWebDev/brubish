import Heading from "@/components/shared/Heading";
import Image from "next/image";
import React from "react";

const Four = () => {
  return (
    <div className="sjcontainer text-sm py-8 md:py-20">
      <Heading
        className=" mb-4 md:mb-6 text-center"
        title={`Buyer's Consolidation - PICK & PACK`}
      />
      <div className=" max-lg:space-y-4 lg:space-y-10">
        <section className="border border-amber-300 p-[3px] ">
          <div className="border md:flex border-amber-400  ">
            <div className=" border-amber-400">
              <Image
                src="/ftwz/consolidation/35.png"
                alt="consolidation"
                width={1000}
                height={1000}
                className="  !object-contain"
              />
            </div>
            <div className="border-l border-amber-400">
              <h3 className="border-b max-md:border-t  border-amber-200  text-lg text-amber-500 font-bold  px-4 py-3">
                CURRENT MODEL & CHALLENGES
              </h3>
              <div className="space-y-4 p-4 text-gray-600">
                <p>
                  {" "}
                  Individual shipment processing at each stage at origin and
                  multiple handling of shipments including paperwork
                </p>
                <p>
                  Drawback/export incentives claimed when the goods physically
                  leave India
                </p>
                <p>
                  No platform for multi-vendor consolidation including last mile
                  customization & VAS - kitting, labelling, packing, looping,
                  tagging etc.
                </p>
                <p>
                  Lack of visibility on the logistics chain and multiple
                  shipments to be tracked and followed
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" relative">
          <div className="sticky top-32 border  border-amber-400">
            <div className="border border-amber-400 m-[3px]  h-full">
              <h3 className="border-b  border-amber-200  text-lg text-amber-500 font-bold  px-4 py-3">
                BUYER CONSOLIDATION
              </h3>
              <div className="space-y-4 p-4 text-gray-600">
                <p>
                  Overseas Buyer making FTWZ as a consolidation Centre for Pick
                  and pack Operations
                </p>
                <p>
                  All Value add pertain to Country of Destination like Labelling
                  / Packing – Store Wise / DC wise can happen at FTWZ
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border border-amber-400  p-[3px]">
          <div className="border border-amber-400  h-full">
            <h3 className="border-b border-amber-200  px-4 py-3 text-lg text-amber-500 font-bold ">
              PROPOSED MODEL - FTWZ
            </h3>
            <div className="space-y-4 p-4 text-gray-600">
              <p>
                Domestic Suppliers can export the goods to Overseas Buyer in
                Brubish FTWZ
              </p>
              <p>
                One-stop-shop from receipt of cargo, inbound customs
                filling/processing/ documentation/visibility and tracking
                (*Drawback to be filed at the respective Customs Jurisdiction by
                the Domestic Supplier with the Disclaimer Certificate Given by
                FTWZ )
              </p>
              <p>
                Multi-vendor consolidation at SKU/Shipment level done in FTZ
                including VAS – MRP, Packaging, Repackaging, Looping and Tagging
              </p>
              <p>
                Instructions & Documentation from Overseas Buyer to ship cargo
                out of India
              </p>
              <p>
                Indian Retailers/Distributors can also import from FTWZ into
                India on Payment of Duty - thereby eliminating the forward and
                reverse logistic costs of distribution
              </p>
              <p>
                Filling of Free Shipping Bill by FTWZ Unit acting as Exporter on
                Record, Placing and Stuffing Containers and Direct movement to
                port – better matching of cut-off and sailings , any COO or
                compliance documents can be adhered
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Four;
