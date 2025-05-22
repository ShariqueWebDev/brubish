import Ftwzbanner from "@/components/shared/ftwzbanner";
import Heading from "@/components/shared/Heading";
import Subheading from "@/components/shared/Subheading";

export default function NDRFTWZBenefits() {
  const sections = [
    {
      title: "Brubish FTWZ FOR GLOBAL SUPPLY INNOVATIONS - QUICK LOOK",
      content: [
        {
          heading: "Global Supply Innovations",
          items: [
            "For the big retail chains, FTWZ removes regulatory limitations of consolidating products from suppliers from different countries in South Asia.",
            "The processes for end-distribution of the items to world-wide stores, say in Europe and USA, can be done in the FTWZ in India, at lower costs.",
            "Since these processes are done closer to the supply sources, there would be more effective control on inventory and also quicker payments to the suppliers.",
            "An automobile manufacturer or an IT hardware manufacturer would be able to hold spares duty-free in the FTWZ and to supply it as per requirement, seamlessly, with low lead times, on duty-paid basis to the Indian market.",
            "Foreign exchange hedging and cost equalization by resorting to forward trading makes such operations cost-effective.",
            "Goods can be stored for 2 years and no interest on duty unlike bonded warehouse.",
          ],
        },
      ],
    },
    {
      title: "Brubish FTWZ OTHER MISCELLANEOUS BENEFITS - QUICK LOOK",
      content: [
        {
          heading: "General",
          items: [
            "Units can import goods duty-free and warehouse it in the FTWZ, they can re-export these goods without paying duty.",
            "Units enjoy 100% Income Tax exemption on export income under Section 10AA of the Income Tax Act, 1961 for the first 5 years of operations.",
            "Units are exempted from all GST and other taxes for all activities in the FTWZ (including labour, rentals, etc.).",
            "Offsite Customs – Speedy clearance in Imports, Exports, Re-Exports.",
            "100% FDI is allowed.",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Ftwzbanner title="FTWZ For consolidation" />
      <div className="sjcontainer mx-auto px-4 py-16">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <Subheading className="mb-8" title={section.title} />
            {section.content.map((content, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="font-semibold text-lg mb-4">
                  {content.heading}
                </h3>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <tbody>
                    {content.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-300">
                        <td className="px-4 py-2 text-gray-600">{item}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
