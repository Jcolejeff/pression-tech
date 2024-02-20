import React from "react";
import LogoMarquee from "../LogoSlide";
import Image from "next/image";
import arrowImg from "@/public/images/landing/arrow.svg";
import heroBg from "@/public/images/landing/Mask group.svg";
import { url } from "@/lib/utils";
import ReviewSlide from "@/components/ReviewsSlide";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const LandingHero = () => {
   const images = [
      "/images/landing/buffer.svg",
      "/images/landing/stripe.svg",
      "/images/landing/netflix.svg",
      "/images/landing/dropbox.svg",
      "/images/landing/hub.svg",
      "/images/landing/framer.svg",
   ];
   return (
      <div className="w-full">
         <section className="bg mt-20 w-full overflow-hidden bg-[url('/herobg3.jpg')]  bg-cover bg-center bg-no-repeat text-white md:bg-[url('/herobg2.jpg')]">
            <section className="container  relative w-full max-w-[1700px]  px-container-base py-[3rem] pb-20 md:py-[5rem] md:pb-[7.25rem] md:pt-[6rem] lg:pl-container-lg xl:pl-container-xl">
               <div className="flex items-center border md:hidden">
                  <Input
                     type="text"
                     className="border-none placeholder-white focus:text-white"
                     placeholder="want to read on a news?"
                  />
                  <Search width={"3rem"} />
               </div>

               <div className=" mt-10 md:max-w-[50%]">
                  <h4 className="text-[1.2rem] font-[700]">Science</h4>
                  <h2 className="mt-2 text-[2rem]">
                     Artificial intelligence taking over with astonishing image generator, gained
                     more awareness in non-fungible token
                  </h2>
               </div>
               <div className="mt-10">
                  <span className=" border p-[1rem]">
                     <a>Continue Reading</a>
                  </span>
               </div>
               <div className="relative ml-[30%] mt-[-4rem] hidden flex-col md:flex">
                  <h4 className="mb-3 pl-3 text-base font-[700] uppercase">Hot news</h4>
                  <ReviewSlide />
               </div>
            </section>
         </section>
      </div>
   );
};

export default LandingHero;
