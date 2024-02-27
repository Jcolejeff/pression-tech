/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import React from "react";

const Item = ({ item }: { item: any }) => {
   const [showIframe, setShowIframe] = React.useState(false);

   return (
      <div className="mt-10 flex flex-col gap-5 ">
         <div
            className="relative w-full md:h-[18rem]"
            onClick={() => {
               setShowIframe(!showIframe);
            }}
         >
            {showIframe ? (
               <iframe
                  className=" h-[200px] max-h-[800px] w-[340px] max-w-[1500px]  md:h-[300px] md:w-[700px] "
                  src={item?.acf?.youtube_link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               ></iframe>
            ) : (
               <>
                  <img
                     src={item?.acf?.image}
                     alt="highlight"
                     className=" h-full w-full object-cover"
                  />
                  <div
                     className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center bg-black/30  transition-all duration-200  ease-linear hover:scale-110 hover:backdrop-blur-sm
                        
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
            <span className="text-base font-[700] capitalize">{item?.act?.video_category}</span>
            <span className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
               {formatDate(item?.date)}
            </span>
         </div>
         <div className="">
            <h2 className="text-xl font-[700] md:text-2xl">{item?.acf?.title}</h2>
         </div>
      </div>
   );
};

export default Item;
