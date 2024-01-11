import { url } from "@/lib/utils";
import React from "react";

const FeaturedArticles = () => {
   const articles = [
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         author: "By Damilola oluwaseun",
      },
      {
         image: "/images/landing/latestPosts/post2.svg",
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         author: "By Damilola oluwaseun",
      },
      {
         image: "/images/landing/editorsPick/e-contract.svg",
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         author: "By Damilola oluwaseun",
      },
   ];

   return (
      <section className="container w-full max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] lg:px-container-lg xl:px-container-xl">
         <h4 className="text-lg font-[700]">Featured articles</h4>
         <div className="mt-6 grid-cols-2 gap-20 md:grid">
            <div className=" flex flex-col gap-10">
               {articles.map((article, index) => {
                  return (
                     <div key={index} className="flex gap-6 border-b border-[#0000008f] py-8">
                        <div className="h-full min-w-[40%] max-w-[40%]">
                           <img
                              src={article.image}
                              alt={article.author}
                              className="max-h-full min-h-full w-full"
                           />
                        </div>
                        <div className="flex max-w-fit flex-col gap-5">
                           <span className="text-sm font-[700] text-[#00000080]">
                              {article.time}
                           </span>
                           <h3 className="text-lg font-[700] ">{article.title}</h3>
                           <span className="text-base font-[700] text-[#0851BD] ">
                              {article.author}
                           </span>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="mt-10 flex flex-col gap-8 md:mt-0">
               <div className="w-full">
                  <img
                     src={url("/images/landing/editorsPick/meta-brands.svg")}
                     className="w-full"
                  />
               </div>
               <h2 className="text-xl font-[700]">
                  Meta launches a stand alone AI powered image generator
               </h2>
               <p className="text-base font-[400] text-[#0000009e]">
                  Not to be outdone by Google’s Gemini launch, Meta’s rolling out a new, standalone
                  generative AI experience on the web, Imagine with Meta, that allows users to
                  create images by describing them in natural language. Similar to OpenAI’s DALL-E,
                  Midjourney and Stable Diffusion, Imagine with Meta, which is powered by Meta’s
                  existing Emu image generation model, creates high-resolution images from text
                  prompts. It’s free to use (at least for now) for users in the U.S. and generates
                  four images per prompt.
               </p>
               <span className="text-sm font-[700] text-[#000]">34 Minutes ago</span>
               <div className="mt-[3rem] flex w-full items-center justify-center bg-[#D9D9D9] py-[2rem]">
                  <h3 className="text-lg font-[700] uppercase">Avertisement</h3>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturedArticles;
