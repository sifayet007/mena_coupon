import topStoresData from "@/constants/top-stores-data.interface";
import { ITopStoras } from "@/interfaces/top-stores-type.interface";
import Image from "next/image";
import React from "react";

const TopStorasCard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(150px,_1fr))] justify-items-center justify-center gap-x-[clamp(20px,5vw,80px)] gap-y-[clamp(10px,2.5vw,20px)] mt-[clamp(20px,2.5vw,60px)]">
      {topStoresData?.map((item: ITopStoras, index: number) => (
        <div
          key={index}
          className="flex flex-col items-center gap-y-[clamp(5px,2.5vw,10px)]"
        >
          <div className="bg-white  rounded-full w-[clamp(85px,12vw,170px)] h-[clamp(85px,12vw,170px)] flex items-center justify-center drop-shadow-lg ">
            <Image src={item.logo} alt={item.storeName} />
          </div>
          <h1 className="text-center text-[clamp(14px,2.5vw,20px)]">
            {item.storeName}
          </h1>
          <p className="text-center text-[clamp(12px,2.5vw,16px)]">
            {item.offersAvailable} offers available
          </p>
        </div>
      ))}
    </div>
  );
};

export default TopStorasCard;
