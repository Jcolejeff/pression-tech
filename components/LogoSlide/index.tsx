import Marquee from "react-fast-marquee";
import { url } from "@/lib/utils";
import Image from "next/image";
const LogoMarquee = ({ images }: { images: string[] }) => {
   return (
      <Marquee gradient={false} autoFill>
         {images.map((image: string, index: number) => (
            <div key={index} className="mr-12">
               <img src={url(image)} alt="Logo" className="w-[5rem] md:w-[8.2rem]" />
            </div>
         ))}
      </Marquee>
   );
};

export default LogoMarquee;
