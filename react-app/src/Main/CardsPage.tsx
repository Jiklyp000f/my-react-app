import { CardsSection } from './CardsSection/CardsSection';

export default function CardsPage() {
	return (
		<div>
			<h2 className='text-center mb-4'>Наши проекты</h2>
			<CardsSection limit={10}/>
		</div>
	);
}
