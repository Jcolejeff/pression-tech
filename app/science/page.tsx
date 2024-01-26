import Articles from "@/components/Science/Articles";
import Hero from "@/components/Science/Hero";
import RecentArticles from "@/components/Science/RecentArticles";

const Science = () => {
   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px] bg-transparent ">
         <Hero />
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            <RecentArticles />
            <Articles />
         </div>
      </div>
   );
};

export default Science;
