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
export const metadata = {
   title: "Techpression | Tech News",
   description: "Get the Best technews!",
};
const Articles = async ({ params }: Props) => {
   const { slug } = params;

   const data = await wordPressInstance.posts().slug(slug[0]);

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
      <div className="container mt-28 min-h-screen w-full max-w-[1700px] scroll-mt-28 bg-transparent  px-container-base lg:px-container-lg   xl:px-container-xl">
         <div className="flex h-full w-full flex-col items-center">
            {/* <Hero /> */}
            {/* <ArticleDetails /> */}
            <img
               src={data[0]?.jetpack_featured_media_url}
               alt="featured image"
               className="mb-6 w-[600px] object-cover"
            />

            <div
               className="space-y-8"
               dangerouslySetInnerHTML={{ __html: data[0]?.content?.rendered }}
            ></div>

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
