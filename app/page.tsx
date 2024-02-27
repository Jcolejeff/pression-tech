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
import { wordPressInstance, baseUrl } from "@/lib/http";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
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
   // Fetch hero data
   // const heroResponse = await fetch(`${baseUrl}/posts?per_page=7&page=1&_embed`, {
   //    cache: "no-store",
   // });
   // const heroData = await heroResponse.json();

   // // Fetch latest posts data, note that WP REST API doesn't support offset directly in this way
   // // You may need to handle offset manually after fetching the data or use a custom query if your WP installation supports it
   // const latestPostsResponse = await fetch(`${baseUrl}/posts?per_page=10&page=1&_embed`, {
   //    cache: "no-store",
   // }); // Adjusted assuming offset is to skip the first 7 (thus, fetching the next page)
   // const LatestPostsData = await latestPostsResponse.json();

   // // Fetch editors pick data
   // const editorsPickResponse = await fetch(
   //    `${baseUrl}/posts?categories=99&per_page=3&page=1&_embed`,
   //    { cache: "no-store" },
   // );
   // const editorsPickData = await editorsPickResponse.json();

   // // Fetch featured articles data
   // const featuredArticlesResponse = await fetch(
   //    `${baseUrl}/posts?categories=16&per_page=8&page=1&_embed`,
   //    { cache: "no-store" },
   // );
   // const featuredArticlesData = await featuredArticlesResponse.json();

   // // Fetch African trending tech data
   // const africanTrendingTechResponse = await fetch(
   //    `${baseUrl}/posts?categories=87&per_page=6&page=1&_embed`,
   //    { cache: "no-store" },
   // );
   // const africanTrendingTechData = await africanTrendingTechResponse.json();

   // // Fetch business data
   // const businessResponse = await fetch(`${baseUrl}/posts?categories=69&per_page=3&page=1&_embed`, {
   //    cache: "no-store",
   // });
   // const businessData = await businessResponse.json();

   // // Fetch crypto data
   // const cryptoResponse = await fetch(`${baseUrl}/posts?categories=85&per_page=3&page=1&_embed`, {
   //    cache: "no-store",
   // });
   // const cryptoData = await cryptoResponse.json();

   // // Fetch gadgets data
   // const gadgetsResponse = await fetch(`${baseUrl}/posts?categories=22&per_page=3&page=1&_embed`, {
   //    cache: "no-store",
   // });
   // const gadgetsData = await gadgetsResponse.json();

   // // Fetch science data
   // const scienceResponse = await fetch(`${baseUrl}/posts?categories=23&per_page=3&page=1&_embed`, {
   //    cache: "no-store",
   // });
   // const scienceData = await scienceResponse.json();

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
