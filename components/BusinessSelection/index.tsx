import { useMemo, useState } from "react";

import { capitalizeFirstLetter } from "lib/helpers";
import { url } from "lib/utils";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import allBusinessData from "./data";

interface IBusinessSelection {}

interface DataEntry {
   name: string;
   details: string;
   image: string;
   bgColor: string;
   description?: string;
}

interface BusinessData {
   name: string;
   data: DataEntry[];
}
const BusinessSelection = ({}: IBusinessSelection) => {
   const [currFilter, setCurrFilter] = useState(allBusinessData[0]?.name);
   const [currentSelectedBusiness, setCurrentSelectedBusiness] = useState<BusinessData>(
      allBusinessData[0],
   );
   const [activeTab, setActiveTab] = useState<string>(currentSelectedBusiness.data[0].name);
   const switchTab = (tab: string) => {
      setActiveTab(tab);
   };

   return (
      <>
         <div className="flex w-full flex-col">
            {/* filter section */}
            <div className="flex w-full flex-col">
               <h2 className="mb-[0.5rem] text-center text-[1.5rem] font-[600] text-secondary-17 md:mb-[2.5rem] md:max-w-[55rem] md:text-start md:text-[2.5rem] md:leading-[3.2rem]">
                  Customize your Timbu experience by entering your business type!
               </h2>

               <div className="lg:gap1 flex flex-col  gap-6 rounded-lg border-secondary-14  py-[1.1rem] md:grid md:grid-cols-[1fr_4fr] md:gap-[2.5rem] md:border md:px-[2rem] 2xl:gap-0">
                  <h5 className="whitespace-nowrap text-center  text-xl  font-semibold leading-[1.5rem] text-secondary-2 md:self-center ">
                     What type of Business do you run?
                  </h5>

                  <div className="no-scrollbar flex flex-row items-center gap-[0.5rem] overflow-auto pb-4 md:flex md:justify-evenly">
                     {allBusinessData?.map((item, index) => (
                        <button
                           onClick={() => {
                              setCurrFilter(capitalizeFirstLetter(item?.name));
                              setCurrentSelectedBusiness(item);
                              switchTab(item?.data[0].name);
                           }}
                           key={index}
                           className={`whitespace-nowrap  rounded-[1.5rem] px-3 py-[0.8rem] md:px-[1.5rem] xxl:px-[3.5rem]  ${
                              currFilter !== capitalizeFirstLetter(item?.name)
                                 ? `border border-secondary-2 text-secondary-2 hover:bg-slate-100 md:border-0`
                                 : `bg-secondary-2 text-white`
                           } transition-colors duration-300 ease-in-out`}
                        >
                           {capitalizeFirstLetter(item?.name)}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            <Tabs
               orientation="vertical"
               defaultValue={activeTab}
               value={activeTab}
               className=" mb-15 mt-2 grid grid-cols-[1fr] place-items-start gap-[5rem] md:mt-[3.5rem] md:grid-cols-[1fr_1fr] "
            >
               <TabsList className=" grid h-[100%] w-full grid-cols-[1fr] items-start   bg-white pl-0 pt-0 ">
                  {currentSelectedBusiness.data.map((item, index) => {
                     return (
                        <TabsTrigger
                           key={index}
                           value={item.name}
                           onClick={() => switchTab(item.name)}
                           className={`w-full  justify-start pl-0 ${
                              activeTab === item.name && `border-l-[5px] border-primary-1 `
                           }`}
                        >
                           <div className="flex flex-col gap-1 px-4 py-6 md:items-start md:justify-start   ">
                              <h3 className="text-start text-[1.3rem] font-[500]">
                                 {capitalizeFirstLetter(item.name)}
                              </h3>
                              <h4 className="text-start text-[1.1rem] font-[500]">
                                 {item.details}
                              </h4>
                           </div>
                        </TabsTrigger>
                     );
                  })}
               </TabsList>

               <section className="hidden w-full md:block">
                  {currentSelectedBusiness?.data?.map((item, index) => {
                     return (
                        <TabsContent key={index} value={item.name} className=" ">
                           <div
                              className={` flex flex-col items-center justify-center rounded-lg bg-[#EBEDEE] px-[4rem] py-12 text-lg text-white`}
                           >
                              {/* <p>{item?.description}</p> */}
                              <img
                                 src={url(item.image)}
                                 className="w-full  rounded-lg object-contain lg:min-h-[420px]"
                                 alt=" "
                              />
                           </div>
                        </TabsContent>
                     );
                  })}
               </section>
            </Tabs>
         </div>
      </>
   );
};

export default BusinessSelection;
