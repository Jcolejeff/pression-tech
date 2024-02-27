/* eslint-disable @next/next/no-img-element */
"use client";
import Heading from "@/components/Heading";
import { formatDate } from "@/lib/utils";
import React from "react";

const ViewersChoice = ({ viewersChoice }: { viewersChoice: any }) => {
   const [showIframe, setShowIframe] = React.useState(false);

   return (
      <div className="bg-black py-8">
         <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
            <h4 className="text-xl text-[#ffffffb3]">Viewer&apos;s choice</h4>
            <div
               className="relative h-full w-full"
               onClick={() => {
                  setShowIframe(!showIframe);
               }}
            >
               {showIframe ? (
                  <iframe
                     className=" h-[400px] max-h-[800px] w-[400px] max-w-[1500px]  md:h-[60vh] md:w-[80vw] "
                     src={viewersChoice?.acf?.youtube_link}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  ></iframe>
               ) : (
                  <>
                     <img
                        src={viewersChoice?.acf?.image}
                        alt="highlight"
                        className=" h-full w-full object-cover"
                     />
                     <div
                        className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center bg-black/30  transition-all duration-200  ease-linear   hover:backdrop-blur-sm
                        
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
               <span className="text-base font-[700] capitalize text-white">
                  {viewersChoice?.acf?.video_category}
               </span>
               <span className="text-base font-[400]   text-[#ffffff99]">
                  {formatDate(viewersChoice?.date)}
               </span>
            </div>
            <div className="">
               <h2 className="text-xl font-[700] text-white md:text-4xl">
                  {viewersChoice?.acf?.title}
               </h2>
            </div>
         </div>
         <div></div>
      </div>
   );
};

export default ViewersChoice;
