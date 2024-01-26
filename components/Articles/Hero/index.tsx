import React from "react";

const Hero = () => {
   const buttons = ["Tech", "Science", "Software", "Electronics"];

   const articleDetails = [
      {
         heading: "Date",
         detail: "16 Jun 2024",
      },
      {
         heading: "Category",
         detail: "Science, Tech",
      },
      {
         heading: "Reading time",
         detail: "10 Mins",
      },
   ];

   return (
      <section>
         <div className="mt-28 flex gap-6">
            {buttons.map((item, index) => {
               return (
                  <button
                     key={index}
                     className="color-[#000] rounded-[24px] border border-primary-4 px-6 py-2 font-[400]"
                  >
                     {item}
                  </button>
               );
            })}
         </div>
         <div className="grid-cols-4 md:grid">
            <div className="col-span-3 flex justify-end border-[#000] pb-10 pt-10 dark:border-white md:border-r md:pr-10">
               <div className=" md:max-w-[70%] ">
                  <h2 className="text-4xl font-[700]">
                     Chat-GPT officially get web search as DALL-E3 integration arrives
                  </h2>
                  <p className="mt-4 text-base font-[400] text-[#0000009e] dark:text-[#ffffffc7]">
                     OpenAI has formally launched its internet browsing feature to ChatGPT, some
                     three weeks after re-introducing the feature in beta after several months in
                     hiatus. ChatGPT, the generative AI chatbot t...
                  </p>
               </div>
            </div>
            <div className="col-span-1 flex flex-col gap-6 pl-5">
               {articleDetails.map((item, index) => {
                  return (
                     <div key={index} className="flex flex-col gap-2">
                        <span className=" text-base font-[400] text-[#0000009e] dark:text-[#ffffff99]">
                           {item.heading}
                        </span>
                        <span className=" text-base font-[700] text-[#000] dark:text-white">
                           {item.detail}
                        </span>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Hero;
