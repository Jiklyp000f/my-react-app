import SmartCameraSection from '../Main/SmartCameraSection/SmartCameraSection';
import { VideoCallSection } from '../Main/VideoCallSection/VideoCallSection';
import { CarPromoSection } from '../Main/CarPromoSection/CarPromoSection';
import { CardsSection } from '../Main/CardsSection/CardsSection';
import { IntelligenceSection } from '../Main/IntelligenceSection/IntelligenceSection';
import FeatureSection from '../Main/FeatureSection/FeatureSection';
import { SliderSection } from '../Main/SliderSection/SliderSection';
import { BannerTop } from '../components/Banners/BannerTop';
import { BannerMiddle } from '../components/Banners/BannerMiddle';
import { BannerBottom } from '../components/Banners/BannerBottom';
import WelcomeSlide from '../Main/WelcomeSlide/WelcomeSlide';

export default function HomePage() {
	return (
		<div className='page-wrapper'>
			<WelcomeSlide />
			<BannerTop />
			<CardsSection limit={3} />
			<SmartCameraSection />
			<VideoCallSection />
			<CarPromoSection />
			<IntelligenceSection />
			<BannerMiddle />
			<FeatureSection />
			<BannerBottom />
			<SliderSection />
		</div>
	);
}
