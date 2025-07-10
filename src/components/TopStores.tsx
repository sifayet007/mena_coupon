import React from "react";
import TopStorasCard from "./ui/TopStorasCard";

const TopStores = () => {
  return (
    <div className="max-w-[1440] px-[clamp(20px,2.5vw,60px)] mx-auto w-full mt-[clamp(20px,2.5vw,60px)]">
      <div className="text-center">
        <h1 className="text-[clamp(18px,2.5vw,30px)] font-semibold">
          Top Stores
        </h1>
        <p className="text-[clamp(12px,2.5vw,16px)]">
          Here is some top store from middle east gcc countries.
        </p>
      </div>
      <TopStorasCard />
    </div>
  );
};

export default TopStores;
