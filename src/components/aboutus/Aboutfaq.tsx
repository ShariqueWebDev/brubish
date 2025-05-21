// import React from 'react';

const data = [
  {
    id: 1,
    title: 'Aerospace',
    img: '/icons/aeroplane.svg',
    description: 'Providing specialized logistics solutions for the aerospace industry.',
  },
  {
    id: 2,
    title: 'Automotive',
    img: '/icons/aeroplane.svg',
    description: 'Supporting the automotive supply chain with efficient logistics services.',
  },
  {
    id: 3,
    title: 'Boiler Furnaces',
    img: '/icons/aeroplane.svg',
    description: 'Ensuring reliable delivery for boiler furnace components and systems.',
  },
  {
    id: 4,
    title: 'Construction',
    img: '/icons/aeroplane.svg',
    description: 'Streamlining logistics for construction materials and equipment.',
  },
  {
    id: 5,
    title: 'Heat Exchanger',
    img: '/icons/aeroplane.svg',
    description: 'Offering specialized handling and transport for heat exchanger units.',
  },
  
  {
    id: 7,
    title: 'Oil & Gas',
    img: '/icons/aeroplane.svg',
    description: 'Delivering secure and efficient logistics for the oil and gas industry.',
  },
  {
    id: 8,
    title: 'Refinery',
    img: '/icons/aeroplane.svg',
    description: 'Providing logistics support for refineries and their supply chains.',
  },
 
  {
    id: 10,
    title: 'Sugar Mills',
    img: '/icons/aeroplane.svg',
    description: 'Supporting the transportation of materials and products for sugar mills.',
  },
  {
    id: 11,
    title: 'Fabrication',
    img: '/icons/aeroplane.svg',
    description: 'Delivering precision logistics for the fabrication industry.',
  },
  {
    id: 12,
    title: 'Pharmaceuticals',
    img: '/icons/aeroplane.svg',
    description: 'Ensuring safe and timely delivery of pharmaceutical products.',
  },
  
  {
    id: 14,
    title: 'Ship Building',
    img: '/icons/aeroplane.svg',
    description: 'Supporting the complex logistics needs of the shipbuilding industry.',
  },
  {
    id: 15,
    title: 'Solar Power',
    img: '/icons/aeroplane.svg',
    description: 'Providing logistics solutions for the growing solar power industry.',
  },
  {
    id: 16,
    title: 'Nuclear',
    img: '/icons/aeroplane.svg',
    description: 'Specialized logistics for the nuclear energy sector.',
  },
  {
    id: 17,
    title: 'Mining',
    img: '/icons/aeroplane.svg',
    description: 'Handling logistics for the mining industry with safety and precision.',
  },
  {
    id: 18,
    title: 'Marine',
    img: '/icons/aeroplane.svg',
    description: 'Delivering logistics services tailored to the marine industry.',
  },
  {
    id: 19,
    title: 'Geo Thermal',
    img: '/icons/aeroplane.svg',
    description: 'Providing logistics support for geothermal energy projects.',
  },
  {
    id: 20,
    title: 'Onshore & Offshore',
    img: '/icons/aeroplane.svg',
    description: 'Tailored logistics solutions for both onshore and offshore operations.',
  },
  {
    id: 21,
    title: 'Sea Water Desalination',
    img: '/icons/aeroplane.svg',
    description: 'Supporting the logistics of sea water desalination plants and systems.',
  },
  {
    id: 22,
    title: 'Chemical Industries',
    img: '/icons/aeroplane.svg',
    description: 'Delivering logistics services for the chemical industry with safety and care.',
  },
 
];


import Image from 'next/image';
// const Aboutfaq = () => {
//     return (
//       <div className="faq-container md:container md:mx-auto px-2 ">
//         {data.map((item) => (
//           <div className="faq-item my-10 mx-auto bg-white" key={item.id}>
//             <div className="faq-inner">
//               <div className="faq-front">
//                 <div className="content mx-auto ">
//                   <img src={item.img} alt={item.title} className='mx-auto' />
//                   <h3 className='text-xl'>{item.title}</h3>
//                 </div>
//               </div>
//               <div className="faq-back">
//                 <div className="content">
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Aboutfaq;


import React from 'react'

const Aboutfaq = () => {
  return (
    <div className=' py-8 md:py-24 sjcontainer'>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 gap-y-14  ">
  <div
    
    className="relative flex group h-72 flex-col  bg-white  rounded-md "
  >
   
    <div className=" z-10 text-left absolute bottom-0   mt-4 w-full">
      <div className='flex px-4 items-center justify-center w-full h-72'>
        <div>

        <span className='text-sm   text-primary font-bold'>OUR SCOPE</span>
      <h3 className="text-4xl  my-4 font-bold mb-2">Industries<br/> We Serve</h3>
      <p className='text-gray-500 '>We provide raw materials and machined components to a large range of Industries.</p>
        </div>
        </div>
    </div>
  </div>
{
data?.map((blog) =>  {

  return (
    <div
    key={blog.id}
    className="relative flex group h-72 flex-col  bg-black/50 border rounded-md "
  >
    {/* Background Image */}
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="https://img.freepik.com/free-photo/industrial-port-de-barcelona-evening_1398-4295.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
        alt={blog.title}
        layout="fill"
        objectFit="cover"
        className="opacity-50 w-full h-full group-hover:scale-110 duration-500"
      />
    </div>
  
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t hover:bg-transparent from-black/70 via-black/40 to-black/20"></div>
  
    {/* Main Icon Image */}
    <div className="relative z-10 overflow-hidden w-14 -mt-8 ml-10 bg-gray-200 group-hover:-translate-y-2 duration-300  p-2 py-3 border h-16 mb-2 shadow-lg mx-auto">
      <Image
        height={500}
        width={500}
        src={blog.img}
        alt={blog.title}
        className="w-full hover:scale-105 duration-150 h-full object-cover"
        loading="eager"
      />
    </div>
  
    {/* Content */}
    <div className=" z-10 text-left absolute bottom-0   mt-4 w-full">
      <div className='flex items-center justify-center w-full h-72'>
        
      <h3 className="text-2xl text-white  font-bold mb-2">{blog.title}</h3>
        </div>
    </div>
  </div>
)
} )
}
</div>
</div>
  )
}

export default Aboutfaq

