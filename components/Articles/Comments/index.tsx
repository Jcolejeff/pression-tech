import { Input } from "@/components/ui/input";
import { url } from "@/lib/utils";
import React from "react";

const Comments = () => {
   return (
      <section className="mb-10 mt-20">
         <div className="grid-cols-4 gap-10 md:grid">
            <div className="col-span-3 bg-[#F4F9FF] p-4 dark:bg-[#121212] md:p-8 lg:p-20">
               <div className="flex gap-4 md:items-center">
                  <div className="h-[40px] w-[40px] rounded md:h-[70px] md:w-[70px]">
                     <img
                        src={url("/images/landing/editorsPick/automobiles.svg")}
                        alt="Author profile photo"
                        className="h-full w-full rounded-full object-cover"
                     />
                  </div>
                  <div className="w-full gap-4 md:flex">
                     <Input placeholder="Add a comment" className="rounded-none border-primary-4" />
                     <button className="mt-4 bg-primary-4 p-2 text-white md:mt-0">Comment</button>
                  </div>
               </div>
               <div className="mt-16">
                  <h4 className="text-lg font-[700]">Comments</h4>
                  <div className="mt-10 flex items-start gap-6">
                     <div className="h-[40px] w-[40px]  md:h-[70px] md:w-[70px] ">
                        <img
                           src={url("/images/landing/editorsPick/e-signature.svg")}
                           alt="Author profile photo"
                           className="h-full w-full rounded-full object-cover"
                        />
                     </div>
                     <div className="flex w-fit flex-col gap-2">
                        <h4 className="text-lg font-[700]">Adebunmi Bankole</h4>
                        <p className="text-md font-[400]">
                           I really feel this post talks more about the tech impact and how humans
                           has benefitted from it, i could use me as an example, with the way i have
                           been able to scale out my daily activities, it has been easy for as a web
                           developer and also as a mother
                        </p>
                        <div className="mt-6 flex gap-10">
                           <div className="flex items-center gap-2">
                              <img src="/images/thumb-up.svg" />
                              <span className="font-[700] text-[#000000a6] dark:text-[#ffffffa6]">
                                 12 likes
                              </span>
                           </div>
                           <span className="font-[700] text-primary-4">Reply</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-span-1 my-10 flex w-full flex-col gap-6 bg-gray-50 pl-5"></div>
         </div>
      </section>
   );
};

export default Comments;
