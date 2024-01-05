import Data from "./data";

import MerchantsInCountries from "../countries";

const NorthAmerica = () => {
   return (
      <div className="">
         <MerchantsInCountries countries={Data} />
      </div>
   );
};

export default NorthAmerica;
