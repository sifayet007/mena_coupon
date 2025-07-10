import { StaticImageData } from "next/image";

export interface ILatestOffer {
  brand: string;
  discount: string;
  category: string;
  expiresIn: string;
  couponText: string;
  image: StaticImageData;
}
