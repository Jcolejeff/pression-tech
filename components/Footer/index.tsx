import { Input } from "components/ui/input";
import { capitalizeFirstLetter } from "lib/helpers";
import { url } from "lib/utils";
import { FooterLinksData } from "./data";

import { ArrowRight, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
interface IFooter {}

const Footer = ({}: IFooter) => {
   return (
      <div className="container relative  flex w-full  max-w-[1700px] flex-col  bg-primary-4 ">
         {/* <div className="grid grid-cols-1 gap-[4rem]  border-b  border-b-secondary-8/40 pb-12 md:flex md:justify-between md:gap-[5.57rem] md:pb-[8.29rem]">
            <div className="  flex  flex-col  gap-8  ">
               <div className="">
                  <a href="/" className="flex items-center gap-4">
                     <img src={url("/images/logo.png")} alt="" className="w-12" />
                     <p className="text-2xl font-bold">App Assisant</p>
                  </a>
               </div>
            </div>
            {FooterLinksData?.map((i, idx) => (
               <div key={idx}>
                  <h6 className="mb-[1.25rem] text-[19px] text-xl  font-[700] leading-[2rem] tracking-[-0.0125rem]">
                     {capitalizeFirstLetter(i?.data?.category)}
                  </h6>
                  <p className="mb-4 text-[14px]  tracking-[0.00625rem] text-secondary-8">
                     {i?.body}
                  </p>
                  <ul className="flex flex-col gap-[0.83rem] ">
                     {i?.data?.links?.map((i: any, idx: any) => (
                        <li
                           key={idx}
                           className=" cursor-pointer text-[17px] tracking-[0.00625rem] transition-colors duration-300 ease-in-out  hover:text-secondary-3"
                        >
                           <a href={i?.url}>{i?.title}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}

         </div> */}
         {/* <div className=" mb-8  flex flex-col-reverse justify-between gap-8 border-b border-white/80 py-6 pt-9 md:flex-row md:gap-0">
            <p className="text-sm  leading-[2rem] tracking-[0.00625rem] text-white/80">
               © {new Date().getFullYear()} HNG Internship. All rights reserved.
            </p>
            <div className="flex    gap-2">
               <img src={url("/images/footer/fb.svg")} alt="" />
               <img src={url("/images/footer/insta.svg")} alt="" />
               <img src={url("/images/footer/link.svg")} alt="" />
               <img src={url("/images/footer/x.svg")} alt="" />
            </div>
         </div>
         <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8">
            <p className="text-center text-[2.3rem] font-[700] uppercase leading-[130%] tracking-[0.02rem] text-white transition-all duration-500 ease-in-out md:max-w-[60rem] md:text-[4.4rem] md:leading-[5rem] md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[6.4rem]">
               HNG Internship
            </p>
         </div> */}
         <div className="mt-[3rem] px-container-base lg:px-container-lg xl:px-container-xl">
            <h4 className="text-[1.5rem] font-[700] text-white ">Techpression</h4>
         </div>
         <div className=" mt-[2rem] border-b border-t border-white lg:px-container-lg xl:px-container-xl">
            <div className="border-l px-container-base py-[2rem] md:ml-[3rem] lg:ml-[6rem] ">
               <div className="items-end md:flex md:justify-between">
                  <h2 className="w-full text-[1.7rem] font-[700] text-white md:text-[3rem]">
                     Newsletter <br />
                     Signup
                  </h2>
                  <div className=" mt-[1rem] flex w-full items-center gap-10 md:mt-[0] ">
                     <Input
                        type="email"
                        placeholder="Your Email Address"
                        style={{
                           border: "none",
                           borderBottom: "3px solid white",
                           borderRadius: "0",
                        }}
                        className="text-lg placeholder-white focus:text-white"
                     />
                     <span className="cursor-pointer border p-[.7rem] text-[.8rem] text-white md:p-[1rem] md:text-[1.5rem]">
                        <ArrowRight />
                     </span>
                  </div>
               </div>
               <div className="mt-10 gap-10 md:flex">
                  <p className="w-full text-[1rem] font-[400] text-white md:text-lg">
                     TechPression is a future-focused publication that speaks to African innovation
                     and technology in depth
                  </p>
                  <div className="mt-10 flex w-full gap-20 md:mt-[0]">
                     <ul className="text-[1rem] font-[400] text-white md:text-lg">
                        <li>Tech</li>
                        <li>Cryptocurrency</li>
                        <li>Gadget</li>
                        <li>Startups</li>
                        <li>African Tech</li>
                     </ul>
                     <ul className="text-[1rem] text-white md:text-lg">
                        <li>Tech</li>
                        <li>Cryptocurrency</li>
                        <li>Gadget</li>
                        <li>Startups</li>
                        <li>African Tech</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-between border-white px-10 md:gap-[62%] md:px-0 lg:px-container-lg xl:px-container-xl">
            <div className="flex gap-6 pb-[4rem] pt-[2rem] md:ml-[3rem] md:border-l lg:ml-[6rem]">
               <Link href="#" className="text-[1.2rem] text-white md:text-[1.5rem]">
                  <Facebook />
               </Link>
               <Link href="#" className="text-[1.2rem] text-white md:text-[1.5rem]">
                  <Twitter />
               </Link>
               <Link href="#" className="text-[1.2rem] text-white md:text-[1.5rem]">
                  <Youtube />
               </Link>
            </div>
            <div className="pb-[4rem] pt-[2rem]">
               <span className="text-[1rem] font-[400] text-white md:text-lg">Copyright</span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
