import { url } from "@/lib/utils";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const ArticleDetails = () => {
   return (
      <section className="mt-20">
         <div className="w-full">
            <img
               src={url("/images/landing/editorsPick/automobiles.svg")}
               alt="Article cover photo"
               className="w-full object-cover"
            />
         </div>
         <div className="mt-10 grid-cols-4 md:grid">
            <div className="col-span-3 flex flex-col items-end border-[#000] pb-10 dark:border-white  md:border-r md:pr-10">
               <div className=" md:max-w-[70%] ">
                  <h4 className="text-xl font-[700]">Chat Integration</h4>
                  <p className="mt-4 text-base font-[400] text-[#0000009e] dark:text-[#ffffffc7]">
                     OpenAI has formally launched its internet browsing feature to ChatGPT, some
                     three weeks after re-introducing the feature in beta after several months in
                     hiatus. ChatGPT, the generative AI chatbot t... OpenAI has formally launched
                     its internet browsing feature to ChatGPT, some three weeks after re-introducing
                     the feature in beta after several months in hiatus. ChatGPT, the generative AI
                     chatbot t...
                  </p>
               </div>
               <div className=" mt-10 md:max-w-[70%]">
                  <h4 className="text-xl font-[700]">Chat Integration</h4>
                  <p className="mt-4 text-base font-[400] text-[#0000009e] dark:text-[#ffffffc7]">
                     OpenAI has formally launched its internet browsing feature to ChatGPT, some
                     three weeks after re-introducing the feature in beta after several months in
                     hiatus. ChatGPT, the generative AI chatbot t...
                  </p>
               </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4 pl-5">
               <span className="mt-4 text-base font-[400] text-[#0000009e]">Author</span>
               <div className="flex items-center gap-4">
                  <div className="h-[4rem] w-[4rem] rounded">
                     <img
                        src={url("/images/landing/editorsPick/automobiles.svg")}
                        alt="Author profile photo"
                        className="h-full w-full rounded-full object-cover"
                     />
                  </div>
                  <span className="text-lg font-[700]">Babatunde bello</span>
               </div>
               <div>
                  <span className="mt-4 text-base font-[400] text-[#000] dark:text-white">
                     Owned articles
                  </span>
                  <p className="mt-4 text-base font-[400] text-[#0000009e] dark:text-[#ffffffc7]">
                     Rise in tech as telsa beat a record in sale, 10% rise in stock makes traders
                     happy with the marketcap, Increase in manufacturing brings about lack of raw
                     materials
                  </p>
               </div>
               <div className="">
                  <h4 className="text-lg font-[700]">Share</h4>
                  <div className="flex gap-6 pb-[4rem] pt-[2rem] ">
                     <Link href="#" className="text-[1.2rem] text-primary-4 md:text-[1.5rem]">
                        <Facebook />
                     </Link>
                     <Link href="#" className="text-[1.2rem] text-primary-4 md:text-[1.5rem]">
                        <Twitter />
                     </Link>
                     <Link href="#" className="text-[1.2rem] text-primary-4 md:text-[1.5rem]">
                        <Youtube />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ArticleDetails;
