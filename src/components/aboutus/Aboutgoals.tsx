import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const services = [
    {
    "image": "https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
    "title": "Elevate Your Business",

    "description": "In today’s competitive market, businesses need to adapt quickly to stay ahead. We provide a suite of innovative solutions tailored to the unique challenges faced by modern enterprises. From digital transformation strategies to advanced data analytics and automation, we help you streamline processes, reduce costs, and optimize performance. Whether you’re a startup or an established brand, our expertise ensures that your business is well-equipped to thrive in an ever-evolving marketplace."
    },
    {
    "image": "https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
    "title": "Seamless Customer Experience",
  
    "description": "Delivering a seamless customer experience is the key to building trust and loyalty. We offer solutions that enable you to create personalized, meaningful interactions at every touchpoint. From intuitive user interfaces to advanced CRM systems, we help you understand your customers’ needs and respond in real-time. By integrating powerful communication tools and data-driven insights, we ensure that every customer feels valued, resulting in long-term relationships and sustained growth for your brand."
    },
    {
    "image": "https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?uid=P114872353&ga=GA1.1.1856381827.1724408266&semt=ais_hybrid",
    "title": "Empower Your Team",

    "description": "A well-equipped and motivated team is essential for any organization’s success. Our comprehensive approach to workforce empowerment includes the latest in collaborative tools, remote working technology, and professional development programs. We work closely with your team to identify areas for improvement and provide the training and resources needed to foster creativity, innovation, and productivity. With our support, your employees will feel confident, engaged, and ready to tackle any challenge, helping your business reach new heights."
    }
    ]
const Aboutgoals = () => {
  return (
    <div className=' my-8 md:my-16 sjcontainer'>
        <h2 className='text-primary text-4xl font-bold mb-4 text-center'>Our Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
{
    services?.map((blog) =>  {

      return (
        <div  key={blog.id} className="flex group flex-col items-center bg-white   rounded-sm">
            <div className=' overflow-hidden w-full h-48'>
      <Image
      height={500}
      width={500}
      src={blog.image}
      alt={blog.name}
      className="w-full group-hover:scale-105 duration-150 h-full  object-cover mb-2"
      loading="eager"
      
      
      />
      </div>
        <div className='text-left  p-2  w-full'>
      <h3 className="text-base text-left  font-bold mb-2 ">{blog.title}</h3>
      <div
  className="text-left  text-[15px]    text-gray-600"
  dangerouslySetInnerHTML={{ __html: blog.description || "" }}
/>
            </div>
    </div>
  )
    } )
}
</div>
    </div>
  )
}

export default Aboutgoals
