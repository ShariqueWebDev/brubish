import React from "react";
import Subheading from "../shared/Subheading";

const data = [
  {
    column1: "Brubish FTWZ",
    column2: "Brubish Free Trade Warehouse",
    column3: "Custom Bonded Warehouse",
    column4: "Domestic Tariff Area",
  },
  {
    column1: "Port Status",
    column2: "SEZ Act Sec 53(2). FTWZ is a Deemed Port",
    column3: "No Deemed Port status.",
    column4: "No Deemed Port status.",
  },
  {
    column1: "NFE",
    column2: "FTWZ Units are required to be NFE positive under SEZ Rule 53",
    column3: "No NFE requirement by Bonded Warehouses.",
    column4: "No NFE requirement for DTA.",
  },
  {
    column1: "Assessment of Duty",
    column2:
      "Since the FTWZ is a Deemed Port the goods are NOT assessed for Duty. A Bill of Entry for home consumption is filed with FTWZ Unit for transfer of goods from Airport/Seaport to FTWZ.",
    column3:
      "Bill of Entry for Warehousing is filed and assessed for Duty before being permitted to move to the Bonded Warehouses.",
    column4: "Goods assessed and duty levied immediately upon import.",
  },
  {
    column1: "Multi-Country Consolidation",
    column2:
      "Consolidation of goods from Multi-Country permitted as per customer’s requirement.",
    column3: "Consolidation of goods not Permitted.",
    column4: "Consolidation not permitted for DTA.",
  },
  {
    column1: "Duty Deferment Bond",
    column2: "No requirement for a double duty bond",
    column3: "Additional double duty bond required.",
    column4: "No duty deferment bond required.",
  },
  {
    column1: "Movement from Customs Gateway",
    column2:
      "Goods are transported from customs gateway to Brubish FTWZ via transshipment procedure without assessment by Customs in turn decreasing Customs process lead time.",
    column3:
      "Movement of goods into the bonded warehouse are subject to assessment at Gateway Customs.",
    column4: "Standard customs assessment at entry.",
  },
  {
    column1: "Value Added Services (VAS)",
    column2:
      "Can carry out Value Added Services as provided for SEZ Rule 18 (5)",
    column3:
      "Value Added Services are permitted, subject to Customs permission in advance of any such activities.",
    column4: "Value Added Services permitted with fewer restrictions.",
  },
  {
    column1: "Holding Goods on Account of Foreign Supplier / Buyer",
    column2: "Permitted under SEZ Rule 18 (5)",
    column3: "Not permitted.",
    column4: "Not permitted in DTA.",
  },
  {
    column1: "Restricted Goods Imports",
    column2: "Permissible to enter the FTWZ.",
    column3:
      "Goods can enter Bonded Warehouse pending Production of import license.",
    column4: "Restricted goods can enter subject to import licenses.",
  },
  {
    column1: "Prohibited Goods Imports",
    column2: "Permissible to enter the FTWZ with the Approval of the BOA",
    column3: "Not Permissible.",
    column4: "Prohibited goods not permitted.",
  },
  {
    column1: "Period of Storage",
    column2:
      "SEZ Rule 37 permits the goods to be kept until the Validity of the Unit Holder. The goods in the FTWZ are not assessed for Duty.",
    column3:
      "One Year, further extension allowed subject to approval from Chief Commissioner of Customs.",
    column4: "No specific limit; goods are domestically available.",
  },
  {
    column1: "Interest on Duty",
    column2: "Interest on Duty not applicable",
    column3: "Beyond 90 Days, interest is levied.",
    column4: "No interest as duty is assessed immediately.",
  },
  {
    column1: "Exemption from SAD",
    column2: "Exemption of 4% SAD against CST or GST applicable",
    column3:
      "SAD benefit applicable as per Customs notifications for pre-packed goods only.",
    column4: "Standard domestic tax rates apply.",
  },
  {
    column1: "Customs Set Up",
    column2: "Dedicated customs setup available within the FTWZ 24x7x365",
    column3:
      "Dedicated customs setup could be done subject to approval from Customs office.",
    column4: "Standard customs setup applies.",
  },
  {
    column1: "Customs procedure for Removal of Goods",
    column2:
      "Hassle-Free procedure for removal of goods from FTWZ to DTA. Customs processing done within the FTWZ zone.",
    column3:
      "All customs processing with the customs house located away from the bonded facility.",
    column4: "Standard removal procedures.",
  },
  {
    column1: "Compliance of Allied Acts",
    column2:
      "Payment of duty and compliance of allied acts, only when the goods move out of FTWZ into DTA",
    column3:
      "Payment of duty at the time of removal of goods along with applicable interest & upon production of applicable import license.",
    column4: "Compliance with allied acts required at entry.",
  },
  {
    column1: "Ease of EXIM Trade",
    column2:
      "Hassle-Free Procedure for re-exports and re-import unlike standard customs procedure.",
    column3:
      "Re-imports and re-exports go through standard customs approval procedures.",
    column4: "Standard import/export procedures.",
  },
  {
    column1: "Regional Trade Hubs",
    column2:
      "Possibility of using this facility as a regional hub. Permits operations of VMI model with Foreign Currency models.",
    column3:
      "Cannot be used as a regional hub since no facilities are available for export of goods and only INR transactions are permitted within a bonded warehouse.",
    column4: "Cannot serve as a regional hub; only for local trade.",
  },
  {
    column1: "Foreign Exchange",
    column2: "All Payments in Free Foreign Exchange",
    column3: "All payments in INR only.",
    column4: "All payments in INR only.",
  },
  {
    column1: "Requirement of Bank Guarantee & Double-Duty Bond",
    column2: "No Bank Guarantee requirement",
    column3:
      "Custom Bonded Warehouse Bank guarantee required for every shipment; Bond to be executed for 2x customs duty ",
    column4: "Bank guarantee required for every Shipment",
  },
  {
    column1: "Requirement of double insurance",
    column2: "Client and warehouse both don't need insurance",
    column3: "Both parties require insurance Payable immediately",
    column4:
      "Customs to be paid immediatelyhence NA Double insurance not applicable",
  },
  {
    column1:
      "GST on Ocean Freight, Inbound Logistics (incl de-bulking and SKU wise stocking)",
    column2: "Deferred until clearance into Domestic Tariff Area",
    column3: "Payable immediately",
    column4: "Payable immediately",
  },
  {
    column1: "Storage period (without customs duty payment)",
    column2: "No Limit",
    column3: "90 days",
    column4: "None",
  },
  {
    column1: "Stamp Duty (0.1% of value including customs)",
    column2: "Exempt",
    column3: "Leveid",
    column4: "Leveid",
  },
  {
    column1: "Manual record keeping for Bonds",
    column2: "Exempt",
    column3:
      "For the Bond executed, manual records must be kept for 8 years, and the cancellation process is tedious",
    column4: "NA",
  },
  {
    column1: "High sea sales risk mitigation",
    column2:
      "Clients can sell the cargo after it lands on the port as it is still considered as foreign territory",
    column3:
      "Clients cannot sell the cargo after it lands on the port as it is still considered as foreign territory",
    column4:
      "Clients cannot sell the cargo after it lands on the port as it is still considered as foreign territory",
  },
  {
    column1: "Ease of change of ownership",
    column2: "Easy change of ownership of cargo from one to another entity ",
    column3: "Such transfer of ownership not possible in a custom bonded WH",
    column4: "NA",
  },
  {
    column1: "Sales to SEZS, EOUS",
    column2:
      "As FTWZ comes under SEZ Act, sales to SEZS, EOUS is easy to execute",
    column3:
      "CRHS come under Ministry of Finand sales to SEZS, EOUS is difficult",
    column4: "under Ministry of Finand sales to SEZS, EOUS is difficult",
  },
];

