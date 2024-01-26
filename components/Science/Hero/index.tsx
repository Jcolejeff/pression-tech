import Heading from "@/components/Heading";
import React from "react";

const Hero = () => {
   return (
      <section className="">
         <div className="p-initial border-b border-black px-container-base pb-2 pt-10 font-[400] dark:border-white lg:px-container-lg xl:px-container-xl">
            <h2 className="text-3xl md:text-5xl">Science</h2>
         </div>
         <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
            <Heading title="Highlights" />
            <div className="w-full">
               <img
                  src="/images/science/hero-img.svg"
                  alt="highlight"
                  className="w-full object-cover"
               />
            </div>
            <div className="md:px-10">
               <h2 className="test-xl text-center font-[700] md:text-4xl">
                  TRADE IN AUTOMOBILES SECTOR INCREASED WITH HIGH RATE
               </h2>
            </div>
         </div>
      </section>
   );
};

export default Hero;
