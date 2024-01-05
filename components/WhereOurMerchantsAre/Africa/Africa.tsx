import AfricaData from "./data";

import MerchantsInCountries from "../countries";

const Africa = () => {
   return (
      <div className="">
         <MerchantsInCountries countries={AfricaData} />
      </div>
   );
};

export default Africa;
