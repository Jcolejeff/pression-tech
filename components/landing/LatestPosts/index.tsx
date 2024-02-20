/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import { useRef } from "react";
import { url } from "lib/utils";
import { RatIcon, StarIcon, Stars } from "lucide-react";
import Heading from "@/components/Heading";
import Related from "@/components/Related";
import Link from "next/link";

const LatestPosts = ({ latestPostsData }: { latestPostsData: any }) => {
   return (
      <section className="container flex max-w-[1700px] flex-col gap-6 px-container-base py-[3rem] lg:px-container-lg xl:px-container-xl">
         <Heading title="Latest Post" />
         <div className="grid gap-10 md:grid-cols-3">
            {latestPostsData?.map((post: any, index: number) => {
               return (
                  <Link href={`/${post?.slug}`} key={index} className="flex flex-col gap-4">
                     <img
                        src={post?.jetpack_featured_media_url}
                        alt="blog img"
                        className="h-[13rem] w-full object-cover object-center"
                     />
                     <p className=" text-lg font-[700]">{post?.title?.rendered}</p>
                  </Link>
               );
            })}
         </div>
      </section>
   );
};

export default LatestPosts;
