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
   const category = await wordPressInstance.categories().slug(params?.slug);
   let posts: any;
   try {
      posts = await wordPressInstance
         .posts()
         .categories(category[0].id)

         .perPage(20)
         .page(params?.pageNumber)
         .embed();
   } catch (error) {
      console.log(error);
      return (posts = []);
   }

   const getNextPageNumber = () => {
      return Number(params?.pageNumber) + 1;
   };
   const nextPageNumber = getNextPageNumber();
   const getPreviousPageNumber = () => {
      return Number(params?.pageNumber) - 1;
   };
   const previousPageNumber = getPreviousPageNumber();

   const currentPageNumber = Number(params?.pageNumber) || 1; // Ensure currentPageNumber is always a number.
   const totalPages = posts?._paging?.totalPages || 0; // Assuming you have total pages information.

   // Determine the range of numbers to display.
   let startPage: number, endPage: number;
   if (currentPageNumber < 3) {
      // Always show first three pages for pages 1 to 3.
      startPage = 1;
      endPage = 3;
   } else {
      // For page 4 onwards, show current page, one before and one after.
      startPage = currentPageNumber - 1;
      endPage = currentPageNumber + 2;
   }

   // Adjust endPage if it goes beyond total pages.
   endPage = Math.min(endPage, totalPages);

   // Adjust startPage to ensure we always show three links, if possible.
   if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
   }

   return (
      <div className="container mt-24 min-h-screen w-full max-w-[2100px] scroll-mt-28 bg-transparent ">
         <section className="">
            <div className="p-initial border-b border-black px-container-base pb-8 pt-10 font-[400] dark:border-white lg:px-container-lg xl:px-container-xl">
               <h2 className="text-3xl md:text-5xl">
                  {category[0]?.name} {"    "}
               </h2>
            </div>
         </section>
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            {posts?.length === 0 && (
               <div className="mt-28 flex h-full  w-full items-center justify-center bg-[#D9D9D9] p-10 dark:bg-[#333] md:px-40 md:py-20">
                  <h4 className="text-lg font-[700] uppercase">No posts found</h4>
               </div>
            )}
            <div className="mt-12 ">
               <div className="border-2 border-primary-4 ">
                  <div className=" flex flex-col gap-10 ">
                     {posts?.map((item: any, index: number) => {
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
                  {/* desktop */}
                  <Pagination className="hidden md:flex">
                     <PaginationContent>
                        <PaginationItem>
                           <PaginationPrevious
                              className={previousPageNumber < 1 ? "hidden" : ""}
                              href={`/category/${params?.slug}/page/${previousPageNumber}`}
                           />
                        </PaginationItem>
                        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                           <PaginationItem key={i}>
                              <PaginationLink
                                 href={`/category/${params?.slug}/page/${startPage + i}`}
                                 isActive={startPage + i === currentPageNumber}
                              >
                                 {startPage + i}
                              </PaginationLink>
                           </PaginationItem>
                        ))}

                        <PaginationItem
                           className={
                              nextPageNumber > posts?._paging?.totalPages ||
                              nextPageNumber === posts?._paging?.totalPages
                                 ? "hidden"
                                 : ""
                           }
                        >
                           <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem
                           className={
                              nextPageNumber > posts?._paging?.totalPages ||
                              nextPageNumber === Number(posts?._paging?.totalPages)
                                 ? "hidden"
                                 : ""
                           }
                        >
                           <PaginationLink
                              href={`/category/${params?.slug}/page/${posts?._paging?.totalPages}`}
                           >
                              {posts?._paging?.totalPages}
                           </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                           <PaginationNext
                              className={
                                 nextPageNumber > posts?._paging?.totalPages ||
                                 nextPageNumber === posts?._paging?.totalPages
                                    ? "hidden"
                                    : ""
                              }
                              href={`/category/${params?.slug}/page/${nextPageNumber}`}
                           />
                        </PaginationItem>
                     </PaginationContent>
                  </Pagination>
               </div>
               {/* mobile */}
               <Pagination className="-ml-2 mt-6 md:hidden">
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious
                           className={previousPageNumber < 1 ? "hidden" : ""}
                           href={`/category/${params?.slug}/page/${previousPageNumber}`}
                        />
                     </PaginationItem>
                     {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                        <PaginationItem key={i}>
                           <PaginationLink
                              href={`/category/${params?.slug}/page/${startPage + i}`}
                              isActive={startPage + i === currentPageNumber}
                           >
                              {startPage + i}
                           </PaginationLink>
                        </PaginationItem>
                     ))}

                     <PaginationItem
                        className={
                           nextPageNumber > posts?._paging?.totalPages ||
                           nextPageNumber === posts?._paging?.totalPages
                              ? "hidden"
                              : ""
                        }
                     >
                        <PaginationEllipsis />
                     </PaginationItem>
                     <PaginationItem
                        className={
                           nextPageNumber > posts?._paging?.totalPages ||
                           nextPageNumber === Number(posts?._paging?.totalPages)
                              ? "hidden"
                              : ""
                        }
                     >
                        <PaginationLink
                           href={`/category/${params?.slug}/page/${posts?._paging?.totalPages}`}
                        >
                           {posts?._paging?.totalPages}
                        </PaginationLink>
                     </PaginationItem>
                     <PaginationItem>
                        <PaginationNext
                           className={
                              nextPageNumber > posts?._paging?.totalPages ||
                              nextPageNumber === posts?._paging?.totalPages
                                 ? "hidden"
                                 : ""
                           }
                           href={`/category/${params?.slug}/page/${nextPageNumber}`}
                        />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
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
