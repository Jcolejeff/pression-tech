/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/Heading";
import Articles from "@/components/Science/Articles";
import Hero from "@/components/Science/Hero";
import RecentArticles from "@/components/Science/RecentArticles";
import { findAuthorName } from "@/lib/constants";
import { wordPressInstance } from "@/lib/http";
import { timeSincePublished } from "@/lib/utils";
import Link from "next/link";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "components/ui/pagination";
const Science = async ({ params }: { params: any }) => {
   const category = await wordPressInstance.categories().slug(params?.slug?.at(-1));
   const posts = await wordPressInstance
      .posts()
      .categories(category[0].id)
      .perPage(20)
      .page(1)
      .embed();

   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px] scroll-mt-28 bg-transparent ">
         <section className="">
            <div className="p-initial border-b border-black px-container-base pb-4 pt-10 font-[400] dark:border-white lg:px-container-lg xl:px-container-xl">
               <h2 className="text-3xl md:text-5xl">{category[0]?.name}</h2>
            </div>
            <div className="mt-10 flex flex-col gap-6 px-container-base lg:px-container-lg xl:px-container-xl">
               <Heading title="Highlights" />
               <div className="w-full">
                  <img
                     src={posts[0]?.jetpack_featured_media_url}
                     alt="highlight"
                     className="w-full object-cover"
                  />
               </div>
               <div className="md:px-10">
                  <h2 className="test-xl text-center font-[700] md:text-4xl">
                     {posts[0]?.title?.rendered}
                  </h2>
               </div>
            </div>
         </section>
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            <div className="mt-20">
               <Heading title="Recent Articles" />
               <div className="grid-cols-4  gap-10 md:grid">
                  <div className=" col-span-3 mt-6 grid-cols-2 gap-10  md:grid">
                     {posts?.slice(1, 7).map((item: any, index: number) => {
                        return (
                           <Link
                              href={`/${item?.slug}`}
                              key={index}
                              className="flex gap-6 py-4 dark:border-white "
                           >
                              <div className="flex max-w-fit flex-col gap-4">
                                 <span className="text-sm font-[700] text-[#00000080] dark:text-[#ffffffab]">
                                    {timeSincePublished(item?.date)}
                                 </span>
                                 <h3 className="text-xl font-[700] ">{item?.title?.rendered}</h3>
                                 <span className="text-base font-[700] text-primary-4 ">
                                    {findAuthorName(item?.author)}
                                 </span>
                              </div>
                           </Link>
                        );
                     })}
                  </div>
                  <div className=" col-span-1 flex w-full items-center justify-center bg-[#D9D9D9]  ">
                     {" "}
                  </div>
               </div>
            </div>
            <div className="mt-20 ">
               <div className="border-2 border-primary-4 ">
                  <div className=" flex flex-col gap-10 ">
                     {posts?.slice(7)?.map((item: any, index: number) => {
                        return (
                           <Link
                              href={`/${item?.slug}`}
                              key={index}
                              className="block gap-6 border-t border-[#0851bd8a] p-4  py-10 dark:border-[#095bd58a] md:flex lg:px-20"
                           >
                              <div className="h-[12rem] w-full md:min-w-[35%] md:max-w-[35%]">
                                 <img
                                    src={item.jetpack_featured_media_url}
                                    alt={item.author}
                                    className="max-h-full min-h-full w-full object-cover"
                                 />
                              </div>
                              <div className="mt-10 flex max-w-fit flex-col gap-5 md:mt-0">
                                 <h3 className="text-xl font-[700] ">{item?.title?.rendered}</h3>
                                 <span
                                    className="text-sm font-[700] text-[#00000080] dark:text-[#ffffff9e]"
                                    dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
                                 />

                                 <span className="text-base font-[700]  ">
                                    {findAuthorName(item?.author)}
                                 </span>
                              </div>
                           </Link>
                        );
                     })}
                  </div>

                  <Pagination>
                     <PaginationContent>
                        <PaginationItem>
                           <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationLink href="#" isActive>
                              1
                           </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationLink href="#">10</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationNext href="#" />
                        </PaginationItem>
                     </PaginationContent>
                  </Pagination>
               </div>

               {/* ----------Advertisement-------- */}
               <div className="mb-20 mt-20 flex w-full items-center justify-center bg-[#D9D9D9] p-10 dark:bg-[#333] md:px-40 md:py-20">
                  <h4 className="text-lg font-[700] uppercase">Advertisement post</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Science;
