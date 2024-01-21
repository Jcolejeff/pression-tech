import React from "react";

const Highlights = () => {
   const highlights = [
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         category: "Automobiles",
         date: "December 3, 2023",
         title: "Tesla tease new vehicle, cybertruck: says it is the new vogue car with high AI assistance.",
      },
      {
         image: "/images/landing/latestPosts/post2.svg",
         category: "Automobiles",
         date: "December 3, 2023",
         title: "Tesla tease new vehicle, cybertruck: says it is the new vogue car with high AI assistance.",
      },
      {
         image: "/images/landing/editorsPick/e-contract.svg",
         category: "Automobiles",
         date: "December 3, 2023",
         title: "Tesla tease new vehicle, cybertruck: says it is the new vogue car with high AI assistance.",
      },
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         category: "Automobiles",
         date: "December 3, 2023",
         title: "Tesla tease new vehicle, cybertruck: says it is the new vogue car with high AI assistance.",
      },
      {
         image: "/images/landing/latestPosts/post2.svg",
         category: "Automobiles",
         date: "December 3, 2023",
         title: "Tesla tease new vehicle, cybertruck: says it is the new vogue car with high AI assistance.",
      },
      {
         image: "/images/landing/editorsPick/e-contract.svg",
         category: "Automobiles",
         date: "December 3, 2023",
         title: "Tesla tease new vehicle, cybertruck: says it is the new vogue car with high AI assistance.",
      },
   ];
   return (
      <div className="my-10 ">
         <div className="grid-cols-2 gap-20 md:grid">
            {highlights.map((item, index) => {
               return (
                  <div key={index} className="mt-10 flex flex-col gap-5 ">
                     <div className="w-full md:h-[18rem]">
                        <img
                           src={item.image}
                           alt="highlight"
                           className="h-full w-full object-cover"
                        />
                     </div>
                     <div className="flex gap-4">
                        <span className="text-base font-[700] ">{item.category}</span>
                        <span className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                           {item.date}
                        </span>
                     </div>
                     <div className="">
                        <h2 className="text-xl font-[700] md:text-2xl">{item.title}</h2>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Highlights;
