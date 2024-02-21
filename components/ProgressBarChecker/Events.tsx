"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import NProgress, { set } from "nprogress";
import "./page.css";
import "nprogress/nprogress.css";

export const globalProgress = NProgress;

export const startProgress = () => {
   globalProgress.start();
};

export function NavigationEvents() {
   const pathname = usePathname();

   const searchParams = useSearchParams();
   globalProgress.configure({
      easing: "ease",
      speed: 50,
      showSpinner: false,
      // trickleSpeed: 50,
      // trickle: true,
      // minimum: 0.3,
   });
   useEffect(() => {
      const url = `${pathname}?${searchParams}`;
      console.log(url);
      globalProgress.start();
      setTimeout(() => {
         globalProgress.done();
         globalProgress.remove();
      }, 1000);
   }, [pathname, searchParams]);

   return null;
}
