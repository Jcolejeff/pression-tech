/* eslint-disable @next/next/no-img-element */

interface IBlogCard {
   blogImage: string;
   category: string;
   date: string;
   title: string;
   description: string;
   authorImg: string;
   authorName: string;
   authorRole: string;
   link?: string;
}

const BlogCard = ({
   authorImg,
   authorName,
   authorRole,
   blogImage,
   category,
   date,
   description,
   title,
} // link = `/${CONSTANTS.ROUTES.blogs}/test-blog`,
: IBlogCard) => {
   // const navigate = useNavigate();

   return (
      <div
         // onClick={() => navigate(link)}
         className="group flex h-max w-full cursor-pointer flex-col justify-between"
      >
         <div className="flex flex-col">
            <div
               className="border-b-warning-1 relative mb-[2.5rem] h-[17.5rem] w-full cursor-cardCursor overflow-hidden rounded-[8px] border-b-4
        transition-all duration-300 ease-in-out after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-transparent after:transition-all after:duration-300 hover:after:bg-black/40
        "
            >
               <img
                  src={blogImage}
                  alt=" "
                  className="h-full w-full bg-cover bg-top object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
               />
            </div>
            <div className="mb-4 flex w-full items-center justify-between">
               <span className="text-[14px] font-[600] leading-[21px] tracking-[0.1px] text-primary-1 ">
                  #{category}
               </span>
               <span className="text-[14px] font-[300] leading-[21px] tracking-[0.1px] text-secondary-2 ">
                  {date}
               </span>
            </div>
            <h5 className="mb-4 text-[20px] font-[700] leading-[27px] text-primary-12">{title}</h5>
            <p className="mb-4 text-[14px] font-[300] leading-[21px] tracking-[0.1px] text-secondary-2">
               {description}
            </p>
         </div>
         <div className="flex items-center gap-4">
            <div className="h-[40px] w-[40px] overflow-hidden rounded-[50px]">
               <img alt=" " src={authorImg} className="h-full w-full bg-cover bg-top" />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
               <h6 className="text-[16px] font-[600] leading-[21px] text-primary-9">
                  {authorName}
               </h6>
               <span className="text-[14px] font-[300] leading-[21px] tracking-[0.15px] text-secondary-2">
                  {" "}
                  {authorRole}
               </span>
            </div>
         </div>
      </div>
   );
};

export default BlogCard;
