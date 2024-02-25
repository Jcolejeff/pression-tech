"use client";
/* eslint-disable @next/next/no-img-element */
import Related from "@/components/Related";
import Link from "next/link";
import React from "react";
import EmptyContentWrapper from "components/Loaders/EmptyContentWrapper";
import ContentLoader from "components/Loaders/ContentLoader";
import { useState, useEffect } from "react";
import { wordPressInstance } from "@/lib/http";

const RelatedNews = ({ category, itemId }: { category: any; itemId: any }) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [data, setData] = useState([]);

   const getRelatedNews = async () => {
      try {
         const data = await wordPressInstance
            .posts()
            .categories(category?.id)

            .perPage(6)
            .page(1)
            .embed();

         setData(data.filter((i: any) => i?.id !== itemId));
      } catch (error) {
         setData([]);
         console.log(error);
      }

      setLoading(false);
   };

   useEffect(() => {
      getRelatedNews();
   }, []);

   return (
      <section className="mt-6 px-5 md:mt-20">
         <div className="flex items-center justify-between border-b border-t border-black px-container-base py-4 dark:border-white md:py-10 lg:px-container-lg xl:px-container-xl">
            <h2 className="text-sm font-[700] md:text-xl ">RELATED NEWS</h2>
            <Link
               href={`/category/${category?.slug}`}
               className="border border-[#0851BD] p-2 text-[0.6rem] font-[700] uppercase text-[#0851BD] md:p-4 md:text-base"
            >
               See all
            </Link>
         </div>
         <div className="mt-10  lg:px-container-lg xl:px-container-xl">
            <div className="grid gap-10 md:grid-cols-3">
               <EmptyContentWrapper
                  isEmpty={data?.length < 1}
                  customMessage="No Similar Items at the moment"
               >
                  <ContentLoader isLoading={loading}>
                     {data?.map((i: any, idx) => (
                        <Link href={`/${i?.slug}`} key={idx} className="flex flex-col gap-2">
                           <img
                              src={i?.jetpack_featured_media_url}
                              alt="blog img"
                              className="w-full"
                           />
                           <p className="text-lg font-[700]">{i?.title.rendered}</p>
                        </Link>
                     ))}
                  </ContentLoader>
               </EmptyContentWrapper>
            </div>
         </div>
      </section>
   );
};

export default RelatedNews;
