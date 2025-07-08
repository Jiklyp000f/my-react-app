import { useNavigate } from 'react-router-dom';
import './Header.css';
import Button from '../components/Buttons/Button';

export default function Header() {
	const navigate = useNavigate();
	return (
		<div className='header'>
			<div className='header__content'>
				<h1 className='header-title'>Преврати свою машину в легенду с AutoNexus</h1>
				<p className='header-description'>Профессиональный тюнинг и премиальные решения.</p>
				<div className='header_buttons'>
						<Button onClick={() => navigate('/cards')}>Смотреть примеры</Button>
						<Button onClick={() => navigate('*')} type='bordered'>Сравнить услуги</Button>
				</div>
			</div>
		</div>
	);
}
