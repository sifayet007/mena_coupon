import React from "react";
import FooterConten from "./ui/FooterConten";
import Image from "next/image";
import { assets } from "@/assets";

const Footer = () => {
  return (
    <div className="bg-[#4B61D51A] relative">
      <div className="max-w-[1440]  px-[clamp(20px,2.5vw,60px)] mx-auto w-full ">
        <FooterConten />
        <p>
          <div className="pb-[28px] flex md:flex-row flex-col ">
            <div className="flex justify-center gap-x-2.5 items-end flex-1 order-2 md:order-1 ">
              <div>
                <Image
                  src={assets?.expertSquteWhiteLogo.src}
                  alt="logo"
                  width={36}
                  height={36}
                />
              </div>
              <p className="text-center text-white ">
                Develop by expertsquad.net
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-2.5 order-1 md:order-2 md:mt-0 mt-2.5">
              <div className="">
                <Image src={assets?.QRcode} alt="QR code" />
              </div>
              <p className="text-white">Scan to download</p>
            </div>
          </div>
        </p>
      </div>
      <div className="absolute bottom-0 w-full h-auto -z-10">
        <Image
          className="w-full h-[248px]"
          src={assets?.footerRoundShapeImg.src}
          alt="footer rounded shape img"
          width={1920}
          height={254}
        />
      </div>
    </div>
  );
};

export default Footer;
