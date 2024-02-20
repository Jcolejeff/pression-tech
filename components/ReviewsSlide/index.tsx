/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import { useRef } from "react";
import { url } from "lib/utils";
import { RatIcon, StarIcon, Stars, ArrowLeft, ArrowRight } from "lucide-react";
import { log } from "console";
import Link from "next/link";
const ReviewSlide = ({ heroData }: { heroData: any }) => {
   const slideRef = useRef<SlideshowRef>(null);
   const responsiveSettings = [
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 300,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
   ];
   const buttonStyle = {
      width: "30px",
      background: "none",
      border: "0px",
   };

   const properties = {
      prevArrow: (
         <button style={{ ...buttonStyle }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
               <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
            </svg>
         </button>
      ),
      nextArrow: (
         <button style={{ ...buttonStyle }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
               <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
            </svg>
         </button>
      ),
   };
   const images = [
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
   ];

   const reviews = [
      {
         img: "/images/landing/latestPosts/post1.svg",
         text: "US senate warns apple product are been spied",
         category: "Tech",
      },
      {
         img: "/images/landing/latestPosts/post2.svg",
         text: "US senate warns apple product are been spied",
         category: "Tech",
      },
      {
         img: "/images/landing/editorsPick/e-contract.svg",
         text: "US senate warns apple product are been spied",
         category: "Tech",
      },
      {
         img: "/images/landing/latestPosts/post1.svg",
         text: "US senate warns apple product are been spied",
         category: "Tech",
      },
      {
         img: "/images/landing/latestPosts/post2.svg",
         text: "US senate warns apple product are been spied",
         category: "Tech",
      },
      {
         img: "/images/landing/editorsPick/e-contract.svg",
         text: "US senate warns apple product are been spied",
         category: "Tech",
      },
   ];

   return (
      <section className="relative hidden w-full justify-end border-t py-6 pb-12 md:flex">
         <div className="col-span-2   w-full ">
            <Slide
               // vertical
               arrows={false}
               autoplay={true}
               duration={2000}
               ref={slideRef}
               slidesToScroll={1}
               slidesToShow={3}
               indicators={true}
               cssClass="py-4"
               {...properties}
               responsive={responsiveSettings}
            >
               {heroData?.map((item: any, index: number) => {
                  return (
                     <Link
                        href={`/${item?.slug}`}
                        className="block h-fit shadow-lg md:mx-3"
                        key={index}
                     >
                        <div className="bg-white  dark:bg-black">
                           <div className="h-[10rem] min-w-full">
                              <img
                                 src={item?.jetpack_featured_media_url}
                                 alt=""
                                 className="h-full w-full object-cover"
                              />
                           </div>
                           <div className="flex flex-col gap-4 p-4">
                              <span className="text-xs font-[700] text-[#00000094] dark:text-[#ffffff94]">
                                 {item?._embedded["wp:term"][0][0]?.name}
                              </span>
                              <h4 className="text-lg font-[700] text-black dark:text-white">
                                 {item?.title?.rendered}
                              </h4>
                              <Link
                                 href={`/${item?.slug}`}
                                 className="text-sm text-[#00000078] dark:text-[#ffffff94]"
                              >
                                 Read more
                              </Link>
                           </div>
                        </div>

                        {/* <span>Slide {index + 1}</span> */}
                     </Link>
                  );
               })}
            </Slide>
            <div className="my-4  hidden items-center gap-6 lg:my-14">
               <button
                  className=" rounded-full border border-gray-50/10 bg-slate-200 p-2  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-sm lg:p-3"
                  type="button"
                  onClick={() => slideRef?.current?.goBack()}
               >
                  <ArrowLeft className="w-4 text-black" />
               </button>
               <button
                  className=" rounded-full border border-gray-50/10 bg-slate-200 p-2  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-sm lg:p-3"
                  type="button"
                  onClick={() => slideRef?.current?.goNext()}
               >
                  <ArrowRight className="w-4 text-black" />
               </button>
            </div>
         </div>
      </section>
   );
};

export default ReviewSlide;
