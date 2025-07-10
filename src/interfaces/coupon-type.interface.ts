import { StaticImageData } from "next/image";

export interface ICouponType {
  id?: number;
  title?: string;
  description?: string;
  icon?: StaticImageData;
}
