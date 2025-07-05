import { PromotionBanner } from './PromotionBanner';

export const BannerMiddle = () => {
	return (
		<PromotionBanner
			image='src/assets/images/logo_autonexus2.png'
			description='Накопи 1000 бонусных баллов и мы проверим твой движок бесплатно'
			linkText='Проверка двигателя в подарок!'
			link='*'
		/>
	);
};
