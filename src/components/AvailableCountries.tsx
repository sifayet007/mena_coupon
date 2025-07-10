import React from "react";
import AvailableCountriesCard from "./ui/AvailableCountriesCard";

const AvailableCountries = () => {
  return (
    <div className="max-w-[1440] px-[clamp(20px,2.5vw,60px)] mx-auto w-full mt-[clamp(20px,2.5vw,60px)] p-5">
      <div className="flex justify-center">
        <h1 className="text-[clamp(18px,2.5vw,30px)] w-fit border-b-4 font-semibold">
          Available countries
        </h1>
      </div>
      <AvailableCountriesCard />
    </div>
  );
};

export default AvailableCountries;
