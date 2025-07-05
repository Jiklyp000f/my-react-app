import { Link } from 'react-router-dom';
import './Banners.css';

interface IProps {
	image: string;
	link: string;
	description: string;
	linkText: string;
	className?: string;
}

export const PromotionBanner: React.FC<IProps> = ({ image, link, description, linkText, className }) => {
	return (
		<div className={`promotion-block ${className ? className : ''}`}>
			<img className='promotion-block__image' src={image} alt='Эмблема' />
			<div>
				<Link className='promotion-block-title' to= {link }>

						{linkText}

				</Link>
				<p className='promotion-block-description'>{description}</p>
			</div>
		</div>
	);
};
