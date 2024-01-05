import Data from "./data";

import MerchantsInCountries from "../countries";

const Australia = () => {
   return (
      <div className="">
         <MerchantsInCountries countries={Data} />
      </div>
   );
};

export default Australia;
