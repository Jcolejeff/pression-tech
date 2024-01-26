import Related from "@/components/Related";
import Link from "next/link";
import React from "react";

const RelatedNews = () => {
   return (
      <section className="mt-20 px-5">
         <div className="flex justify-between border-b border-t border-black px-container-base py-10 dark:border-white lg:px-container-lg xl:px-container-xl">
            <h2 className="text-lg font-[700] md:text-3xl ">RELATED NEWS</h2>
            <Link
               href="#"
               className="border border-[#0851BD] p-1 font-[700] uppercase text-[#0851BD] md:text-lg"
            >
               See all
            </Link>
         </div>
         <div className="mt-10 px-container-base lg:px-container-lg xl:px-container-xl">
            <Related />
         </div>
      </section>
   );
};

export default RelatedNews;
