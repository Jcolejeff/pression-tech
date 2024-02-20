import { Skeleton } from "components/ui/skeleton";
import { cn } from "lib/utils";

interface ITextContentLoader {
   isLoading: boolean;
   children: React.ReactNode;
   className?: string;
}

const TextContentLoader = ({ isLoading, className, children }: ITextContentLoader) => {
   return isLoading ? (
      <div className={cn("flex w-full flex-col gap-4", className)}>
         <Skeleton className="h-[2rem] w-full max-w-[20rem]" />
         <Skeleton className="h-[2rem] w-full" />
         <Skeleton className="h-[20rem] w-full" />
      </div>
   ) : (
      <>{children}</>
   );
};

export default TextContentLoader;
