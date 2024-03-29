/* eslint-disable @next/next/no-img-element */
import { timeSincePublished, url } from "@/lib/utils";
import React from "react";

import { ArrowDown } from "lucide-react";
import Heading from "@/components/Heading";
import Link from "next/link";
import { findAuthorName } from "@/lib/constants";

const FeaturedPosts = ({ featuredArticlesData }: { featuredArticlesData: any }) => {
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
      <section className="container  max-w-[2100px] border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <Heading title="Featured Post" />
         <div className="mb-52 mt-6 gap-10 md:mb-40 md:flex">
            <div className="left flex w-full flex-col gap-8">
               {featuredArticlesData?.slice(0, 3)?.map((post: any, index: number) => {
                  const primaryCategory =
                     post?._embedded["wp:term"][0].find(
                        (i: any) => i?.id === post?.categories[0],
                     ) || "";
                  return (
                     <Link href={`/${post?.slug}`} key={index} className="flex flex-col gap-4">
                        <div className="ml-[1.5rem] flex items-center gap-4">
                           <span className="text-base font-[700]">
                              {primaryCategory?.name || "News"}
                           </span>
                           <span className="text-sm font-[400]">
                              {/* {post?.date} */}8 min read
                           </span>
                        </div>
                        <div className="flex gap-[.5rem] font-[700]">
                           <span className="text-xl font-[700]">
                              <ArrowDown className=" -rotate-45" />
                           </span>
                           <h4 className="text-xl font-[700] ">{post?.title?.rendered}</h4>
                        </div>
                     </Link>
                  );
               })}
            </div>
            <div className="relative mt-10 flex h-full w-full flex-col gap-6 md:mt-0">
               <img
                  src={featuredArticlesData[3]?.jetpack_featured_media_url}
                  className="h-full"
                  alt=""
               />

               <Link
                  href={`/${featuredArticlesData[3]?.slug}`}
                  className="absolute left-[10%] top-[70%] flex max-w-[80%] flex-col gap-3 bg-white p-4  dark:bg-black md:left-[15%] md:max-w-[70%] md:p-8"
                  style={{
                     // top: "70%",
                     // left: "15%",
                     boxShadow: "-11px 18px 11.3px 0px rgba(111, 100, 100, 0.25)",
                  }}
               >
                  <div className=" flex items-center gap-4">
                     <span className="text-lg font-[700]">
                        {(() => {
                           const primaryCategory =
                              featuredArticlesData[3]?._embedded["wp:term"][0].find(
                                 (i: any) => i?.id === featuredArticlesData[3]?.categories[0],
                              ) || "";
                           return primaryCategory?.name || "News";
                        })()}
                     </span>
                     <span className="hidden text-base font-[400] md:block">
                        {/* {featuredArticlesData[3]?.date} */} 10 min read
                     </span>
                  </div>
                  <h4 className="text-xl font-[700]">{featuredArticlesData[3]?.title?.rendered}</h4>
                  <div className="flex flex-col gap-1">
                     <span className="text-sm font-[700] text-primary-4">
                        {findAuthorName(featuredArticlesData[3]?.author)}
                     </span>
                     <span className="text-sm font-[400] text-[#00000070]">
                        {timeSincePublished(featuredArticlesData[3]?.date)}
                     </span>
                  </div>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default FeaturedPosts;
