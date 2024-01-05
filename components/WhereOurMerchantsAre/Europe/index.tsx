import Data from "./data";

import MerchantsInCountries from "../countries";

const Europe = () => {
   return (
      <div className="">
         <MerchantsInCountries countries={Data} />
      </div>
   );
};

export default Europe;
