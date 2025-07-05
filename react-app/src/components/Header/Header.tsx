import { Link } from 'react-router-dom';
import './Header.css';
import Button from '../Buttons/Button';

export default function Header() {
	return (
		<div className='header'>
			<div className='header__content'>
				<h1 className='header-title'>Преврати свою машину в легенду с AutoNexus</h1>
				<p className='header-description'>Профессиональный тюнинг и премиальные решения.</p>
				<div className='header_buttons'>
					<Link to='*'>
						<Button>Смотреть примеры</Button>
					</Link>
					<Link to='*'>
						<Button type='bordered'>Сравнить услуги</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
