/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/Heading";
import { timeSincePublished } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Trending = ({ africanTrendingTechData }: { africanTrendingTechData: any }) => {
   return (
      <section className="container w-full max-w-[1700px] border-b border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <Heading title="Trending in Africa tech space" />
         <div className="mt-6 grid-cols-3 items-start gap-12 md:grid">
            {africanTrendingTechData?.map((trend: any, index: number) => {
               return (
                  <Link
                     href={`${trend?.slug}`}
                     key={index}
                     className="mt-10 flex flex-col gap-4 md:mt-0"
                  >
                     <div className="w-full md:h-[15rem]">
                        <img
                           alt="trend image"
                           src={trend?.jetpack_featured_media_url}
                           className="h-full w-full object-cover"
                        />
                     </div>

                     <span className="text-base font-[700]">{timeSincePublished(trend?.date)}</span>
                     <h2 className="text-xl font-[700]">{trend?.title?.rendered}</h2>

                     <div className="">
                        <p
                           className="mb-2 mt-[.6rem] text-base font-[400] text-[#0000009e] dark:text-white"
                           dangerouslySetInnerHTML={{ __html: trend?.excerpt?.rendered }}
                        />
                        <Link href={`${trend?.slug}`} className="inline font-[700] text-primary-4">
                           <span>READ MORE</span>
                        </Link>
                     </div>
                  </Link>
               );
            })}
         </div>
      </section>
   );
};

export default Trending;
