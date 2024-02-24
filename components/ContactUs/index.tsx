"use client";
import React from "react";
import ContactUsForm from "./Form";
const Contacts = () => {
   return (
      <div className="mt-40">
         <div className="gap-20 px-container-base md:flex lg:px-container-lg xl:px-container-xl ">
            <div className="flex flex-col gap-6">
               <h2 className="text-xl font-[700] md:text-3xl">Contacts</h2>
               <p className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                  You have any news you would like to share, or have some information about any news
                  related to tech, wanna reach out to us, we would love to hear from you{" "}
               </p>
            </div>
            <div className="mt-10 flex w-full flex-col gap-3 md:mt-0">
               <p className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                  Email: Techpression@gmail.com
               </p>
               <p className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                  Facebook: TechPression
               </p>
               <p className="text-base font-[400] text-[#00000099] dark:text-[#ffffff99]">
                  Twitter: @Tech_Pression
               </p>
            </div>
         </div>

         <div className="mb-10 mt-8 grid-cols-3 border-b border-t border-black px-container-base  dark:border-white md:mt-4 lg:grid lg:px-container-lg  xl:px-container-xl ">
            <div className="col-span-2 w-full border-black py-8 pr-6 dark:border-white lg:border-r">
               <ContactUsForm />
            </div>
            <div className="col-span-1 h-full w-full px-8 py-8">
               <div className=" flex h-full w-full items-center justify-center bg-[#D9D9D9] md:mt-0">
                  <p>Advert</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contacts;
