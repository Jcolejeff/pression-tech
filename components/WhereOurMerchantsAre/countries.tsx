import CountryCard from "./CountryCard";
import { useState } from "react";
import { cn } from "lib/utils";
interface IHotel {
   name: string;
   text: string;
}
interface country {
   name: string;
   link: string;
}
interface Iprop {
   countries: country[];
}
const MerchantsInCountries = ({ countries }: Iprop) => {
   const [currentPage, setCurrentPage] = useState<number>(1);

   const perPage: number = 20;

   const length: number | undefined = countries?.length;
   const indexOfLastHotel: number = currentPage * perPage;
   const indexOfFirstHotel: number = indexOfLastHotel - perPage;
   const currentHotels: country[] | undefined = countries?.slice(
      indexOfFirstHotel,
      indexOfLastHotel,
   );

   let totalPages: number = Math.ceil((length ?? 0) / perPage);
   const pageNumbers: number[] = Array(totalPages)
      .fill(null) // filling with a dummy value just to create the array with proper length
      .map((_, i) => i + 1);
   return (
      <section>
         <aside>
            <div className=" mt-[3rem] grid w-full grid-cols-2 gap-x-[1.5rem] gap-y-[1.875rem] sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
               {currentHotels?.map((item, idx) => (
                  <div key={idx} className="h-full w-full">
                     <CountryCard
                        count={"with over 58 hotel reviews"}
                        location={item.link}
                        title={item.name}
                        link={item.link}
                     />
                  </div>
               ))}
            </div>
         </aside>
         <div className="my-14 flex flex-col items-center justify-between gap-8 md:flex-row">
            <p className="text-base font-normal text-white">
               Showing {indexOfFirstHotel + 1}-
               {indexOfLastHotel <= countries.length ? indexOfLastHotel : countries.length}
               {"  "} of {"  "} {countries.length}
            </p>
            <div className="flex space-x-2">
               <button
                  aria-label="previous page"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className={cn(
                     `rounded-md border border-white bg-transparent p-2 px-4 text-xl font-semibold text-white transition-all duration-300 ease-in-out  ${
                        currentPage === 1
                           ? "cursor-not-allowed text-gray-600"
                           : "hover:text-primary-1"
                     }`,
                  )}
               >
                  {"<"}
               </button>
               {pageNumbers.map((number, index) => (
                  <button
                     onClick={() => setCurrentPage(number)}
                     disabled={currentPage === number}
                     className={`rounded-md border border-white px-4 py-2 font-normal transition-all duration-300 ease-in-out ${
                        currentPage === number ? "bg-white text-black" : "bg-black text-white"
                     } ${currentPage !== number ? "hover:bg-white hover:text-black" : ""}`}
                     key={index}
                  >
                     {number}
                  </button>
               ))}
               <button
                  aria-label="next page"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className={cn(
                     `rounded-md border border-white bg-transparent p-2 px-4  text-xl font-semibold text-white transition-all duration-300 ease-in-out ${
                        currentPage === totalPages
                           ? "cursor-not-allowed text-gray-600"
                           : "hover:text-primary-1"
                     }`,
                  )}
               >
                  {">"}
               </button>
            </div>
         </div>
      </section>
   );
};

export default MerchantsInCountries;
