import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import Button from "./Button";

const FooterConten = () => {
  return (
    <div className="md:flex items-center gap-x-[clamp(20px,4vw,120px)] pt-[clamp(20px,2.5vw,44px)]  md:space-y-0  mt-[clamp(20px,2.5vw,40px)] ">
      <div className="flex md:justify-start justify-center md:space-y-5 space-y-2.5">
        <div className=" md:justify-start justify-center md:space-y-5 space-y-2.5">
          <div className="flex  gap-x-2 items-center">
            <div>
              <Image
                src={assets?.footerCouponLogo.src}
                alt="logo"
                width={80}
                height={63}
              />
            </div>
            <h1 className="text-lg font-medium">Mena Coupon</h1>
          </div>
          <div className="flex gap-x-2 items-center">
            <span>
              <MdEmail className="text-[#3C346F]" />
            </span>
            <span>hello@menacoupon.com</span>
          </div>
          <div className="flex gap-x-2 items-center">
            <span>
              <PiPhone className="text-[#3C346F]" />
            </span>
            <span>+88 01850711231 </span>
          </div>
        </div>
      </div>
      <div className="flex md:justify-start justify-center md:space-y-5 space-y-2.5">
        <div className="flex flex-col gap-y-2.5 md:text-start text-center">
          <h1 className="text-[clamp(20px,2.5vw,30px)] font-semibold mt-2.5">
            ready to get started?
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            Unlock amazing deals, offer, discounts on Yellow Friday with our
            Mena coupon app
          </p>
        </div>
      </div>
      <div className="flex md:justify-start justify-center md:mt-0 mt-2.5">
        <Button
          className=" flex items-center bg-white py-[clamp(4px,1.5vw,8px)] px-4 rounded-lg text-[clamp(12px,2.5vw,16px)] whitespace-nowrap"
          label="Download Now"
          icon={
            <Image
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
  );
};

export default FooterConten;
