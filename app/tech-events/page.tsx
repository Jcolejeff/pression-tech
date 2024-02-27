/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/Heading";
import Newsletter from "@/components/landing/Newsletter";
import Hero from "@/components/TechTv/Hero";
import OtherVideos from "@/components/TechTv/Highlights";
import ViewersChoice from "@/components/TechTv/ViewersChoice";
import { wordPressInstance, baseUrl } from "@/lib/http";
import { formatDate } from "@/lib/utils";

const TechTv = async () => {
   const res = await fetch(`${baseUrl}/techevents?acf_format=standard`, { cache: "no-store" });
   const data = await res.json();

   const viewersChoice = data?.find((item: any) => item?.acf?.viewers_choice === true);
   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px] scroll-mt-28 bg-transparent ">
         <section className="">
            <div className="p-initial border-b border-black px-container-base  pb-8 font-[400] dark:border-white lg:px-container-lg xl:px-container-xl">
               <h2 className="pb-4  text-xl font-bold md:text-3xl">Events</h2>
               <p className="md:max-w-[70%]">
                  Dive into the future of innovation and exploration at our premier tech event!
                  welcome to a dynamic convergence of minds, where cutting-edge technology takes
                  center stage.
               </p>
            </div>
            {/* highlight of the dat */}
            <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
               <Heading title="Upcoming events" />
            </div>

            <div className="my-10 px-container-base lg:px-container-lg xl:px-container-xl">
               <div className="grid-cols-4 place-items-stretch gap-8 pb-8 md:grid">
                  {data?.map((item: any, index: number) => {
                     return (
                        <div className="relative flex h-full flex-col  shadow-2" key={index}>
                           <div className=" flex flex-col gap-3 px-4 py-2">
                              <p className="text-base font-[700] capitalize">
                                 {item?.acf?.event_category}
                              </p>
                              <h3 className="text-sm">{item?.acf?.title}</h3>

                              <p className="text-base font-[700] text-[#00000099] dark:text-[#ffffff99]">
                                 {item?.acf?.date_of_event}
                              </p>
                           </div>

                           <img
                              src={item?.acf?.image}
                              alt="highlight"
                              className=" h-[12rem] w-full object-cover"
                           />

                           <div
                              className="absolute bottom-0 left-1/2 flex h-fit w-full -translate-x-1/2  transform cursor-pointer items-center  justify-around gap-4 bg-black/30  py-4 backdrop-blur-sm transition-all  duration-200 ease-linear
                        
                        "
                           >
                              <a
                                 href={item?.acf?.register_link}
                                 target="_blank"
                                 className="cursor-pointer text-xs  font-semibold text-white transition-all duration-200 ease-linear  "
                              >
                                 Register
                              </a>
                              <a
                                 target="_blank"
                                 href={item?.acf?.more_info_link}
                                 className=" cursor-pointer text-xs  font-semibold text-white transition-all duration-200 ease-linear "
                              >
                                 Get More Info
                              </a>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
      </div>
   );
};

export default TechTv;
