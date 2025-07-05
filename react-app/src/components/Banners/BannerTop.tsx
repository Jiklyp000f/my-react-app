import { PromotionBanner } from './PromotionBanner';

export const BannerTop = () => {
	return (
		<PromotionBanner
			image='src/assets/images/logo_autonexus2.png'
			description='Доставка деталей по всей России без переплат'
			linkText='Закажи 2 услуги – получи скидку 15%'
			link='*'
		/>
	);
};
