"use client";
import sliderData from "@/constants/slider";
import Image from "next/image";
import React, { useEffect } from "react";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = React.useState<number>(0);
  useEffect(() => {
    if (sliderData.length === 0) return;
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {sliderData.map((item, index) => (
        <div
          key={index}
          style={{ display: index === sliderIndex ? "block" : "none" }}
        >
          <Image
            className="w-full"
            width={1920}
            height={1080}
            src={item.image.src}
            alt={`Slider ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
