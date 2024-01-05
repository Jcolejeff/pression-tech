import Data from "./data";

import MerchantsInCountries from "../countries";

const Antarctica = () => {
   return (
      <div className="">
         <MerchantsInCountries countries={Data} />
      </div>
   );
};

export default Antarctica;
