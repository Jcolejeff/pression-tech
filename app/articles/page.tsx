import ArticleDetails from "@/components/Articles/ArticleDetails";
import Comments from "@/components/Articles/Comments";
import Hero from "@/components/Articles/Hero";
import RelatedNews from "@/components/Articles/RelatedNews";

const Articles = () => {
   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px] bg-transparent ">
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            <Hero />
            <ArticleDetails />
         </div>
         <RelatedNews />
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            <Comments />
         </div>
      </div>
   );
};

export default Articles;
