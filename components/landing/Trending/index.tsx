import React from "react";

const Trending = () => {
   const trends = [
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         description:
            "You might not be familiar with the name Tomorro,but it is actually not a new startup. Tomorro is a French contract management platform that originally started as Leeway. And today, the company is ...",
      },
      {
         image: "/images/landing/editorsPick/yc.svg",
         time: "34 Minutes ago",
         title: "YC-backed fintech Bujeti raises $2M for its corporate cards and spend management platform",
         description:
            "African corporate cards and spend management platform Bujeti has raised $2 million in seed funding. The startup, involved with how African businesses, including SMBs, startups and enterprises, mana...",
      },
      {
         image: "/images/landing/editorsPick/e-contract.svg",
         time: "34 Minutes ago",
         title: "Commercial companies to collaborate with DARPA’S new lunar economy study",
         description:
            "Establishing commercial markets on the moon is going to require thinking a little differently. That’s DARPA’s hunch, anyway. DARPA (Defense Advanced Research Projects Agency) is the U.S. Department...",
      },
      {
         image: "/images/landing/editorsPick/e-signature.svg",
         time: "34 Minutes ago",
         title: "After e-signature, tom morro believes e-contract will be the next thing",
         description:
            "You might not be familiar with the name Tomorro,but it is actually not a new startup. Tomorro is a French contract management platform that originally started as Leeway. And today, the company is ...",
      },
      {
         image: "/images/landing/editorsPick/yc.svg",
         time: "34 Minutes ago",
         title: "YC-backed fintech Bujeti raises $2M for its corporate cards and spend management platform",
         description:
            "African corporate cards and spend management platform Bujeti has raised $2 million in seed funding. The startup, involved with how African businesses, including SMBs, startups and enterprises, mana...",
      },
      {
         image: "/images/landing/editorsPick/e-contract.svg",
         time: "34 Minutes ago",
         title: "Commercial companies to collaborate with DARPA’S new lunar economy study",
         description:
            "Establishing commercial markets on the moon is going to require thinking a little differently. That’s DARPA’s hunch, anyway. DARPA (Defense Advanced Research Projects Agency) is the U.S. Department...",
      },
   ];

   return (
      <section className="container w-full max-w-[1700px] border-t border-[#000] px-container-base py-[3rem] dark:border-white lg:px-container-lg xl:px-container-xl">
         <h4 className="text-lg font-[700]">Trending in Africa tech space</h4>
         <div className="mt-6 grid-cols-3 items-start gap-12 md:grid">
            {trends.map((trend, index) => {
               return (
                  <div key={index} className="mt-10 flex flex-col gap-4 md:mt-0">
                     <div className="w-full md:h-[15rem]">
                        <img src={trend.image} className="h-full w-full object-cover" />
                     </div>
                     <span className="text-base font-[700]">{trend.time}</span>
                     <h2 className="text-xl font-[700]">{trend.title}</h2>
                     <p className="mt-[.6rem] text-base font-[400] text-[#0000009e] dark:text-white">
                        {trend.description}{" "}
                        <a href="#" className="font-[700] text-primary-4">
                           Read more
                        </a>
                     </p>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Trending;
