/* eslint-disable @next/next/no-img-element */
import { url } from "@/lib/utils";
import React from "react";

import { ArrowDown } from "lucide-react";
import Heading from "@/components/Heading";
import Link from "next/link";
import { startProgress } from "@/components/ProgressBarChecker/Events";

interface HomePageCategoryProps {
   title: string;
   data: any;
   slug: string;
   id: number;
}
const HomePageCategory = ({ title, data, slug, id }: HomePageCategoryProps) => {
   return (
      <section className="container max-w-[2100px] border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <div className="general grid-cols-6 gap-20 md:grid">
            <Link href={`/${data[0]?.slug}`} className="first relative col-span-3 block">
               <Heading title={title} />
               <div className="relative">
                  <div className=" mt-6 flex flex-col gap-6">
                     <img src={data[0]?.jetpack_featured_media_url} className="w-full" alt="" />

                     <div
                        className="absolute flex max-w-[80%] flex-col gap-3 bg-white py-4 pr-4 dark:bg-black md:max-w-[75%]"
                        style={{ top: "80%" }}
                     >
                        <div className="flex items-center justify-between">
                           <span className="text-lg font-[700] text-primary-4">{title} News</span>
                           <a href="#" className="text-lg text-[#1F2A3766] dark:text-white">
                              <ArrowDown />
                           </a>
                        </div>
                        <h4 className="text-2xl font-[700] ">{data[0]?.title?.rendered}</h4>
                     </div>
                  </div>
               </div>
               <div className="relative mt-[12rem] dark:text-[#d9d9d9b3] sm:mt-[12rem] lg:mt-[7rem]">
                  <p
                     className="mb-2 mt-[.6rem] text-base font-[400] text-[#0000009e] dark:text-white"
                     dangerouslySetInnerHTML={{ __html: data[0]?.excerpt?.rendered }}
                  />
                  <Link href={`${data[0]?.slug}`} className="inline font-[700] text-primary-4">
                     <span>Read More...</span>
                  </Link>
               </div>
            </Link>
            <div className="second col-span-2 mt-10 md:mt-0 ">
               <div className="h-fit border-black dark:border-white md:border-l md:border-r md:px-10">
                  <Heading title={`Related ${title} Posts`} />
                  <div className="mt-6 flex flex-col gap-10">
                     {data?.slice(1)?.map((post: any, index: number) => {
                        return (
                           <Link
                              href={`/${post?.slug}`}
                              key={index}
                              className="flex flex-col gap-2"
                           >
                              <img
                                 src={post?.jetpack_featured_media_url}
                                 className="w-full"
                                 alt=""
                              />
                              <p className="text-lg font-[700]">{post?.title?.rendered}</p>
                           </Link>
                        );
                     })}
                  </div>
               </div>
               <div className="mt-10 text-center text-lg font-[700] text-primary-4">
                  <a onClick={startProgress} href={`/category/${slug}`} className="text-center">
                     More on {title} News
                  </a>
               </div>
            </div>
            <div className="third col-span-1 mt-4 h-full md:mt-0">
               <div className=" flex h-full w-full items-center justify-center bg-[#D9D9D9] py-[2rem]">
                  <h3 className="text-lg font-[700] uppercase">Advert</h3>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomePageCategory;
