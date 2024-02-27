/* eslint-disable @next/next/no-img-element */
"use client";
import Heading from "@/components/Heading";
import { formatDate } from "@/lib/utils";
import React from "react";

const Hero = ({ data }: { data: any }) => {
   const [showIframe, setShowIframe] = React.useState(false);

   return (
      <section className="">
         <div className="p-initial border-b border-black px-container-base pb-2 pt-10 font-[400] dark:border-white lg:px-container-lg xl:px-container-xl">
            <h2 className="pb-4  text-xl md:text-3xl">Techpression TV</h2>
         </div>
         {/* highlight of the dat */}
         <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
            <Heading title="Highlight of the Day" />

            <div
               className="relative h-full w-full"
               onClick={() => {
                  setShowIframe(!showIframe);
               }}
            >
               {showIframe ? (
                  <iframe
                     className=" h-[300px] max-h-[800px] w-[340px] max-w-[1500px]  md:h-[60vh] md:w-[80vw] "
                     src={data[0]?.acf?.youtube_link}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  ></iframe>
               ) : (
                  <>
                     <img
                        src={data[0]?.acf?.image}
                        alt="highlight"
                        className=" h-full w-full object-cover"
                     />
                     <div
                        className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center bg-black/30  transition-all duration-200  ease-linear  
                        
                        "
                     >
                        <img
                           src="/svgs/playbutton.svg"
                           alt=""
                           className="h-16 w-16 cursor-pointer  transition-all duration-200 ease-linear hover:scale-110 group-hover:bg-inherit"
                        />
                     </div>
                  </>
               )}
            </div>
            <div className="flex gap-4">
               <span className="text-base font-[700] capitalize ">
                  {data[0]?.acf?.video_category}
               </span>
               <span className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                  {formatDate(data[0]?.date)}
               </span>
            </div>
            <div className="">
               {/* <p>{data[0]?.acf?.youtube_link}</p> */}
               <h2 className="text-xl font-[700] md:text-4xl">{data[0]?.acf?.title}</h2>
            </div>
         </div>
      </section>
   );
};

export default Hero;
