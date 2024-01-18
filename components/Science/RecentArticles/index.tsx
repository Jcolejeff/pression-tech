import Heading from "@/components/Heading";
import React from "react";

const RecentArticles = () => {
   const articles = [
      {
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         author: "By Damilola oluwaseun",
      },
      {
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         author: "By Damilola oluwaseun",
      },
      {
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         author: "By Damilola oluwaseun",
      },
   ];
   return (
      <div className="mt-20">
         <Heading title="Recent Articles" />
         <div className="grid-cols-4  gap-10 md:grid">
            <div className=" col-span-3 mt-6 grid-cols-2 gap-10  md:grid">
               {articles.map((item, index) => {
                  return (
                     <div key={index} className="flex gap-6 py-4 dark:border-white ">
                        <div className="flex max-w-fit flex-col gap-4">
                           <span className="text-sm font-[700] text-[#00000080] dark:text-[#ffffffab]">
                              {item.time}
                           </span>
                           <h3 className="text-xl font-[700] ">{item.title}</h3>
                           <span className="text-base font-[700] text-primary-4 ">
                              {item.author}
                           </span>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className=" col-span-1 flex w-full items-center justify-center bg-[#D9D9D9]  ">
               {" "}
            </div>
         </div>
      </div>
   );
};

export default RecentArticles;
