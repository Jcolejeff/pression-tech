import React from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import { useRef } from "react";
import { url } from "lib/utils";
import { RatIcon, StarIcon, Stars } from "lucide-react";
import Heading from "@/components/Heading";
import Related from "@/components/Related";

const LatestPosts = () => {
   //    const slideRef = useRef<SlideshowRef>(null);
   //    const responsiveSettings = [
   //       {
   //          breakpoint: 800,
   //          settings: {
   //             slidesToShow: 2,
   //             slidesToScroll: 2,
   //          },
   //       },
   //       {
   //          breakpoint: 600,
   //          settings: {
   //             slidesToShow: 2,
   //             slidesToScroll: 2,
   //          },
   //       },
   //       {
   //          breakpoint: 300,
   //          settings: {
   //             slidesToShow: 1,
   //             slidesToScroll: 1,
   //          },
   //       },
   //    ];
   //    const buttonStyle = {
   //       width: "30px",
   //       background: "none",
   //       border: "0px",
   //    };

   //    const properties = {
   //       prevArrow: (
   //          <button style={{ ...buttonStyle }}>
   //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
   //                <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
   //             </svg>
   //          </button>
   //       ),
   //       nextArrow: (
   //          <button style={{ ...buttonStyle }}>
   //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
   //                <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
   //             </svg>
   //          </button>
   //       ),
   //    };
   //    const images = [
   //       "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   //       "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
   //       "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   //    ];

   //    const reviews = [
   //       {
   //          img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   //          text: ` “The Timbu Cash Register app is a game-changer for my store. From
   //                               quick transactions to detailed sales insights, it's become an integral
   //                               part of my business since 2019."`,
   //          date: "15 may 2023",
   //       },
   //       {
   //          img: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
   //          text: ` “It has revolutionized how I manage my transactions. It's not just an app; it's a financial partner. The speed and reliability are unmatched, making it an essential tool for any business owner!`,
   //          date: "25 june 2023",
   //       },
   //       {
   //          img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",

   //          text: ` ”Sending receipts, managing inventory, and managing debts trends have never been smoother. This app is a lifesaver for every cash register out there and I highly it, for small businesses."`,
   //          date: " 10 February 2023",
   //       },
   //    ];

   return (
      //   <section className="py-20 pb-12  lg:grid lg:grid-cols-3  lg:gap-8">
      //      <div className="   mb-8 h-fit rounded-2xl lg:mb-0 ">
      //         <div className="h-1  w-full rounded-full  bg-primary-1 md:h-2"></div>
      //         <div className="mt-4 flex flex-col justify-between gap-12 md:mt-8 lg:gap-24">
      //            <p className="max-w-xl   text-xl font-semibold">
      //               Here’s what users think about Timbu Cash Register and we are just getting started!
      //            </p>
      //            <p className="text-[4rem] font-[700] ">
      //               4.5
      //               <span className="text-base font-semibold">{"   "} out of 5 (Average Rating)</span>
      //            </p>
      //         </div>
      //      </div>
      //      <div className="col-span-2   w-full  ">
      //         <Slide
      //            // vertical
      //            arrows={false}
      //            ref={slideRef}
      //            slidesToScroll={1}
      //            slidesToShow={2}
      //            indicators={true}
      //            cssClass="py-4"
      //            {...properties}
      //            responsive={responsiveSettings}
      //         >
      //            {reviews.map((item, index) => {
      //               return (
      //                  <article
      //                     className="h-fit rounded-[2rem] border px-8 py-6 shadow-lg xl:mx-8 "
      //                     key={index}
      //                  >
      //                     <div className="space-y-2">
      //                        <div className="flex justify-between">
      //                           <div className="flex gap-2">
      //                              <StarIcon className="w-4 fill-current text-orange-400/80" />
      //                              <StarIcon className="w-4 fill-current text-orange-400/80" />
      //                              <StarIcon className="w-4 fill-current text-orange-400/80" />
      //                              <StarIcon className="w-4 fill-current text-orange-400/80" />
      //                              <StarIcon className="w-4 fill-current text-orange-400/80" />
      //                           </div>
      //                           <img src={item.img} alt="" className="h-10 w-10 rounded-full" />
      //                        </div>
      //                        <div>
      //                           <p className="text-base font-semibold">{item.text}</p>
      //                        </div>
      //                        <p className="text-sm">{item.date}</p>
      //                     </div>

      //                     {/* <span>Slide {index + 1}</span> */}
      //                  </article>
      //               );
      //            })}
      //         </Slide>
      //         <div className="my-4 flex items-center justify-end gap-6 lg:my-14">
      //            <button
      //               className=" rounded-full border border-gray-50/10 bg-slate-200 p-2  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-sm lg:p-3"
      //               type="button"
      //               onClick={() => slideRef?.current?.goBack()}
      //            >
      //               <img src={url("/images/products/cash-register/leftarrow.svg")} alt="" />
      //            </button>
      //            <button
      //               className=" rounded-full border border-gray-50/10 bg-slate-200 p-2  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-sm lg:p-3"
      //               type="button"
      //               onClick={() => slideRef?.current?.goNext()}
      //            >
      //               <img src={url("/images/products/cash-register/rightarrow.svg")} alt="" />
      //            </button>
      //         </div>
      //      </div>
      //   </section>
      <section className="container flex max-w-[1700px] flex-col gap-6 px-container-base py-[3rem] lg:px-container-lg xl:px-container-xl">
         <Heading title="Latest Post" />
         <Related />
      </section>
   );
};

export default LatestPosts;
