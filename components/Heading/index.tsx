import React from "react";

const Heading = ({ title }: { title: string }) => {
   return (
      <div>
         <h4 className="text-xl font-[700]">{title}</h4>
      </div>
   );
};

export default Heading;
