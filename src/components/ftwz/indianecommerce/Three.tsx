// import { Badge } from "@/components/ui/badge"
import Heading from '@/components/shared/Heading'
import Subheading from '@/components/shared/Subheading';
import { Truck, ShoppingCart, Network,ArrowRightCircle , PackageCheck, Globe2 } from 'lucide-react';

// import { Bell, FileStack, LayoutGrid, MessageCircle, Share2, Users } from 'lucide-react'

export default function Three() {
  const features = [
    {
      icon: Truck, // Transportation services icon
      title: "Multiple products last mile delivery",
    },
    {
      icon: ShoppingCart, // Retail and e-commerce icon
      title: "A wide network of  B2B and B2C",
    },
    {
      icon: Network, // Networking icon
      title: "Network being built and increasing every month",
    },
    {
      icon: ArrowRightCircle, // Delivery and e-commerce icon
      title: "Migrating to e-commerce based end customer delivery",
    },
    {
      icon: PackageCheck, // Package handling and logistics icon
      title: "Can easily fit into the FTWZ value chain for 360-degree advantages",
    },
    {
      icon: Globe2, // Global and international icon
      title: "Maximum benefit to buyers, sellers, and customers",
    }
  ];

  return (
    <div className="sjcontainer mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className='mb-4'>

        </div>
        <Subheading className='text-center' title="Last Mile Experience into FTWZ + E-Commerce" />
      </div>

      <div className="flex flex-col   justify-between  lg:flex-row md:space-x-6 items-center gap-8 relative z-20">
        {/* Left Column (First Three Features) */}
        <div className="flex flex-col  space-y-8 lg:w-1/3 ">
          {features.slice(0, 3).map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} data-aos="fade-right" className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className=" text-base md:text-lg md:mb-2">{feature.title}</h3>
                  {/* <p className="text-gray-600">{feature.description}</p> */}
                </div>
              </div>
            )
          })}
        </div>

        {/* Center Image */}
        <div  className="relative w-full   my-10 transform   scale-90  lg:w-1/3 max-w-[350px]">
          <div className="aspect-square rounded-full bg-amber-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[97%]  md:w-[130%]" />
          <div className="aspect-square rounded-full bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[110px] md:-translate-y-[130px] w-[80%]  md:w-[100%]" />
          <img data-aos="fade-up"
            src="/ftwz/ecommerce/2.png"
            alt="App Interface Preview"
            className="relative z-10 -mb-16 w-full h-auto"
          />
        </div>

        {/* Right Column (Last Three Features) */}
        <div className="flex flex-col space-y-8 lg:w-1/3   ">
          {features.slice(3).map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} data-aos="fade-left" className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className=" text-base md:text-lg md:mb-2">{feature.title}</h3>
                  {/* <p className="text-gray-600">{feature.description}</p> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
