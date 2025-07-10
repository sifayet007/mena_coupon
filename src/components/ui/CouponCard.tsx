import couponSteps from "@/constants/coupon-steps";
import { ICouponType } from "@/interfaces/coupon-type.interface";
import Image from "next/image";
import React from "react";

const CouponCard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-[clamp(20px,2.5vw,30px)] gap-y-[clamp(20px,2.5vw,30px)] mt-[clamp(20px,2.5vw,50px)]">
      {couponSteps?.map((item: ICouponType, index: number) => (
        <div
          key={index}
          className="relative outline-2 outline-black/10 pt-[25px] pb-[clamp(10px,2.5vw,17px)] pr-[17px] pl-[clamp(20px,2.5vw,27px)] rounded-lg "
        >
          <span className="bg-[#D8D6E1] py-[clamp(8px,1.5vw,11px)] px-[clamp(10px,2.5vw,20px)] text-[clamp(16px,2.5vw,24px)] font-bold absolute -top-3 rounded-lg right-5">
            {item?.id}
          </span>
          <Image
            className="bg-[#3C346F] py-4 px-3.5 "
            src={item?.icon?.src || ""}
            alt={item?.title || ""}
            width={64}
            height={60}
          />
          <h1 className="mt-3.5">{item.title}</h1>
          <hr className="w-[118px] outline-[#3C346F] outline-2 mt-3" />
          <p className="mt-2.5 text-[clamp(14px,1.5vw,16px)]">
            {item?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CouponCard;
