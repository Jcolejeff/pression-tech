import { Input } from "components/ui/input";
import { capitalizeFirstLetter } from "lib/helpers";
import { url } from "lib/utils";
import { FooterLinksData } from "./data";
interface IFooter {}

const Footer = ({}: IFooter) => {
   return (
      <div className="container relative  flex w-full  max-w-[1700px] flex-col  bg-black px-container-base py-[5rem] lg:px-container-lg xl:px-container-xl">
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
         <div className=" mb-8  flex flex-col-reverse justify-between gap-8 border-b border-white/80 py-6 pt-9 md:flex-row md:gap-0">
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
         </div>
      </div>
   );
};

export default Footer;
