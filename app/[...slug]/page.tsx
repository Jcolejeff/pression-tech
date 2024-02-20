/* eslint-disable @next/next/no-img-element */
import ArticleDetails from "@/components/Articles/ArticleDetails";
import SingleBlog from "@/components/Articles/ArticleDetails/dynamic";
import Comments from "@/components/Articles/Comments";
import Hero from "@/components/Articles/Hero";
import RelatedNews from "@/components/Articles/RelatedNews";
import { wordPressInstance } from "@/lib/http";

interface Props {
   params: any;
}
const Articles = async ({ params }: Props) => {
   const { slug } = params;
   console.log(slug[0]);

   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px]   bg-transparent">
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            {/* <Hero /> */}
            {/* <ArticleDetails /> */}
            {/* <img
               src={data?.jetpack_featured_media_url}
               alt="featured image"
               className="w-[200px] object-cover"
            />

            <div
               className="space-y-8"
               dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
            ></div> */}

            {/* <SingleBlog /> */}
         </div>
         <RelatedNews />
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            <Comments />
         </div>
      </div>
   );
};

export default Articles;
