import Heading from "@/components/Heading";
import React from "react";

const Hero = () => {
   return (
      <section className="">
         <div className="p-initial border-b border-black px-container-base pb-2 pt-10 font-[400] dark:border-white lg:px-container-lg xl:px-container-xl">
            <h2 className="text-3xl md:text-5xl">Techpression TV</h2>
         </div>
         <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
            <Heading title="Highlight of the Day" />
            <div className="w-full">
               <img
                  src="/images/science/hero-img2.svg"
                  alt="highlight"
                  className="w-full object-cover"
               />
            </div>
            <div className="flex gap-4">
               <span className="text-base font-[700] ">Science</span>
               <span className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                  January 2, 2023
               </span>
            </div>
            <div className="">
               <h2 className="text-xl font-[700] md:text-4xl">
                  NASA announce new galaxy found, suggest that human kind can adapt to the
                  habitation of some planet in the solar system
               </h2>
            </div>
         </div>
      </section>
   );
};

export default Hero;
