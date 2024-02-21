/* eslint-disable @next/next/no-img-element */
import React from "react";

import { url } from "@/lib/utils";

import { Bookmark, ArrowDownUp, ArrowRight } from "lucide-react";
import Heading from "@/components/Heading";
import Link from "next/link";

const EditorsPick = ({ editorsPickData }: { editorsPickData: any }) => {
   return (
      <section className="container w-full max-w-[1700px] grid-cols-3 gap-20 border-t border-[#000] px-container-base py-[3rem] dark:border-white md:grid lg:px-container-lg xl:px-container-xl">
         <Link href={`${editorsPickData[2]?.slug}`} className="col-span-2 flex flex-col gap-6 ">
            <Heading title="Editor's pick" />
            <img
               src={editorsPickData[0]?.jetpack_featured_media_url}
               alt="automobiles"
               className="w-full"
            />
            <div className="flex justify-between">
               <div className="flex gap-6 ">
                  <button className="rounded-full border border-primary-4 px-[2rem] py-[.5rem]">
                     Tech
                  </button>
                  <button className="rounded-full border bg-[#DDD] px-[2rem] py-[.5rem] dark:bg-[#2F2F2F]">
                     Science
                  </button>
               </div>
               <button className="rounded-full border bg-[#DDD] p-[.7rem] font-[1rem] dark:bg-[#2F2F2F]">
                  <Bookmark />
               </button>
            </div>
            <h2 className="text-lg font-[700]">{editorsPickData[0]?.title?.rendered}</h2>
            <p
               className="text-base font-[400] text-[#0000009e] dark:text-[#d9d9d9b3]"
               dangerouslySetInnerHTML={{ __html: editorsPickData[0]?.excerpt?.rendered }}
            />

            <Link href={`${editorsPickData[0]?.slug}`} className="font-[700] text-primary-4">
               Read more
            </Link>
         </Link>
         <Link
            href={`${editorsPickData[1]?.slug}`}
            className=" md:mt col-span-1 mt-10 flex flex-col gap-6"
         >
            <img src={editorsPickData[1]?.jetpack_featured_media_url} alt="" className="w-full" />
            <h2 className="text-lg font-[700]">{editorsPickData[1]?.title?.rendered}</h2>
            <p
               className="text-base font-[400] text-[#0000009e] dark:text-[#d9d9d9b3]"
               dangerouslySetInnerHTML={{ __html: editorsPickData[1]?.excerpt?.rendered }}
            />

            <Link
               href={`${editorsPickData[1]?.slug}`}
               className="flex items-center gap-2 text-base font-[400] text-primary-4"
            >
               <span>READ MORE</span>
               <ArrowRight className="w-5 -rotate-45" />
            </Link>
         </Link>
      </section>
   );
};

export default EditorsPick;
