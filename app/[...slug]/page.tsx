/* eslint-disable @next/next/no-img-element */
import ArticleDetails from "@/components/Articles/ArticleDetails";
import SingleBlog from "@/components/Articles/ArticleDetails/dynamic";
import Comments from "@/components/Articles/Comments";
import Hero from "@/components/Articles/Hero";
import RelatedNews from "@/components/Articles/RelatedNews";
import { findAuthorName } from "@/lib/constants";
import { wordPressInstance } from "@/lib/http";
import { formatDate } from "@/lib/utils";
import { url } from "@/lib/utils";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
interface Props {
   params: any;
}
export const metadata = {
   title: "Techpression | Tech News",
   description: "Get the Best technews!",
};
const Articles = async ({ params }: Props) => {
   const { slug } = params;

   const data = await wordPressInstance.posts().slug(slug[0]).embed();
   let categoryDetails = "";

   if (
      data[0] &&
      data[0]._embedded &&
      Array.isArray(data[0]._embedded["wp:term"]) &&
      data[0]._embedded["wp:term"][0] &&
      Array.isArray(data[0]._embedded["wp:term"][0])
   ) {
      const categories = data[0]._embedded["wp:term"][0]
         .slice(0, 2)
         .map((item: any) => item?.name)
         .filter((name: any) => name)
         .join(", ");
      categoryDetails = categories;
   }
   const articleDetails = [
      {
         heading: "Date",
         detail: formatDate(data[0]?.date),
      },
      {
         heading: "Category",
         detail: categoryDetails || "N/A",
      },
      {
         heading: "Reading time",
         detail: "10 Mins",
      },
   ];
   // getData();
   // const req = await fetch("https://techpression.com/wp-json/wp/v2/posts/24713");
   // const data = await req.json();
   // console.log("data", data);
   // wordPressInstance
   //    .posts()
   //    .perPage(5)
   //    .page(1)
   //    .embed()
   //    .param("_fields", [
   //       "id",
   //       "title",
   //       "content",
   //       "jetpack_featured_media_url",
   //       "excerpt",
   //       "slug",
   //       "date",
   //       "author",
   //       "categories",
   //       "tags",
   //    ])
   //    .then(function (data) {
   //       console.log(data);
   //    });

   return (
      <div className="container  min-h-screen w-full max-w-[1700px] scroll-mt-28 bg-transparent  px-container-base lg:px-container-lg   xl:px-container-xl">
         <div className="flex h-full w-full flex-col items-center">
            {/* header */}
            <section>
               <div className="mt-28 flex gap-6">
                  {/* used immediately  invoked function for null check */}
                  {(() => {
                     const wpTerm = data[0]?._embedded?.["wp:term"]?.[1];
                     if (Array.isArray(wpTerm)) {
                        return wpTerm.slice(0, 4).map((item, index) => (
                           <button
                              key={index}
                              className="color-[#000] rounded-[24px] border border-primary-4 px-4 py-2 text-xs font-[400]"
                           >
                              {item?.name}
                           </button>
                        ));
                     }
                     return null;
                  })()}
               </div>
               <div className="grid-cols-4 md:grid">
                  <div className="col-span-3 flex justify-end border-[#000] pb-10 pt-10 dark:border-white md:border-r md:pr-10">
                     <div className=" md:max-w-[70%] ">
                        <h2 className="text-4xl font-[700]">{data[0]?.title.rendered}</h2>
                        <p
                           className="mt-4 text-base font-[400] text-[#0000009e] dark:text-[#ffffffc7]"
                           dangerouslySetInnerHTML={{ __html: data[0]?.excerpt?.rendered }}
                        />
                     </div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-6 pl-5">
                     {articleDetails.map((item, index) => {
                        return (
                           <div key={index} className="flex flex-col gap-2">
                              <span className=" text-base font-[400] text-[#0000009e] dark:text-[#ffffff99]">
                                 {item.heading}
                              </span>
                              <span className=" text-base font-[700] text-[#000] dark:text-white">
                                 {item.detail}
                              </span>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </section>
            {/* details */}
            <section className="mt-20">
               <div className="w-full">
                  <img
                     src={data[0]?.jetpack_featured_media_url}
                     alt="Article cover photo"
                     className="w-full object-cover"
                  />
               </div>
               <div className="mt-10 grid-cols-4 md:grid">
                  <div className="col-span-3 flex flex-col items-end border-[#000] pb-10 dark:border-white  md:border-r md:pr-10">
                     <div
                        className=" space-y-8 md:max-w-[70%] "
                        dangerouslySetInnerHTML={{ __html: data[0]?.content?.rendered }}
                     />
                  </div>
                  <div className="col-span-1 flex flex-col gap-4 pl-5">
                     <span className="mt-4 text-base font-[400] text-[#0000009e]">Author</span>
                     <div className="flex items-center gap-4">
                        <div className="h-[4rem] w-[4rem] rounded">
                           <img
                              src={url("/images/landing/editorsPick/automobiles.svg")}
                              alt="Author profile photo"
                              className="h-full w-full rounded-full object-cover"
                           />
                        </div>
                        <span className="text-lg font-[700]">
                           {findAuthorName(data[0]?.author)}
                        </span>
                     </div>
                     {/* <div>
                        <span className="mt-4 text-base font-[400] text-[#000] dark:text-white">
                           Owned articles
                        </span>
                        <p className="mt-4 text-base font-[400] text-[#0000009e] dark:text-[#ffffffc7]">
                           Rise in tech as telsa beat a record in sale, 10% rise in stock makes
                           traders happy with the marketcap, Increase in manufacturing brings about
                           lack of raw materials
                        </p>
                     </div> */}
                     <div className="">
                        <h4 className="text-lg font-[700]">Share</h4>
                        <div className="flex gap-6 pb-[4rem] pt-[2rem] ">
                           <Link href="#" className="text-[1.2rem] text-primary-4 md:text-[1.5rem]">
                              <Facebook />
                           </Link>
                           <Link href="#" className="text-[1.2rem] text-primary-4 md:text-[1.5rem]">
                              <Twitter />
                           </Link>
                           <Link href="#" className="text-[1.2rem] text-primary-4 md:text-[1.5rem]">
                              <Youtube />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* <SingleBlog /> */}
         </div>
         <RelatedNews />
         <div className="my-8 px-container-base lg:px-container-lg xl:px-container-xl">
            {/* <Comments /> */}
         </div>
      </div>
   );
};

export default Articles;
