import { url } from "@/lib/utils";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";

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
      <section className="container  max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] lg:px-container-lg xl:px-container-xl">
         <h4 className="text-lg font-[700]">Featured Post</h4>
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
                              <GoArrowDownRight />
                           </span>
                           <h4 className="text-2xl font-[700] ">{post.title}</h4>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="relative mt-10 flex h-full w-full flex-col gap-6 border md:mt-0">
               <img src={url("/images/landing/sections/dollar-rate.svg")} className="h-full" />

               <div
                  className="absolute flex max-w-[70%] flex-col gap-3 bg-white p-8"
                  style={{
                     top: "70%",
                     left: "15%",
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
                     <span className="text-sm font-[700] text-[#0851BD]">Ademola Akeem</span>
                     <span className="text-sm font-[400] text-[#00000070]">1 day ago</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturedPosts;
