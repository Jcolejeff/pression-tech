"use client";
import { Input } from "components/ui/input";
import { capitalizeFirstLetter } from "lib/helpers";
import { url } from "lib/utils";
import { FooterLinksData } from "./data";
import { useState } from "react";
import { ArrowRight, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "lib/utils";
import { ChevronDown, ChevronRightIcon } from "lucide-react";

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
   FormLabel,
   FormDescription,
} from "components/ui/form";
import ProcessError from "@/lib/error";
import Spinner from "../ui/spinner";
interface IFooter {}

const Footer = ({}: IFooter) => {
   const [phoneCountry, setPhoneCountry] = useState("");
   const [formIsLoading, setFormIsLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [message, setMessage] = useState({ text: "", isError: false });

   const FormSchema = z.object({
      email: z
         .string()
         .min(2, {
            message: "Please enter a valid email.",
         })
         .email(),
   });
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
   });

   async function onSubmit(data: z.infer<typeof FormSchema>) {
      setFormIsLoading(true);

      try {
         //    const { data } = await $http.post(`${API_URL}/subscribers`, subscriberPayload);
         setSuccess(true);
         console.log(data);

         setMessage({ text: "Message Sent Successfully", isError: false });
         //    form.reset();
      } catch (error) {
         setMessage({ text: ProcessError(error), isError: true });
      }
      setFormIsLoading(false);
   }

   const data = [
      {
         title: "Science",
         link: "/category/science",
      },
      {
         title: "Entertainment",
         link: "/category/entertainment",
      },
      {
         title: "Business",
         link: "/category/business",
      },
      {
         title: "Science",
         link: "/category/science",
      },
      {
         title: "Editors Pick",
         link: "/category/editors-pick",
      },
      {
         title: "Innovation",
         link: "/category/innovation",
      },
      {
         title: "Start Ups",
         link: "/category/startups",
      },
      {
         title: "FinTech",
         link: "/category/fintech",
      },
      {
         title: "Technology",
         link: "/category/technology",
      },
      {
         title: "Telecommunication",
         link: "/category/telecommunication",
      },
   ];
   return (
      <div className="container relative  flex w-full  max-w-[2100px] flex-col  bg-primary-4 ">
         <div className="mt-[3rem] px-container-base lg:px-container-lg xl:px-container-xl">
            <h4 className="text-[1.5rem] font-[700] text-white ">Techpression</h4>
         </div>
         <div className=" mt-[2rem] border-b border-t border-white lg:px-container-lg xl:px-container-xl">
            <div className="border-l px-container-base py-[2rem] md:ml-[3rem] lg:ml-[6rem] ">
               <div className="items-end md:flex md:justify-between">
                  <h2 className="w-full text-[1.2rem] font-[700] text-white md:text-[3rem]">
                     Newsletter <br />
                     Signup
                  </h2>
                  <Form {...form}>
                     <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-[1rem] flex w-full   items-end  gap-4 md:mt-[0] "
                     >
                        <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                              <FormItem>
                                 <div className="relative w-full ">
                                    <FormControl>
                                       <Input
                                          style={{
                                             border: "none",
                                             borderBottom: "3px solid white",
                                             borderRadius: "0",
                                          }}
                                          className="text-sm placeholder-white focus:text-white md:text-lg"
                                          {...field}
                                          placeholder="Your Email Address"
                                       />
                                    </FormControl>
                                 </div>
                                 <FormMessage className="mt-1 text-base" />
                              </FormItem>
                           )}
                        />

                        <button
                           disabled={formIsLoading}
                           type="submit"
                           className="flex items-center justify-center border px-2 py-1 md:px-6 md:py-4"
                        >
                           <span className="cursor-pointer   text-white  md:text-[1.5rem]">
                              {formIsLoading ? (
                                 <Spinner />
                              ) : (
                                 <ArrowRight className="w-4 md:w-full" />
                              )}
                           </span>
                        </button>

                        <span
                           className={`${
                              message.isError ? "text-red-500" : "text-green-700"
                           } mt-4   text-[16px] transition-opacity duration-200 ease-in-out`}
                        >
                           {message.text}
                        </span>
                     </form>
                  </Form>
               </div>
               <div className="mt-10 gap-10 md:flex">
                  <p className="w-full text-sm font-[400] text-white md:text-lg">
                     TechPression is a future-focused publication that speaks to African innovation
                     and technology in depth
                  </p>
                  <div className="mt-10 flex w-full gap-20 md:mt-[0]">
                     <ul className="text-sm font-[400] text-white md:text-[1rem] md:text-lg">
                        {data.slice(0, 5).map((i, idx) => (
                           <li key={idx}>
                              <a
                                 href={i.link}
                                 className="cursor-pointer transition-all duration-300 ease-linear hover:text-secondary-3"
                              >
                                 {i.title}
                              </a>
                           </li>
                        ))}
                     </ul>
                     <ul className="text-sm text-white md:text-[1rem] md:text-lg">
                        {data.slice(5, 10).map((i, idx) => (
                           <li key={idx}>
                              <a
                                 href={i.link}
                                 className="cursor-pointer transition-all duration-300 ease-linear hover:text-secondary-3"
                              >
                                 {i.title}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-col justify-between border-white px-6 md:flex-row md:items-center md:gap-[62%] md:px-0 lg:px-container-lg xl:px-container-xl">
            <div className="flex gap-6 pt-[2rem] md:ml-[3rem] md:border-l md:pb-[4rem] lg:ml-[6rem]">
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
            <div className="pt-[2rem] md:pb-[4rem]">
               <span className="text-sm font-[400] text-white md:text-lg">
                  Copyright © {new Date().getFullYear()} Tech Pression All rights reserved
               </span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
