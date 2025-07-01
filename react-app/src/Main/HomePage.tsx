import AlexaSection from "./AlexaSection";
import CardsContainer from "./CardsContainer";
import FeatureSection from "./FeatureSection";
import FullWidthImage from "./FullWidthImage";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import PromotionBanner from "./PromotionBanner";
import SmartCameraSection from "./SmartCameraSection";
import VideoCallSection from "./VideoCallSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromotionBanner />
      <CardsSection />
      <SmartCameraSection />
      <VideoCallSection />
      <FullWidthImage />
      <AlexaSection />
      <FeatureSection />
      <ProductShowcase />
    </>
  );
}

export function CardsSection() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-3" data-type="cards">
        <CardsContainer />
      </div>
    </div>
  );
}