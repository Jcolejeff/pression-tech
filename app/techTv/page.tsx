/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/Heading";
import Newsletter from "@/components/landing/Newsletter";
import Hero from "@/components/TechTv/Hero";
import OtherVideos from "@/components/TechTv/Highlights";
import ViewersChoice from "@/components/TechTv/ViewersChoice";
import { wordPressInstance, baseUrl } from "@/lib/http";
import { formatDate } from "@/lib/utils";

const TechTv = async () => {
   const res = await fetch(`${baseUrl}/techtv?acf_format=standard`, { cache: "no-store" });
   const data = await res.json();

   const viewersChoice = data?.find((item: any) => item?.acf?.viewers_choice === true);
   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px] scroll-mt-28 bg-transparent ">
         <Hero data={data} />
         {/* others */}
         <OtherVideos
            data={data?.slice(1)?.filter((item: any) => item?.acf?.viewers_choice === false)}
         />
         {/* newsletter */}
         <Newsletter />
         {/* views choice */}
         <ViewersChoice viewersChoice={viewersChoice} />
      </div>
   );
};

export default TechTv;
