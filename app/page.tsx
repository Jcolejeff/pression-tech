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
import Finance from "@/components/landing/Finance";
import FeaturedPosts from "@/components/landing/FeaturedPosts";
import ReviewSlide from "@/components/ReviewsSlide";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { wordPressInstance } from "@/lib/http";
export default async function Home() {
   const heroData = await wordPressInstance.posts().perPage(7).page(1).embed();

   return (
      <div className="h-full w-full">
         <LandingHero heroData={heroData} />

         <LatestPosts />
         <EditorsPick />
         <FeaturedArticles />
         <Trending />
         <Newsletter />
         <Finance />
         <FeaturedPosts />
      </div>
   );
}
