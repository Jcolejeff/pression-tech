import React from "react";
import LogoMarquee from "../LogoSlide";
import Image from "next/image";
import arrowImg from "@/public/images/landing/arrow.svg";

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
      <div className="w-full ">
         <section className="mt-20 w-full overflow-hidden bg-primary-1 text-white">
            <section className="container relative w-full max-w-[1700px] px-container-base py-[3rem] pb-20 md:py-[5rem] md:pb-[7.25rem] md:pt-[6rem] lg:px-container-lg xl:px-container-xl">
               <div className="relative flex w-full flex-col justify-center gap-[2.5rem] md:gap-[2.75rem]">
                  <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8">
                     <h1 className="text-center  text-[2.3rem] font-[700] uppercase leading-[130%] tracking-[0.02rem] transition-all duration-500 ease-in-out md:max-w-[60rem] md:text-[4.4rem] md:leading-[5rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem]">
                        we equip Techies With hands-on experience!
                     </h1>

                     <h2 className=" max-w-[48.875rem] text-center text-[0.7rem] font-[500] leading-[1.5rem] md:text-[0.8rem] md:leading-[1.5rem] xxl:max-w-[55.875rem] xxl:text-[0.9rem]">
                        We offer a transformative 2-month internship, where we amplify skills,
                        cultivate networks, and immerse participants in real projects. Tailored for
                        those with prior knowledge, its a hands-on journey to practical expertise.
                     </h2>
                     <div className="flex items-center gap-4 rounded-full bg-white px-6 py-3">
                        <p className="text-sm font-[500] text-black md:text-sm">
                           Scroll to Learn More!
                        </p>
                        <Image src={arrowImg} alt="" />
                     </div>
                  </div>
               </div>
            </section>
         </section>
         <div className="flex flex-col items-center gap-8 py-12  transition-all duration-500 ease-in-out">
            <h3 className="text-sm font-[800] uppercase text-black dark:text-white md:text-xl ">
               our finalists work at
            </h3>
            <LogoMarquee images={images} />
         </div>
      </div>
   );
};

export default LandingHero;
