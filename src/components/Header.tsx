import { assets } from "@/assets";
import React from "react";
import { MdDiscount } from "react-icons/md";
import Button from "./ui/Button";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-[#3C346F] w-full px-5">
      <div className=" flex max-w-[1440] mx-auto w-full py-3 justify-between">
        <div className="flex items-center gap-x-[clamp(8px,2.5vw,18px)] ">
          <Image
            src={assets.menaCuponeLogo}
            alt="logo"
            className="w-[clamp(30px,2.5vw,50px)] h-[clamp(25px,2.5vw,40px)]"
          />
          <h4 className="text-[clamp(12px,2.5vw,18px)] font-medium text-white">
            Mena Coupon
          </h4>
        </div>
        <div className="md:flex items-center gap-1 hidden ">
          <span>
            <MdDiscount className="text-white" />
          </span>
          <p className="text-white">Save up to 75% off your summer Checklist</p>
        </div>
        <div>
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
    </nav>
  );
};

export default Header;
