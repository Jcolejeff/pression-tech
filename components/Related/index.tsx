/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";


const Related = () => {
   const posts = [
      {
         image: "/images/landing/latestPosts/post1.svg",
         text: "Tesla Newly cybertruck amazed citizen with it AI features",
      },
      {
         image: "/images/landing/latestPosts/post2.svg",
         text: "Tesla Newly cybertruck amazed citizen with it AI features",
      },
      {
         image: "/images/landing/latestPosts/post1.svg",
         text: "Tesla Newly cybertruck amazed citizen with it AI features",
      },
   ];
   return (
      <div>
         <div className="grid gap-10 md:grid-cols-3">
            {posts.map((post, index) => {
               return (
                  <Link href='/articles'  key={index} className="flex flex-col gap-2">
                     <img src={post.image} alt="blog img" className="w-full" />
                     <p className="text-lg font-[700]">{post.text}</p>
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Related;
