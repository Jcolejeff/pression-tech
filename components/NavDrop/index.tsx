"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
} from "components/ui/navigation-menu";
import { capitalizeFirstLetter } from "lib/helpers";
import { url } from "lib/utils";
import { Search } from "lucide-react";
import { startProgress } from "../ProgressBarChecker/Events";
interface INavDrop {
   darkNavBg?: boolean;
}
const components: { title: string; href: string; description: string }[] = [
   {
      title: "Business",
      href: "/category/business",
      description:
         "Get the latest news and updates on business, finance, economy, stock market, BSE, NSE, Nifty, Sensex and much more.",
   },
   {
      title: "Editors Pick",
      href: "/category/editors-pick",
      description: "See out top picks for the best news and updates.",
   },
   {
      title: "Start Ups",
      href: "/category/startups",
      description:
         "Get latest news and updates on startups, startup stories, small business, new business, startups in India and world, business ideas, startup success stories and much more.",
   },
   {
      title: "FinTech",
      href: "/category/fintech",
      description:
         "Get the latest news and updates on FinTech, FinTech companies, FinTech startups, FinTech industry and much more.",
   },
   {
      title: "Technology",
      href: "/category/technology",
      description:
         "Get the latest news and updates on technology, technology news, technology updates, technology information, technology articles and much more.",
   },
   {
      title: "Telecommunication",
      href: "/category/telecommunication",
      description:
         "Get the latest news and updates on telecommunication, telecom industry, telecom companies, telecom services, telecom market and much more.",
   },
];
const NavDrop = ({ darkNavBg }: INavDrop) => {
   return (
      <>
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Tech</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid w-[400px] list-none gap-3 p-4 md:w-[500px] md:grid-cols-2  lg:w-[600px]">
                        {components.map((component) => (
                           <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                           >
                              {component.description}
                           </ListItem>
                        ))}
                     </ul>
                  </NavigationMenuContent>
               </NavigationMenuItem>

               {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid list-none gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                           <NavigationMenuLink asChild>
                              <a
                                 className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                                 href="/"
                              >
                                 <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                 <p className="text-muted-foreground text-sm leading-tight">
                                    Beautifully designed components built with Radix UI and Tailwind
                                    CSS.
                                 </p>
                              </a>
                           </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                           Re-usable components built using Radix UI and Tailwind CSS.
                        </ListItem>
                        <ListItem href="/docs/installation" title="Installation">
                           How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Typography">
                           Styles for headings, paragraphs, lists...etc
                        </ListItem>
                     </ul>
                  </NavigationMenuContent>
               </NavigationMenuItem> */}

               <NavigationMenuItem>
                  <span className=" block cursor-pointer px-4   font-[700] leading-[1.5rem] tracking-[0.005rem] text-white lg:text-[1rem]">
                     <a onClick={startProgress} href={url("/category/science")}>
                        Science
                     </a>
                  </span>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <span
                     className={` block cursor-pointer px-4  font-[700] leading-[1.5rem]  tracking-[0.005rem] text-white lg:text-[1rem] `}
                  >
                     <a onClick={startProgress} href={url("/category/entertainment")}>
                        Entertainment
                     </a>
                  </span>
               </NavigationMenuItem>

               <NavigationMenuItem>
                  <span
                     className={` block cursor-pointer px-4  font-[700] leading-[1.5rem]  tracking-[0.005rem] text-white lg:text-[1rem] `}
                  >
                     <a onClick={startProgress} href={url("/techTv")}>
                        TechTv
                     </a>
                  </span>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <span
                     className={` block cursor-pointer px-4  font-[700] leading-[1.5rem]  tracking-[0.005rem] text-white lg:text-[1rem] `}
                  >
                     <a onClick={startProgress} href={url("/category/cryptocurrency")}>
                        Events
                     </a>
                  </span>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <span
                     className={` block cursor-pointer px-4  font-[700] leading-[1.5rem]  tracking-[0.005rem] text-white lg:text-[1rem] `}
                  >
                     <Link href={url("/contactUs")}>ContactUs</Link>
                  </span>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </>
   );
};

export default NavDrop;

export function NavigationMenuDemo() {
   return (
      <NavigationMenu>
         <NavigationMenuList></NavigationMenuList>
      </NavigationMenu>
   );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
   ({ className, title, children, ...props }, ref) => {
      return (
         <li className="block select-none space-y-1 rounded-md p-3 leading-none  outline-none transition-colors">
            <NavigationMenuLink asChild>
               <a
                  onClick={startProgress}
                  ref={ref}
                  className={cn(
                     "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none  outline-none  transition-all duration-150 ease-linear hover:bg-gray-200",
                     className,
                  )}
                  {...props}
               >
                  <div className="text-sm font-medium leading-none">{title}</div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                     {children}
                  </p>
               </a>
            </NavigationMenuLink>
         </li>
      );
   },
);
ListItem.displayName = "ListItem";
