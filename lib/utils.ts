import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}
export const formatDate = (i: string) => {
   return moment(i).format("Do MMM YYYY");
};

export function timeSincePublished(date: string): string {
   const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

   let interval = seconds / 31536000; // 60 * 60 * 24 * 365

   if (interval > 1) {
      return `${Math.floor(interval)} year${Math.floor(interval) > 1 ? "s" : ""} ago`;
   }
   interval = seconds / 2592000; // 60 * 60 * 24 * 30
   if (interval > 1) {
      return `${Math.floor(interval)} month${Math.floor(interval) > 1 ? "s" : ""} ago`;
   }
   interval = seconds / 86400; // 60 * 60 * 24
   if (interval > 1) {
      return `${Math.floor(interval)} day${Math.floor(interval) > 1 ? "s" : ""} ago`;
   }
   interval = seconds / 3600; // 60 * 60
   if (interval > 1) {
      return `${Math.floor(interval)} hour${Math.floor(interval) > 1 ? "s" : ""} ago`;
   }
   interval = seconds / 60;
   if (interval > 1) {
      return `${Math.floor(interval)} minute${Math.floor(interval) > 1 ? "s" : ""} ago`;
   }
   return `${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? "s" : ""} ago`;
}

// export const url = (url: string) => `${import.meta.env.BASE_URL}${url}`;
export const url = (url: string) => url;

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E9ECEF" offset="20%" />
      <stop stop-color="#F8F9FA" offset="50%" />
      <stop stop-color="#E9ECEF" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#E9ECEF" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) => window.btoa(str);
