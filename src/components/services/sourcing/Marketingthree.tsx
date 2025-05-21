import Heading from '@/components/shared/Heading';
import { CheckCircle } from 'lucide-react';
import React from 'react';

const Marketingthree = () => {
    return (
        <div className="relative px-4 py-16 mx-auto">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-[35%,60%] justify-center sjcontainer mx-auto">
                <div className="relative order-2 lg:order-1">
                    {/* Analytics Graph */}
                    <div data-aos="fade-right" className="absolute -left-12 -bottom-10 z-20 p-2 rounded-3xl">
                        <div className="flex items-end space-x-2">
                            <img
                                src="/services/marketing/2.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[160px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                    <div className="absolute -left-20 -top-10 z-20 rounded-3xl">
                        <div data-aos="zoom-in" className="flex max-md:hidden items-end space-x-2">
                            <img
                                src="/services/marketing/3.png"
                                alt="Analytics Dashboard Preview"
                                className="object-cover max-w-[230px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10">
                        <div data-aos="zoom-in" className="overflow-hidden rounded-3xl relative">
                            {/* Background Element */}
                            <div className="absolute bottom-0 rounded-t-full bg-amber-300/40 z-0 h-[70%] w-full"></div>

                            {/* Foreground Image */}
                            <img
                                src="/services/marketing/1.png"
                                alt="BML Analytics Dashboard Preview"
                                className="object-cover max-w-[500px] mx-auto w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="order-1 lg:order-2">
                    <div className="space-y-6">
                       

                        {/* Heading */}
                        <Heading className='text-left' title="Data-Driven Logistics & Marketing Solutions"
/>                            
                      

                        {/* Description */}
                        <p className="text-base text-gray-600 font-[500] text-muted-foreground">
                            At Book My Logistics, we understand that seamless supply chain management and customer trust are key to success. Our advanced marketing strategies and technological solutions empower businesses worldwide to optimize logistics and grow their reach effectively.
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4">
    <li className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-6 h-6 rounded-full">
            <CheckCircle />
        </div>
        <span className=" text-sm md:text-lg">
            Optimize your supply chain with our innovative solutions.
        </span>
    </li>
    <li className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-6 h-6 rounded-full">
            <CheckCircle />
        </div>
        <span className="text-sm md:text-lg">
            Ensure timely and efficient delivery across the globe.
        </span>
    </li>
    <li className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-6 h-6 rounded-full">
            <CheckCircle />
        </div>
        <span className="text-sm md:text-lg">
            Benefit from our cost-effective and scalable logistics solutions.
        </span>
    </li>
</ul>


                        {/* CTA Button */}
                        <div className="!mt-10">
                            <span
                                size="lg"
                                className="bg-amber-500 text-white px-5 text-sm py-2.5 rounded-full hover:bg-amber-700"
                            >
                                Discover More →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketingthree;
