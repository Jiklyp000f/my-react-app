import { Link } from 'react-router-dom';
import './SmartCameraSection.css';

export default function SmartCameraSection() {
	return (
		<div className='smart-camera-section block-container'>
			<h1>
				Инженерное совершенство <br /> в каждой детали
			</h1>
			<img
				src='src/assets/images/shelby_gonka.jpg'
				className='image-rounded smart-camera-section__image'
				alt='shelby_gonka'
			/>
			<div className='smart-camera-section__content'>
				<div className='smart-camera-section__content-item'>
					<h3 className='smart-camera-section__content-title'>Индивидуальный подход</h3>
					<p className='smart-camera-section__content-description'>
						Мы создаем уникальные решения, учитывая все пожелания клиента и технические возможности авто.
					</p>
					<Link to='*' className='no-underline'>
						<a href='#' className='smart-camera-section__link'>
							Подробнее
						</a>
					</Link>
				</div>
				<div className='smart-camera-section__content-item'>
					<h3 className='smart-camera-section__content-title'>Технологии будущего</h3>
					<p className='smart-camera-section__content-description'>
						Используем инновационные материалы и системы для максимальной производительности.
					</p>
					<Link to='*'>
						<a href='#' className='smart-camera-section__link'>
							Подробнее
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
