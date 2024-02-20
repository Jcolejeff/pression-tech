import { cn } from "lib/utils";

interface IEmptyContentWrapper {
   className?: string;
   isEmpty?: boolean;
   children: React.ReactNode;
   customMessage?: string;
}

const EmptyContentWrapper = ({
   className,
   customMessage,
   isEmpty,
   children,
}: IEmptyContentWrapper) => {
   return isEmpty ? (
      <div
         className={cn(
            "flex w-full flex-grow flex-col items-center justify-center gap-4",
            className,
         )}
      >
         <div>{/* <Icon name='alienPlants' svgProp={{ className: 'max-w-full ' }} /> */}</div>
         <p className="text-[14px] leading-[20px] tracking-[0.15px] text-primary-1">
            {customMessage ? customMessage : `This is currently unavailable, pls check back`}
         </p>
      </div>
   ) : (
      <>{children}</>
   );
};

export default EmptyContentWrapper;
