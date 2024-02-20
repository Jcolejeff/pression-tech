import { Skeleton } from "components/ui/skeleton";
import { cn } from "lib/utils";

interface IContentLoader {
   isLoading: boolean;
   children: React.ReactNode;
   className?: string;
   blocksClassName?: string;
   numberOfBlocks?: number;
}

const ContentLoader = ({
   isLoading,
   blocksClassName,
   className,
   children,
   numberOfBlocks = 3,
}: IContentLoader) => {
   return isLoading ? (
      <div
         className={cn(
            "grid w-full grid-cols-1 gap-x-[1.5rem] gap-y-[3.875rem]  sm:grid-cols-2 md:grid-cols-3",
            className,
         )}
      >
         {[...Array(numberOfBlocks)]?.map((_, idx) => (
            <div key={idx} className={cn("flex w-full flex-col gap-4", blocksClassName)}>
               <Skeleton className="h-[15rem] w-full" />
               <Skeleton className="h-[2rem] w-[80%]" />
               <Skeleton className="h-[2rem] w-full" />
            </div>
         ))}
      </div>
   ) : (
      <>{children}</>
   );
};

export default ContentLoader;
