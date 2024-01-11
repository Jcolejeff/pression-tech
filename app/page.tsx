"use client";
import Link from "next/link";
import LandingHero from "@/components/landing/hero";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ForClients from "@/components/landing/ForClients";
import ForTalents from "@/components/landing/ForTalents";
import LatestPosts from "@/components/landing/LatestPosts";
import WhereOurMerchantsAre from "@/components/WhereOurMerchantsAre";
import BusinessSelection from "@/components/BusinessSelection";
import TextFormat from "@/lib/helpers/TextFormat";
import EditorsPick from "@/components/landing/EditorsPick";
import FeaturedArticles from "@/components/landing/FeaturedArticles";
import Trending from "@/components/landing/Trending";
import Newsletter from "@/components/landing/Newsletter";
import Finance from "@/components/landing/Finance";
import FeaturedPosts from "@/components/landing/FeaturedPosts";

export default function Home() {
   const [switchMode, setSwitchMode] = useState<string>("talents");

   const checkModeToRender = () => {
      if (switchMode === "talents") {
         return <ForTalents />;
      } else {
         return <ForClients />;
      }
   };

   return (
      <div className="h-full w-full">
         <LandingHero />

         {/* toggle buttons for talents and clients */}
         {/* <section className=" mb-6 flex  w-full justify-center">
            <div className=" flex  w-fit justify-center gap-4 rounded-full bg-slate-100 px-4 py-2">
               <Button
                  onClick={() => setSwitchMode("talents")}
                  className={`${
                     switchMode === "talents"
                        ? " bg-primary-1"
                        : "bg-transparent text-gray-400 hover:text-white"
                  } rounded-full px-8 py-3 transition-all duration-300 ease-linear`}
               >
                  For Talents
               </Button>
               <Button
                  onClick={() => setSwitchMode("clients")}
                  className={`${
                     switchMode === "clients"
                        ? " bg-primary-1"
                        : "bg-transparent text-gray-400 hover:text-white"
                  } rounded-full px-8 py-3 transition-all duration-300 ease-linear`}
               >
                  For Clients
               </Button>
            </div>
         </section>
         <section>{checkModeToRender()}</section> */}

         {/* <section className="container relative my-24  w-full max-w-[1700px]  overflow-x-hidden px-container-base lg:px-container-lg xl:px-container-xl">
            <div className="">
               <h2 className="text-[2rem]  font-[600] leading-[130%] tracking-[0.02rem] transition-all duration-500 ease-in-out md:text-[3rem] md:leading-[4rem] md:tracking-[0.0225rem]">
                  <TextFormat
                     text={`Record, sell and Streamline Transations`}
                     keyword={"Streamline Transations"}
                     keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                  />
               </h2>
            </div>
            <ReviewSlide />
            <BusinessSelection />
            <WhereOurMerchantsAre />
         </section> */}
         <LatestPosts />
         <EditorsPick />
         <FeaturedArticles />
         <Trending />
         <Newsletter />
         <Finance />
         <FeaturedPosts />
      </div>
   );
}
