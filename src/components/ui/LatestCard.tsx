import latestOffers from "@/constants/latest-offers";
import Image from "next/image";
import React from "react";
import { TbHourglassEmpty } from "react-icons/tb";
import Button from "./Button";
import { ILatestOffer } from "@/interfaces/latest-offer.interface";

const LatestCard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(248px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(248px,_1fr))]  gap-5 mt-[30px]">
      {latestOffers.map((offer: ILatestOffer, index: number) => (
        <div
          key={index}
          className="text-center border border-[#0000001A] rounded-md "
        >
          <div className="flex justify-center bg-[#F7F7F7] py-7 px-20 relative overflow-hidden">
            <Image
              className="w-[clamp(50px,5vw,90px)] h-[clamp(35px,5vw,75px)]"
              src={offer.image}
              alt={offer.brand}
              width={90}
              height={75}
            />
            <span className="absolute bg-black text-white -rotate-45 top-3 -left-8 text-sm px-8 py-1">
              {offer.discount}
            </span>
          </div>
          <div className="p-5">
            <div className="flex text-lg gap-x-1 justify-center">
              <span className="whitespace-nowrap ">{offer.brand}</span>
              <span className=" ">{offer.discount}</span>
            </div>
            <p className="text-[18px] ">{offer.category}</p>

            <div className="flex text-[clamp(10px,5vw,16px)] justify-center items-center  gap-x-1.5 text-[#00000080] mt-3.5 mb-8">
              <span>
                <TbHourglassEmpty />
              </span>
              <span>{offer.expiresIn}</span>
            </div>

            <Button
              label={offer.couponText}
              className="bg-[#3C346F] text-white w-full py-2 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestCard;
