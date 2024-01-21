import Newsletter from "@/components/landing/Newsletter";
import Hero from "@/components/TechTv/Hero";
import Highlights from "@/components/TechTv/Highlights";
import ViewersChoice from "@/components/TechTv/ViewersChoice";

const TechTv = () => {
   return (
      <div className="container mt-24 min-h-screen w-full max-w-[1700px] bg-transparent ">
         <Hero />
         <div className="px-container-base lg:px-container-lg xl:px-container-xl">
            <Highlights />
         </div>
         <Newsletter />
         <ViewersChoice />
      </div>
   );
};

export default TechTv;
