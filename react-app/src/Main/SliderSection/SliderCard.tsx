import { useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import type { ISliderData } from './sliderData';

const SliderCard: React.FC<ISliderData> = ({ title, price, description, image, alt }) => {
  const navigate = useNavigate();
  return (
    <div className="slide-content">
      <div className="slider-card">
        <h4 className="slider-card__title">{title}</h4>
        <h5 className="slider-card__price">{`${price}₽`}</h5>
        <img src={`src/assets/images/${image}`} className="slider-card__image" alt={alt}></img>
        <p className="card-text">{description}</p>
        <div>
          <Button onClick={() => navigate('*')}>Заказать</Button>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
