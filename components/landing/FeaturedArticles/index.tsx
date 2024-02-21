/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/Heading";
import { url } from "@/lib/utils";
import React from "react";
import { findAuthorName, users } from "@/lib/constants";
import Link from "next/link";

const FeaturedArticles = ({ featuredArticlesData }: { featuredArticlesData: any }) => {
   return (
      <section className="container w-full max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <Heading title="Featured articles" />
         <div className="mt-6 grid-cols-2 gap-20 md:grid">
            <div className=" flex flex-col gap-10">
               {featuredArticlesData?.slice(0, 3)?.map((item: any, index: any) => {
                  return (
                     <Link
                        href={`/${item?.slug}`}
                        key={index}
                        className="flex gap-6   border-b border-[#0000008f] py-8 dark:border-white "
                     >
                        <div className="h-full min-w-[40%] max-w-[40%] ">
                           <img
                              src={item?.jetpack_featured_media_url}
                              alt={findAuthorName(item.author)}
                              className="max-h-full min-h-full w-full"
                           />
                        </div>
                        <div className="flex max-w-fit flex-col gap-5">
                           <span className="text-sm font-[700] text-[#00000080] dark:text-white">
                              {item?.date}
                           </span>
                           <h3 className="text-lg font-[700] ">{item?.title?.rendered}</h3>

                           <span className="text-base font-[700] text-primary-4 ">
                              By {findAuthorName(item.author)}
                           </span>
                        </div>
                     </Link>
                  );
               })}
            </div>
            <Link
               href={`/${featuredArticlesData[3]?.slug}`}
               className="mt-10 flex flex-col gap-8 md:mt-0"
            >
               <div className="w-full">
                  <img
                     src={featuredArticlesData[3]?.jetpack_featured_media_url}
                     className="w-full"
                     alt=""
                  />
               </div>
               <h2 className="text-xl font-[700]">{featuredArticlesData[3]?.title?.rendered}</h2>
               <p
                  className="text-base font-[400] text-[#0000009e] dark:text-white"
                  dangerouslySetInnerHTML={{ __html: featuredArticlesData[3]?.excerpt?.rendered }}
               />

               <span className="text-sm font-[700] text-[#000] dark:text-white">
                  {featuredArticlesData[3]?.date}
               </span>
               <Link
                  href={`/${featuredArticlesData[3]?.slug}`}
                  className="font-[700] text-primary-4"
               >
                  Read more
               </Link>
               <div className="mt-[3rem] flex w-full items-center justify-center bg-[#D9D9D9] py-[2rem]">
                  <h3 className="text-lg font-[700] uppercase">Avertisement</h3>
               </div>
            </Link>
         </div>
      </section>
   );
};

export default FeaturedArticles;
