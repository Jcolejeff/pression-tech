import { capitalizeFirstLetter } from "lib/helpers";
interface ICountryCard {
   title: string;

   link?: string;
   location: string;
   expiryDate?: string;
   count?: string;
}

const CountryCard = ({
   location,
   count,
   title,
   link = `/a7f1477dc36041aabd2c40d5c8598e3f`,
}: ICountryCard) => {
   return (
      <a
         href={link}
         className="  flex flex-col  gap-[0.7rem] bg-white py-6 lg:py-12  md:h-[100px] lg:h-[120px] xl:h-[130px] xxl:h-[150px] rounded-[10px] w-full cursor-pointer text-center group"
      >
         <h4 className="">
            <a
               href={link}
               className=" text-base md:text-lg xxl:text-xl  capitalize  2xl:text-[1.4rem] font-bold leading-[21px] tracking-[0.1px]  "
            >
               {title}
            </a>
         </h4>

         <a
            href={link}
            className=" text-black px-2 text-[0.9rem] xxl:text-base 2xl:text-[1.1rem] leading-[18px] tracking-[0.1px] font-[300]"
         >
            Explore Businesses in {capitalizeFirstLetter(title)}
         </a>
      </a>
   );
};

export default CountryCard;
