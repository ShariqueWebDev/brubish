import React from "react"
import { AlertTriangle, Check, Anchor, FileText, Shield, FileCheck, Coins, Package, CheckCircle } from 'lucide-react'
import {  Truck, Box, Layers3Icon as LayersThree, Clock } from 'lucide-react'
import Heading from "@/components/shared/Heading"
import Subheading from "@/components/shared/Subheading"



export default function Threeforeignexport() {
  const comparisons = [
    {
      icon: <Anchor className="w-6 h-6" strokeWidth={1} />,
      parameter: "Port Status",
      ftwz: "Deemed Port Status with Port Code (INC JJ6).",
      customBonded: "No Port Status.",
    },
    {
      icon: <FileText className="w-6 h-6" strokeWidth={1} />,
      parameter: "Assessment of Bill",
      ftwz: "Simplified customs clearance under SEZ Act.",
      customBonded: "Lengthy duty assessment process.",
    },
    {
      icon: <Shield className="w-6 h-6" strokeWidth={1} />,
      parameter: "Duty Deferment Bond",
      ftwz: "No Double Duty Bond required.",
      customBonded: "Requires Double Duty Bond execution.",
    },
    {
      icon: <FileCheck className="w-6 h-6" strokeWidth={1} />,
      parameter: "Compliance",
      ftwz: "Mandatory NFE (Net Foreign Exchange) earnings as per SEZ Act of 2006.",
      customBonded: "Requires Double Duty Bond execution.",
    },
    {
      icon: <Truck className="w-6 h-6" strokeWidth={1} />,
      parameter: "Movement from Customs Gateway",
      ftwz: "Direct transshipment from sea/airport to FTWZ without customs assessment, saving time.",
      customBonded:
        "Requires customs assessment at the gateway, leading to longer turnaround times.",
    },
    {
      icon: <Box className="w-6 h-6" strokeWidth={1} />,
      parameter: "Stock Point for Overseas Customers",
      ftwz: "Overseas suppliers/buyers can set up a stock point or distribution hub without regulatory documents under SEZ Act.",
      customBonded: "Not allowed to set up a stock point or distribution hub.",
    },
    {
      icon: <LayersThree className="w-6 h-6" strokeWidth={1} />,
      parameter: "Consolidation of Goods",
      ftwz: "Permitted to consolidate goods from various countries/suppliers as a cross-border transition hub.",
      customBonded:
        "Consolidation from multiple countries/suppliers is not permitted.",
    },
    {
      icon: <Clock className="w-6 h-6" strokeWidth={1} />,
      parameter: "Storage and Duty Assessment Period",
      ftwz: "Goods can be stored without duty assessment for the validity period of the LOI (no interest on duty applicable).",
      customBonded:
        "Storage beyond one year requires customs approval; interest on duty is levied after 90 days.",
    },
    {
      icon: <Package className="w-6 h-6" strokeWidth={1} />,
      parameter: "Temporary Removal of Cargo",
      ftwz: "Permitted for 90-120 days for exhibitions; proof required; must return after.",
      customBonded: "Not allowed.",
    },
    {
      icon: <FileText className="w-6 h-6" strokeWidth={1} />,
      parameter: "Customs Clearance for DTA",
      ftwz: "Done within Brubish FTWZ; duty paid for moved quantity; flexible BL/invoice combinations.",
      customBonded: "Done at customs house, away from the warehouse.",
    },
    {
      icon: <FileCheck className="w-6 h-6" strokeWidth={1} />,
      parameter: "Customs Clearance for Export/Re-export",
      ftwz: "Single-window, seamless process within Brubish FTWZ.",
      customBonded: "Requires customs house visits, adding time.",
    },
    {
      icon: <Coins className="w-6 h-6" strokeWidth={1} />,
      parameter: "Foreign Currency Transactions",
      ftwz: "Invoices can be raised in foreign currency, avoiding conversion loss.",
      customBonded: "Invoices must be in INR with conversion loss risks.",
    },
  ];

  return (
    <div className=" py-10 sjcontainer text-gray-600  max-md:overflow-x-scroll">
      <Subheading
        className=" mb-6 text-center"
        title="Why Choose Brubish FTWZ Foreign Exporters over other Customs Bonded Warehouses?"
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="min-w-[275px] border border-gray-300 px-4 py-2 text-lg font-medium text-left">
              Particulars
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-lg font-medium">
              FTWZ
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-lg font-medium">
              Custom Bonded Warehouse
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr
              key={index}
              className={`group text-sm ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="border border-gray-300 px-4 py-2 font-[400]">
                <div className="flex items-center gap-2">
                  <span className="min-w-4 mr-2">{item.icon}</span>
                  {item.parameter}
                </div>
              </td>
              <td className="border min-w-[300px] border-gray-300 px-4 py-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 min-w-5 text-green-600" />
                  {item.ftwz}
                </div>
              </td>
              <td className="border min-w-[300px] border-gray-300 px-4 py-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 min-w-5 h-5 text-red-500" />
                  {item.customBonded}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
