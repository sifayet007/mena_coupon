import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <div className="max-w-[1440] px-[clamp(20px,4vw,60px)] mx-auto w-full mt-[clamp(20px,2.5vw,60px)]">
      <div className=" bg-[#000000] md:flex justify-between items-center md:pt-[30px] md:px-0 px-5 pt-5 rounded-xl">
        <div className="md:pl-[clamp(40px,5vw,82px)]">
          <div className="flex items-center md:justify-start justify-center gap-x-[clamp(10px,2.5vw,20px)]">
            <div className="rounded-full w-[clamp(50px,5vw,80px)] h-[clamp(50px,5vw,80px)] p-2 bg-[#3C346F] flex justify-center items-center ">
              <Image
                src={assets?.menaCuponeWhiteLogo.src}
                alt="logo"
                width={54}
                height={42}
              />
            </div>
            <h1 className="text-[clamp(24px,2.5vw,36px)] text-white">
              Mena Coupon
            </h1>
          </div>
          <div className="flex flex-col gap-y-2.5 md:text-start text-center">
            <h1 className="text-[clamp(24px,2.5vw,45px)] font-semibold mt-2.5 text-white capitalize">
              ready to get started?
            </h1>
            <p className="text-[clamp(12px,2.5vw,16px)] text-white">
              Unlock amazing deals, offer, discounts on Yellow Friday with our
              Mena coupon app
            </p>
          </div>
          <div className="mt-2.5 flex justify-center md:justify-start">
            <Button
              className=" flex items-center bg-white py-[clamp(4px,1.5vw,8px)] px-[clamp(6px,2.5vw,16px)] rounded-lg text-[clamp(12px,2.5vw,16px)] "
              label="Download Now"
              icon={
                <Image
                  className="w-[clamp(15px,2.5vw,25px)] h-[clamp(18 px,2.5vw,28px)]"
                  width={25}
                  height={28}
                  src={assets.playStore.src}
                  alt="play store"
                />
              }
              iconPosition="left"
            />
          </div>
        </div>
        <div className="md:pr-[40px] flex justify-center md:justify-start mt-2.5 md:mt-0">
          <Image src={assets?.phone.src} alt="phone" width={440} height={614} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
