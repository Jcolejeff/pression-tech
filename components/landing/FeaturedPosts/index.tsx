import { url } from "@/lib/utils";
import React from "react";

import { ArrowDown } from "lucide-react";
import Heading from "@/components/Heading";

const FeaturedPosts = () => {
   const posts = [
      {
         category: "Security",
         duration: "12 mins read",
         title: "From regulatory ripple to cyber attack: A reflection on african tech",
      },
      {
         category: "Security",
         duration: "12 mins read",
         title: "From regulatory ripple to cyber attack: A reflection on african tech",
      },
      {
         category: "Security",
         duration: "12 mins read",
         title: "From regulatory ripple to cyber attack: A reflection on african tech",
      },
   ];
   return (
      <section className="container  max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <Heading title="Featured Post" />
         <div className="mb-52 mt-6 gap-10 md:mb-40 md:flex">
            <div className="left flex w-full flex-col gap-8">
               {posts.map((post, index) => {
                  return (
                     <div key={index} className="flex flex-col gap-4">
                        <div className="ml-[1.5rem] flex items-center gap-4">
                           <span className="text-xl font-[700]">{post.category}</span>
                           <span className="text-base font-[400]">{post.duration}</span>
                        </div>
                        <div className="flex gap-[.5rem] font-[700]">
                           <span className="text-xl font-[700]">
                              <ArrowDown />
                           </span>
                           <h4 className="text-2xl font-[700] ">{post.title}</h4>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="relative mt-10 flex h-full w-full flex-col gap-6 md:mt-0">
               <img src={url("/images/landing/sections/dollar-rate.svg")} className="h-full" />

               <div
                  className="absolute left-[10%] top-[70%] flex max-w-[80%] flex-col gap-3 bg-white p-4  dark:bg-black md:left-[15%] md:max-w-[70%] md:p-8"
                  style={{
                     // top: "70%",
                     // left: "15%",
                     boxShadow: "-11px 18px 11.3px 0px rgba(111, 100, 100, 0.25)",
                  }}
               >
                  <div className=" flex items-center gap-4">
                     <span className="text-xl font-[700]">Tech AI</span>
                     <span className="hidden text-base font-[400] md:block">12 mins read</span>
                  </div>
                  <h4 className="text-2xl font-[700]">
                     Dollar rate increases with high margin to naira
                  </h4>
                  <div className="flex flex-col gap-1">
                     <span className="text-sm font-[700] text-primary-4">Ademola Akeem</span>
                     <span className="text-sm font-[400] text-[#00000070]">1 day ago</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturedPosts;
