import Heading from '@/components/shared/Heading'
import { Archive, Globe, Package, CreditCard, Eye, Truck } from 'lucide-react'
export default function Twoforeignexport() {
  const features = [
    {
      icon: Archive,
      title: "Customizable Warehousing",
      description:
        "Warehouses tailored to accommodate various types of products.",
    },
    {
      icon: Globe,
      title: "Quick Start for Foreign Businesses",
      description:
        "Foreign entities can begin Exim operations in India within 1-2 days by registering with Brubish FTWZ.",
    },
    {
      icon: Package,
      title: "Simplified Customs Clearance",
      description:
        "One-stop resource for seamless import and export customs clearance.",
    },
    {
      icon: CreditCard,
      title: "Deferred Duty Payments",
      description:
        "Flexible payment terms for customs duties as per importer/consignee requirements.",
    },
    {
      icon: Eye,
      title: "Temporary Cargo Removal",
      description:
        "Cargo can be temporarily removed for exhibitions or demonstrations without paying customs duties and returned within 120 days.",
    },
    {
      icon: Truck,
      title: "Cost-Effective & Timely Delivery",
      description:
        "Efficient and economical shipment delivery to customers, meeting timelines.",
    },
  ];

  return (
    <div className="sjcontainer mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16">
        <div className="mb-4"></div>
        <Heading
          className=""
          title="Advantages of Using Brubish FTWZ
"
        />
      </div>

      <div className="flex flex-col   justify-between  lg:flex-row md:space-x-6 items-center gap-8 relative z-20">
        {/* Left Column (First Three Features) */}
        <div className="flex flex-col  space-y-8 lg:w-1/3">
          {features.slice(0, 3).map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-aos="fade-right"
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-[500] text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Image */}
        <div className="relative w-full  my-10 transform  max-w-md mx-auto lg:w-1/3">
          <img
            data-aos="fade-up"
            src="/ftwz/foreignexports/1.svg"
            alt="App Interface Preview"
            className="relative z-10 -mb-6 w-full h-auto"
          />
        </div>

        {/* Right Column (Last Three Features) */}
        <div className="flex flex-col space-y-8 lg:w-1/3 md:pl-8 ">
          {features.slice(3).map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-aos="fade-left"
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-[500] text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
