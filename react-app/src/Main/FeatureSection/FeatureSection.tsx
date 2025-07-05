import { Link } from 'react-router-dom';
import './FeatureSection.css';
import Button from '../../components/Buttons/Button';

export default function FeatureSection() {
	return (
		<div className='feature block-container'>
			<div>
				<img src='src/assets/images/bmw.webp' className='image-rounded' alt='Изображение 1' />
				<div>
					<h2 className='feature__title'>Безопасность превыше всего</h2>
					<p className='feature__description'>
						Используем сертифицированные компоненты и системы защиты. Каждый элемент проверен на надежность.
					</p>
					<Link to='*'>
						<Button type='bordered' className='feature__button'>
							Примеры работ
						</Button>
					</Link>
				</div>
			</div>
			<div className=''>
				<img src='src/assets/images/turbo_surpa.jpg' className='image-rounded' alt='Изображение 2' />
				<div>
					<h2 className='feature__title'>Мощь и точность</h2>
					<p className='feature__description'>
						От турбонаддува до чип-тюнинга&nbsp;– раскрываем истинный потенциал вашего автомобиля.
					</p>
					<Link to='*'>
						<Button type='bordered' className='feature__button'>
							Примеры работ
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
