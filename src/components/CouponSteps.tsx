import React from "react";
import CouponCard from "./ui/CouponCard";

const CouponSteps = () => {
  return (
    <div className="max-w-[1440] px-[clamp(20px,2.5vw,60px)] mx-auto w-full mt-[clamp(10px,2.5vw,60px)] ">
      <div className="flex justify-center">
        <h1 className="w-fit border-b-2  text-[clamp(18px,2.5vw,30px)] font-semibold">
          How to Ues Coupon Cade
        </h1>
      </div>
      <CouponCard />
    </div>
  );
};

export default CouponSteps;
