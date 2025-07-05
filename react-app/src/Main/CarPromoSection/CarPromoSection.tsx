import { Link } from 'react-router-dom';
import './CarPromoSection.css';
import Button from '../../components/Buttons/Button';

export const CarPromoSection = () => {
	return (
		<div className='car-promo'>
			<div className='car-promo__content'>
				<h1 className='car-promo__title'>Не просто машина&nbsp;– твое продолжение.</h1>

				<p className='car-promo__description'>Создаем автомобили, которые становятся легендами улиц и треков.</p>

				<Link to='*'>
					<Button type='bordered'>Создать</Button>
				</Link>

				<ul className='car-promo__list'>
					<li>Агрессивный дизайн, отражающий твой характер</li>
					<li>Инженерная точность и бескомпромиссное качество</li>
				</ul>
			</div>
		</div>
	);
};
