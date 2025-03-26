import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/Gallery";
import HeroSection from "@/components/Hero";
import OrderSection from "@/components/OrderSection";
import PartnersSection from "@/components/Parthners";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection />
      <GallerySection />
      <PartnersSection />
      <OrderSection />
    </div>
  );
}
