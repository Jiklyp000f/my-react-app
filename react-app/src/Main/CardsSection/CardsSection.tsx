import { useState, useEffect, memo } from 'react';
import './Cards.css';
import { Loader } from '../../components/Loaders/Loader';

export interface Card {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface CardsSectionProps {
  limit: number;
}

export const CardsSection = memo(({ limit }: CardsSectionProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const cardsData = await response.json();

        setCards(cardsData);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        setError('Не удалось загрузить данные с сервера. Попробуйте позже');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="col-12 alert alert-danger">
        {error}
        <button onClick={() => window.location.reload()} className="btn btn-link">
          Еще раз!
        </button>
      </div>
    );
  }

  return (
    <div className="cards block-container">
      {cards.map((card: Card, index: number) => (
        <div key={index} className={`cards__item cards__item--${index + 1}`}>
          <h3 className="card-item-title">{card.title}</h3>
          <p className="card-item-description">{card.body}</p>
        </div>
      ))}
    </div>
  );
});
