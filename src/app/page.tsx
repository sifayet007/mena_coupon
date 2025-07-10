import AvailableCountries from "@/components/AvailableCountries";
import CouponSteps from "@/components/CouponSteps";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestOffer from "@/components/LatestOffer";
import Slider from "@/components/Slider";
import TopStores from "@/components/TopStores";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <div>
        <LatestOffer />
      </div>
      <HeroSection />
      <TopStores />
      <AvailableCountries />
      <CouponSteps />
      <Footer />
    </div>
  );
}
