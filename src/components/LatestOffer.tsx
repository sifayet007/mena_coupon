import React from "react";

import LatestCard from "./ui/LatestCard";
import latestOffers from "@/constants/latest-offers";

const LatestOffer = () => {
  return (
    <div className="max-w-[1440] px-[clamp(20px,2.5vw,60px)] mx-auto w-full mt-[clamp(20px,2.5vw,60px)]">
      <div className="flex justify-center">
        <h1 className="w-fit border-b-2  text-[clamp(18px,2.5vw,30px)] font-semibold">
          Latest Offers
        </h1>
      </div>
      <LatestCard />
    </div>
  );
};

export default LatestOffer;
