/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import NavDrop from "../NavDrop";
import { ModeToggle } from "@/components/mode-toggle";

import { url } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import menuDotsClosed from "@/public/svgs/menuDotsClosed.svg";
import menuDotsOpened from "@/public/svgs/menuDotsOpened.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Search } from "lucide-react";
import { startProgress } from "../ProgressBarChecker/Events";

interface Props {
   darkNavBg?: boolean;
}
const Menu = dynamic(
   () => import("../Menu"), // Replace './Menu' with the actual path
   { ssr: false },
);

const menuItems = [
   {
      name: "HOME",
      link: "/",
      component: "/",
   },
   {
      name: "COHORTS",
      link: "/cohorts",
   },
   {
      name: "HIRE TALENTS",
      link: "hireTalents",
   },
   {
      name: "BUILD A TEAM",
      link: "/buildTeam",
   },
];

const NavBar: React.FC<Props> = ({ darkNavBg }) => {
   const menuRef = useRef<HTMLDivElement>(null);
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const currentURL = usePathname();

   useEffect(() => {
      const handleClick = (event: MouseEvent): void => {
         if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
         } else {
            setIsMenuOpen(!isMenuOpen);
         }
      };

      document.addEventListener("click", handleClick);

      return () => {
         document.removeEventListener("click", handleClick);
      };
   }, [menuRef, isMenuOpen]);

   // console.log(currentURL);
   return (
      <nav className="container max-w-[2100px]  px-container-base lg:px-container-lg xl:px-container-xl">
         <div className="flex w-full items-center justify-between py-[0.62rem] md:pb-[1rem] md:pt-[0.5rem] lg:border-b-secondary-1 lg:py-5 xxl:py-4 xxl:pt-5">
            <div className="flex w-full items-center gap-[2.5rem]">
               <a onClick={startProgress} href="/" className="flex items-center gap-2">
                  <img src={url("/images/logo.svg")} alt="" className=" w-8 md:w-10 " />
                  <p className="text-[0.74rem] font-semibold text-white md:text-base">
                     TechPression
                  </p>
               </a>
            </div>

            <div className="invisible ml-[-6px] flex items-center justify-end gap-4 transition-all duration-500 ease-in-out md:visible md:mb-0 md:w-1/2">
               <div className="hidden items-center gap-[0.5rem] lg:flex">
                  <NavDrop darkNavBg={darkNavBg} />
               </div>
               {/* dark mode toggle */}
               <ModeToggle />
               {/* <div className="flex items-center justify-center rounded-full bg-black md:px-6 md:py-3">
                  <p className="text-sm font-semibold tracking-wider text-white md:text-[1rem]">
                     Lets Talk
                  </p>
               </div> */}
               {/* <Menubar ref={menuRef} className={"rounded-full"}>
                  <MenubarMenu>
                     <MenubarTrigger
                        className={
                           "cursor-pointer rounded-full text-sm  font-semibold tracking-wider md:text-[1rem]"
                        }
                     >
                        <p
                           className={`flex cursor-pointer items-center rounded-full text-sm font-semibold tracking-wider md:text-[1rem]`}
                        >
                           {isMenuOpen ? "Close" : "Menu"}
                           <span
                              className={`${
                                 !isMenuOpen ? "ms-[10px]" : "ms-[17px]"
                              } transform transition-transform duration-500 ease-in-out ${
                                 isMenuOpen ? "rotate-180" : "rotate-0"
                              }`}
                           >
                              {!isMenuOpen ? (
                                 <Image src={url(menuDotsClosed)} alt="" />
                              ) : (
                                 <Image src={url(menuDotsOpened)} alt="" />
                              )}
                           </span>
                        </p>
                        {
                           !isMenuOpen ? (<p>Menu <span className="ms-3"><Image src={url(menuDotsClosed)} alt="" /></span></>) 
                           : (<>Close <span className="ms-3"><Image src={url(menuDotsOpened)} alt="" /></span></>)
                        }
                     </MenubarTrigger>
                     <MenubarContent>
                        {menuItems?.map((menuItem, index) => {
                           return (
                              <MenubarItem key={index}>
                                 <Link
                                    href={menuItem.link}
                                    className={`${
                                       currentURL === menuItem.link
                                          ? "flex w-full items-center justify-between font-bold"
                                          : ""
                                    }`}
                                 >
                                    {menuItem.name}
                                    <span
                                       className={`${
                                          currentURL === menuItem.link
                                             ? "flex h-[6px] w-[6px] rounded-full bg-black"
                                             : ""
                                       }`}
                                    ></span>
                                 </Link>
                              </MenubarItem>
                           );
                        })}
                     </MenubarContent>
                  </MenubarMenu>
               </Menubar> */}
               {/* <div className="flex items-center justify-center rounded-full bg-white md:px-6 md:py-3">
                  <p className="text-sm font-semibold tracking-wider  md:text-[1rem]">Menu</p>
               </div> */}
               <span className="p-initial border-l text-[1.2rem] font-[700] text-white">
                  <Search width={"4rem"} />
               </span>
            </div>
            <div className="flex items-center gap-2 md:hidden">
               <ModeToggle />
               <Menu />
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
