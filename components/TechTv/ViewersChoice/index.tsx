import Heading from "@/components/Heading";
import React from "react";

const ViewersChoice = () => {
   return (
      <div className="bg-black py-8">
         <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
            <h4 className="text-xl text-[#ffffffb3]">Viewer&apos;s choice</h4>
            <div className="w-full">
               <img
                  src="/images/science/hero-img2.svg"
                  alt="highlight"
                  className="w-full object-cover"
               />
            </div>
            <div className="flex gap-4">
               <span className="text-base font-[700] text-white ">Startup</span>
               <span className="text-base font-[400]   text-[#ffffff99]">January 2, 2023</span>
            </div>
            <div className="">
               <h2 className="text-xl font-[700] text-white md:text-4xl">
                  CEO of Crunkch admit to the public the upgrade in the application, after hours of
                  using the beta for weeks
               </h2>
            </div>
         </div>
         <div></div>
      </div>
   );
};

export default ViewersChoice;
