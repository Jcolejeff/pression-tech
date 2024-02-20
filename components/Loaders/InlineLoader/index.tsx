import { Skeleton } from "components/ui/skeleton";
import { cn } from "lib/utils";

interface IInlineLoader {
   isLoading: boolean;
   children: React.ReactNode;
   className?: string;
}

const InlineLoader = ({ children, isLoading, className }: IInlineLoader) => {
   return isLoading ? (
      <Skeleton className={cn("h-[1.5rem] w-[6rem]", className)} />
   ) : (
      <>{children}</>
   );
};

export default InlineLoader;
