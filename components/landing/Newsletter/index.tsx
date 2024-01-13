import { Input } from "@/components/ui/input";
import React from "react";

const Newsletter = () => {
   return (
      <section className="container hidden max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] md:block lg:px-container-lg xl:px-container-xl">
         <div className="border bg-[#D8DCE1] py-24 md:px-20 lg:px-40">
            <div className="flex w-full justify-between">
               <p className="w-full text-xl font-[400] dark:text-black">
                  Susbcribe to our <br /> <span className="text-4xl ">Newsletter</span>
               </p>
               <p className="text-lg dark:text-black">
                  Be the first to receive daily post, News, software update and tech related
                  articles directly to your mail daily
               </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
               <Input
                  style={{
                     borderRadius: "0",
                  }}
                  placeholder="Enter your Email"
                  className="bg-[#fff] p-6"
               />
               <div className="w-full ">
                  <button className=" bg-[#0469FF] px-10 py-2 text-lg text-white">
                     Subscribe Now
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Newsletter;
