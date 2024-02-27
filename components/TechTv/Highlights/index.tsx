/* eslint-disable @next/next/no-img-element */
"use client";
import { formatDate } from "@/lib/utils";
import React from "react";
import Item from "./item";

const Highlights = ({ data }: { data: any }) => {
   const [showIframe, setShowIframe] = React.useState(false);

   return (
      <div className="my-10 px-container-base lg:px-container-lg xl:px-container-xl">
         <div className="grid-cols-2 gap-20 md:grid">
            {data?.map((item: any, index: number) => {
               return <Item key={index} item={item} />;
            })}
         </div>
      </div>
   );
};

export default Highlights;
