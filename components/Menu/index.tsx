import { useState } from "react";
import { useLockBodyScroll } from "lib/hooks/useLockBodyScroll";

import { createPortal } from "react-dom";
import { url } from "lib/utils";

interface INavDrop {}

const Menu = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   useLockBodyScroll(menuOpen);
   const ServicesData = [{ title: "Home", link: "/" }];
   const CompanyData = [
      { title: "About Us", link: "/about-us" },
      { title: "Contact Us", link: "/contact-us" },
   ];

   return (
      <>
         <div
            onClick={() => setMenuOpen(true)}
            className="relative z-[100] grid h-[3rem] w-[3rem] cursor-pointer place-items-center rounded-[3.5rem] border border-[#E8E7EA]
   bg-slate-100 transition-colors duration-300 ease-in-out active:bg-transparent
      "
         >
            {/* <img src={url(menuIcon?.src)} alt="" /> */}
            <img src={url("/svgs/menuIcon.svg")} alt="" />
         </div>
         {createPortal(
            <div
               className={`fixed z-[100] h-full ${
                  menuOpen ? `translate-x-0` : `!-translate-x-full`
               } bottom-0 left-0 right-0  top-0 z-10 flex w-[100vw] flex-col overflow-auto bg-white  transition-transform duration-300 ease-in-out`}
            >
               <div className="flex w-full items-center justify-between border-b border-b-gray-300 bg-primary-1 px-container-base pb-[0.75rem] pt-[1.5rem] md:pb-[1rem] lg:border-b-secondary-1">
                  <a href="/" className="flex items-center gap-4">
                     <img src={url("/images/logo.svg")} alt="" className="w-16 md:w-32" />
                  </a>

                  <svg
                     onClick={() => setMenuOpen(false)}
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="white"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-x"
                  >
                     <path d="M18 6 6 18" />
                     <path d="m6 6 12 12" />
                  </svg>
               </div>
               <div className="flex flex-col gap-[1.5rem] px-container-base py-[2rem]">
                  <div className="flex flex-col gap-[1rem]">
                     <h4 className="font-[700] text-secondary-2">Services</h4>
                     {ServicesData.map((i, idx) => (
                        <span key={idx} className="group cursor-pointer list-none">
                           <span className="cursor-pointer text-[15px] font-[500] leading-[1.5rem] tracking-[0.005rem] !text-secondary-5 transition-colors duration-300 ease-in-out group-hover:!text-secondary-2">
                              <a href={url(`${i?.link}`)}>{i?.title}</a>
                           </span>
                        </span>
                     ))}
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                     <h4 className="font-[700] text-secondary-2">Company </h4>
                     {CompanyData.map((i, idx) => (
                        <span key={idx} className="group cursor-pointer list-none">
                           <span className="cursor-pointer text-[15px] font-[500] leading-[1.5rem] tracking-[0.005rem] !text-secondary-5 transition-colors duration-300 ease-in-out group-hover:!text-secondary-2">
                              <a href={url(`${i?.link}`)}>{i?.title}</a>
                           </span>
                        </span>
                     ))}
                  </div>
               </div>

               {/* <div className="mb-5 mt-14 flex  items-center   justify-center gap-4 transition-all duration-500 ease-in-out md:mb-0 md:ml-[-6px]">
                  <a href="https://app.assistant.timbu.cloud/create-account" className="">
                     <div className="flex items-center  justify-center gap-2 rounded-lg bg-primary-1 px-4 py-2 pr-6">
                        <div>
                           <a className="block px-6 py-2 text-base font-semibold tracking-wider text-white">
                              Sign Up
                           </a>
                        </div>
                     </div>
                  </a>
                  <a href="https://app.assistant.timbu.cloud/login" className="">
                     <div className="flex items-center justify-center gap-2 rounded-lg  bg-primary-1 px-4 py-2 pr-6">
                        <div>
                           <a className="block px-6 py-2 text-base font-semibold tracking-wider text-white">
                              Login
                           </a>
                        </div>
                     </div>
                  </a>
               </div> */}
            </div>,
            document.body,
         )}
      </>
   );
};

export default Menu;
