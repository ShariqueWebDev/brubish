import React from 'react';

const data = [
  {
    id: 1,
    name: "Customize Your Logistics",
    icon: "/icons/services/tag.svg",
    content:
      "We customize our technology to create the exact logistics solution you need using our open APIs. Whether you are a Shopify merchant, or sell on multiple channels like Amazon and Walmart, we can scale with your business.",
  },
  {
    id: 2,
    name: "Affordable, Fast Delivery",
    icon: "/icons/services/truck.svg",
    content:
      "Offer fast delivery speeds including 2-day and 3-day delivery with Shop Promise and Brubish is Fast Tags. We use data to dynamically show the fastest delivery speed based on your inventory placement. This improves the reliability of the delivery speed and reduces costs.",
  },
  {
    id: 3,
    name: "Avoid Costly Investment",
    icon: "/icons/services/happy.svg",
    content:
      "Rely on our vast network of distribution hubs, warehouses, and fulfillment centers outfitted with state-of-the-art technology. Only pay for the services you use, and change your usage as your business grows.",
  },
];

const Whybmlservice = () => {
  return (
    <div className="sjcontainer py-8 md:py-16">
      <h2 className=" text-2xl md:text-3xl ">Why Brubish Insurance</h2>
      <div className="w-40 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-1 mb-3"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((item) => (
          <div key={item.id} className=" py-4 md:p-4  rounded-lg text-left">
            <img src={item.icon} alt={item.name} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-[500] mb-2">{item.name}</h3>
            <p className="text-gray-600 text-[15px]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whybmlservice;
