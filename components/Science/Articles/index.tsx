import React from "react";

const Articles = () => {
   const articles = [
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         description:
            "OpenAI has formally launched its internet browsing feature to ChatGPT, some three weeks after re-introducing the feature in beta after several months in hiatus. ChatGPT, the generative AI chatbot t...",
         title: "Chat-GPT officially get web search as DALL-E3 integration arrives",
         author: "By Damilola oluwaseun",
      },
      {
         image: "/images/landing/latestPosts/post2.svg",
         description:
            "OpenAI has formally launched its internet browsing feature to ChatGPT, some three weeks after re-introducing the feature in beta after several months in hiatus. ChatGPT, the generative AI chatbot t...",
         title: "Chat-GPT officially get web search as DALL-E3 integration arrives",
         author: "By Damilola oluwaseun",
      },
      {
         image: "/images/landing/editorsPick/e-contract.svg",
         description:
            "OpenAI has formally launched its internet browsing feature to ChatGPT, some three weeks after re-introducing the feature in beta after several months in hiatus. ChatGPT, the generative AI chatbot t...",
         title: "Chat-GPT officially get web search as DALL-E3 integration arrives",
         author: "By Damilola oluwaseun",
      },
   ];

   return (
      <div className="mt-20 ">
         <div className="border-2 border-primary-4 ">
            <div className=" flex flex-col gap-10 ">
               {articles.map((item, index) => {
                  return (
                     <div
                        key={index}
                        className="gap-6 border-t border-[#0851bd8a] p-4  py-10 dark:border-[#095bd58a] md:flex lg:px-20"
                     >
                        <div className="h-[12rem] w-full md:min-w-[35%] md:max-w-[35%]">
                           <img
                              src={item.image}
                              alt={item.author}
                              className="max-h-full min-h-full w-full object-cover"
                           />
                        </div>
                        <div className="mt-10 flex max-w-fit flex-col gap-5 md:mt-0">
                           <h3 className="text-xl font-[700] ">{item.title}</h3>
                           <span className="text-sm font-[700] text-[#00000080] dark:text-[#ffffff9e]">
                              {item.description}
                           </span>
                           <span className="text-base font-[700]  ">{item.author}</span>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* ----------Advertisement-------- */}
         <div className="mb-20 mt-20 flex w-full items-center justify-center bg-[#D9D9D9] p-10 dark:bg-[#333] md:px-40 md:py-20">
            <h4 className="text-lg font-[700] uppercase">Advertisement post</h4>
         </div>
      </div>
   );
};

export default Articles;