const Ftwz3 = () => {
  return (
    <div className="my-8  md:my-20 sjcontainer">
      <Subheading
        className="mb-4"
        title="Benefits of Brubish Free Trade Warehousing Zone (FTWZ) Over CBWH or DTA warehouse"
      />

      <div className="overflow-x-auto">
        <div className="grid grid-cols-[19%,27%,27%,27%] min-w-[750px] border-amber-300 border">
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <div className="p-1.5 md:p-3 text-xs border md:text-base lg:text-base border-b bg-amber-200 border-white font-[500]">
                {row.column1}
              </div>
              <div
                className={`p-1.5 md:p-3 text-xs md:text-sm lg:text-base border text-gray-700 border-amber-300 ${
                  index === 0 && "font-[400] bg-amber-200"
                }`}
              >
                {row.column2}
              </div>
              <div
                className={`p-1.5 md:p-3 text-xs md:text-sm lg:text-base border text-gray-700 border-amber-300 ${
                  index === 0 && "font-[400] bg-amber-200"
                }`}
              >
                {row.column3}
              </div>
              <div
                className={`p-1.5 md:p-3 text-xs md:text-sm lg:text-base border text-gray-700 border-amber-300 ${
                  index === 0 && "font-[400] bg-amber-200"
                }`}
              >
                {row.column4}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ftwz3;
