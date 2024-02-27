"use client";
import React from "react";
import LogoMarquee from "../LogoSlide";
import Image from "next/image";
import arrowImg from "@/public/images/landing/arrow.svg";
import heroBg from "@/public/images/landing/Mask group.svg";
import { url } from "@/lib/utils";
import ReviewSlide from "@/components/ReviewsSlide";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { wordPressInstance } from "@/lib/http";
import { get } from "http";
import Link from "next/link";

const LandingHero = ({ heroData }: { heroData: any }) => {
   return (
      <div className="w-full">
         <section className="bg  w-full overflow-hidden bg-[url('/herobg3.jpg')]  bg-cover bg-center bg-no-repeat text-white md:bg-[url('/herobg2.jpg')]">
            <section className="container  relative w-full max-w-[2100px]  px-container-base py-[3rem] pb-20 md:py-[5rem] md:pb-[7.25rem] md:pt-[6rem] lg:pl-container-lg xl:pl-container-xl">
               <div className="invisible items-center border md:hidden">
                  <Input
                     type="text"
                     className="border-none placeholder-white focus:text-white"
                     placeholder="want to read on a news?"
                  />
                  <Search width={"3rem"} />
               </div>

               <div className=" mt-10 md:max-w-[50%]">
                  <h4 className="text-sm font-[700] md:text-[1.2rem]">
                     {heroData[0]?._embedded["wp:term"][0][0]?.name}
                  </h4>
                  <h2 className="mt-2 text-[1.6rem] md:text-[2rem]">
                     {heroData[0]?.title?.rendered}
                  </h2>
               </div>
               <Link href={`/${heroData[0]?.slug}`} className="mt-10 block">
                  <span className=" border p-[1rem] text-xs md:text-base">
                     <a>Continue Reading</a>
                  </span>
               </Link>
               <div className="relative ml-[30%] mt-[2rem] hidden flex-col md:flex">
                  <h4 className="mb-3 pl-3 text-base font-[700] uppercase">Hot news</h4>
                  <ReviewSlide heroData={heroData?.slice(1)} />
               </div>
            </section>
         </section>
      </div>
   );
};

export default LandingHero;
