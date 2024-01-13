import React from "react";

import { url } from "@/lib/utils";

import { Bookmark, ArrowDownUp } from "lucide-react";

const EditorsPick = () => {
   return (
      <section className="container w-full max-w-[1700px] grid-cols-3 gap-20 border-t border-[#000] px-container-base py-[3rem] dark:border-white md:grid lg:px-container-lg xl:px-container-xl">
         <div className="col-span-2 flex flex-col gap-6 ">
            <h4 className="text-lg font-[700]">Editor’s pick</h4>
            <img
               src={url("/images/landing/editorsPick/automobiles.svg")}
               alt="automobiles"
               className="w-full"
            />
            <div className="flex justify-between">
               <div className="flex gap-6 ">
                  <button className="rounded-full border border-primary-4 px-[2rem] py-[.5rem]">
                     Tech
                  </button>
                  <button className="rounded-full border bg-[#DDD] px-[2rem] py-[.5rem] dark:bg-[#2F2F2F]">
                     Science
                  </button>
               </div>
               <button className="rounded-full border bg-[#DDD] p-[.7rem] font-[1rem] dark:bg-[#2F2F2F]">
                  <Bookmark />
               </button>
            </div>
            <h2 className="text-lg font-[700]">
               TRADE IN AUTOMOBILES SECTOR INCREASED WITH HIGH RATE
            </h2>
            <p className="text-base font-[400] text-[#0000009e] dark:text-[#d9d9d9b3]">
               New trade news, gets investor happy about the real increase profit in trade.
               Investors who has traded automobiles in the recent years has gained a margin profit
               in the stock. The CAP of automobiles increased drastically when the new cybertruck by
               TESLA was been released to the new market of vehicles, it is known that the owner,
               Elon Musk has been a tycoon and business owner whose companies include, the boring
               inc, twitter, spacex and so on the improvement of the vehicles really helped in the
               stock increase...
               <a href="#" className="font-[700] text-primary-4">
                  Read more
               </a>
            </p>
         </div>
         <div className=" md:mt col-span-1 mt-10 flex flex-col gap-6">
            <img src={url("/images/landing/editorsPick/tesla.svg")} className="w-full" />
            <h2 className="text-lg font-[700]">Tesla cheapest cybertruck will cost $60,990</h2>
            <p className="text-base font-[400] text-[#0000009e] dark:text-[#d9d9d9b3]">
               Tesla Inc. eventually delivered its first Cybertrucks, which were reminiscent of
               Blade Runner, to consumers after decades of research delays and production
               difficulties. On the 30th of November, Chief Executive Officer Elon Musk gave a few
               pickup trucks to owners, one of whom was Alexis Ohanian, who was also a co-founder of
               Reddit. In a long-awaited update on pricing and features, the manufacturer said that
               they have estimated that the base model will cost US$60,990.{" "}
            </p>
            <a href="#" className="flex items-center gap-2 text-base font-[400] text-primary-4">
               <span>READ MORE</span>
               <ArrowDownUp />
            </a>
         </div>
      </section>
   );
};

export default EditorsPick;
