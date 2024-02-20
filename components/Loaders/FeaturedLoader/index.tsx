import React from "react";
import { Skeleton } from "components/ui/skeleton";
import { cn } from "lib/utils";

interface IFeaturedLoader {
   isLoading: boolean;
   children: React.ReactNode;
   className?: string;
}

const FeaturedLoader = ({ children, isLoading, className }: IFeaturedLoader) => {
   return isLoading ? (
      <div className={cn("mb-[2.5rem] flex flex-col items-center gap-8 lg:flex-row", className)}>
         <Skeleton className="h-[17.5rem] w-full max-w-[424px]" />
         <div className="flex w-full flex-col justify-center gap-4">
            <Skeleton className="h-4 w-[20%]" />
            <Skeleton className="h-[2rem] w-full" />
            <Skeleton className="h-[4rem] w-full" />
         </div>
      </div>
   ) : (
      <>{children}</>
   );
};

export default FeaturedLoader;
