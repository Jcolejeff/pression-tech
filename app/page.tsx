import Link from "next/link";
import LandingHero from "@/components/landing/hero";
import { Button } from "@/components/ui/button";
import ForClients from "@/components/landing/ForClients";
import ForTalents from "@/components/landing/ForTalents";
import LatestPosts from "@/components/landing/LatestPosts";
import WhereOurMerchantsAre from "@/components/WhereOurMerchantsAre";
import BusinessSelection from "@/components/BusinessSelection";
import TextFormat from "@/lib/helpers/TextFormat";
import EditorsPick from "@/components/landing/EditorsPick";
import FeaturedArticles from "@/components/landing/FeaturedArticles";
import Trending from "@/components/landing/Trending";
import Newsletter from "@/components/landing/Newsletter";
import HomePageCategory from "@/components/landing/HomePageCategory";
import FeaturedPosts from "@/components/landing/FeaturedPosts";
import ReviewSlide from "@/components/ReviewsSlide";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { wordPressInstance } from "@/lib/http";
export default async function Home() {
   const heroData = await wordPressInstance.posts().perPage(7).page(1).embed();
   const LatestPostsData = await wordPressInstance.posts().perPage(3).page(1).embed().offset(7);
   const editorsPickData = await wordPressInstance
      .posts()
      .categories(99)
      .perPage(3)
      .page(1)
      .embed();
   const featuredArticlesData = await wordPressInstance
      .posts()
      .categories(16)
      .perPage(8)
      .page(1)
      .embed();
   const africanTrendingTechData = await wordPressInstance
      .posts()
      .categories(87)
      .perPage(6)
      .page(1)
      .embed();
   const businessData = await wordPressInstance.posts().categories(69).perPage(3).page(1).embed();
   const cryptoData = await wordPressInstance.posts().categories(85).perPage(3).page(1).embed();
   const gadgetsData = await wordPressInstance.posts().categories(22).perPage(3).page(1).embed();
   const scienceData = await wordPressInstance.posts().categories(23).perPage(3).page(1).embed();

   return (
      <div className="h-full w-full">
         <LandingHero heroData={heroData} />

         <LatestPosts latestPostsData={LatestPostsData} />
         <EditorsPick editorsPickData={editorsPickData} />
         <FeaturedArticles featuredArticlesData={featuredArticlesData.slice(0, 4)} />
         <Trending africanTrendingTechData={africanTrendingTechData} />
         <Newsletter />
         <HomePageCategory title="Finance" slug="business" id={69} data={businessData} />
         <HomePageCategory title="Cryptocurrency" slug="cryptocurrency" id={85} data={cryptoData} />
         <HomePageCategory title="Gadgets" slug="gadgets" id={22} data={gadgetsData} />
         <HomePageCategory title="Science" slug="science" id={23} data={scienceData} />
         <FeaturedPosts featuredArticlesData={featuredArticlesData.slice(4, 8)} />
      </div>
   );
}
