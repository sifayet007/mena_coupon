import countriesData from "@/constants/cuntries-data";
import Image from "next/image";
import React from "react";

const AvailableCountriesCard = () => {
  const firetFourCountries = countriesData.slice(0, 4);
  const firstThreeCountries = countriesData.slice(0, 3);
  return (
    <div>
      <div className="flex justify-center gap-x-[clamp(10px,2.5vw,30px)] mt-[clamp(20px,2.5vw,50px)] ">
        {firetFourCountries?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center  items-center  gap-x-[clamp(5px,1.5vw,10px)] drop-shadow-md bg-white py-[clamp(3px,1.5vw,14px)] px-[clamp(5px,1.5vw,15px)] rounded-md whitespace-nowrap"
          >
            <div className="w-[clamp(18px,2.5vw,50px)] h-[clamp(12px,2.5vw,36px)] flex items-center justify-center">
              <Image
                className="w-full h-auto object-cove"
                src={item.flag.src}
                alt={item.country}
                width={50}
                height={36}
              />
            </div>
            <p className="text-[clamp(8px,2.5vw,16px)]">{item.country}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-x-[clamp(10px,2.5vw,30px)] mt-[clamp(20px,2.5vw,30px)] items-center ">
        {firstThreeCountries?.map((item, index) => (
          <div
            key={index}
            className="flex justify-center  items-center  gap-x-[clamp(5px,1.5vw,10px)] drop-shadow-md bg-white py-[clamp(3px,1.5vw,14px)] px-[clamp(5px,1.5vw,15px)] rounded-md whitespace-nowrap"
          >
            <div className="w-[clamp(18px,2.5vw,50px)] h-[clamp(12px,2.5vw,36px)] flex items-center justify-center">
              <Image
                className="w-full h-auto object-cove  "
                src={item.flag.src}
                alt={item.country}
                width={50}
                height={36}
              />
            </div>
            <p className="text-[clamp(10px,2.5vw,16px)]">{item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCountriesCard;
