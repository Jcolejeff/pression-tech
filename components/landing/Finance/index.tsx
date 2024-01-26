import { url } from "@/lib/utils";
import React from "react";

import { ArrowDown } from "lucide-react";
import Heading from "@/components/Heading";

const Finance = () => {
   const posts = [
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         text: "Tesla Newly cybertruck amazed citizen with it AI features",
      },
      {
         image: "/images/landing/sections/tech.svg",
         text: "Tesla Newly cybertruck amazed citizen with it AI features",
      },
   ];
   return (
      <section className="container max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <div className="general grid-cols-4 gap-10 md:grid">
            <div className="first relative col-span-2">
               <Heading title="Finance" />
               <div className="relative">
                  <div className=" mt-6 flex flex-col gap-6">
                     <img src={url("/images/landing/sections/dollar-rate.svg")} />

                     <div
                        className="absolute flex max-w-[70%] flex-col gap-3 bg-white p-4 dark:bg-black md:max-w-[55%]"
                        style={{ top: "80%" }}
                     >
                        <div className="flex items-center justify-between">
                           <span className="text-lg font-[700] text-primary-4">Trade News</span>
                           <a href="#" className="text-lg text-[#1F2A3766] dark:text-white">
                              <ArrowDown />
                           </a>
                        </div>
                        <h4 className="text-2xl font-[700] ">
                           Dollar rate increases with high margin to naira
                        </h4>
                     </div>
                  </div>
               </div>
               <div className="relative mt-[12rem] dark:text-[#d9d9d9b3] sm:mt-[12rem] lg:mt-[7rem]">
                  <p>
                     Establishing commercial markets on the moon is going to require thinking a
                     little differently. That’s DARPA’s hunch, anyway. DARPA (Defense Advanced
                     Research Projects Agency) is the U.S. Department... “In terms of major plans
                     for 2024, we are looking to rider verifications to ensure that we also know who
                     our riders are and authenticate anybody who is registering on the platform.
                     This year we focused on verifying our drivers, making sure to know who they
                     are. Next year will be about knowing who our riders are and making sure the
                     platform is safe for both our riders and drivers,” the Country Manager said...
                     <a href="#" className="font-[700] text-primary-4">
                        Read More..
                     </a>
                  </p>
               </div>
            </div>
            <div className="second col-span-1 mt-10 md:mt-0 ">
               <div className="h-fit border-black px-6 dark:border-white md:border-l md:border-r">
                  <Heading title="Related Post" />
                  <div className="mt-6 flex flex-col gap-10">
                     {posts.map((post, index) => {
                        return (
                           <div key={index} className="flex flex-col gap-2">
                              <img src={post.image} className="w-full" />
                              <p className="text-lg font-[700]">{post.text}</p>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div className="mt-10 text-center text-lg font-[700] text-primary-4">
                  <a href="#" className="text-center">
                     More on Finance
                  </a>
               </div>
            </div>
            <div className="third col-span-1"></div>
         </div>
      </section>
   );
};

export default Finance;
