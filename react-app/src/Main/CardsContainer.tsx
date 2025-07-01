import { useState, useEffect } from 'react';

export interface Card {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  linkText: string;
}

interface CardsContainerProps {
  limit: number;
}

const CardsContainer = ({ limit }: CardsContainerProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setLoadedCount(0);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const posts = await response.json();
        
        const images = [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80',
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80',
          'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80',
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80'
        ];
        
        const imagePromises = posts.map((post: any, index: number) => {
          return new Promise<Card>((resolve) => {
            const img = new Image();
            const imgSrc = images[index % images.length];
            
            img.onload = () => {
              setLoadedCount(prev => prev + 1);
              resolve({
                id: post.id,
                imgSrc,
                title: post.title,
                description: `${post.body.split(' ').slice(0, 5).join(' ')}<br>${post.body.split(' ').slice(5).join(' ')}`,
                linkText: 'Learn More'
              });
            };
            
            img.onerror = () => {
              setLoadedCount(prev => prev + 1);
              resolve({
                id: post.id,
                imgSrc: 'https://placehold.co/300x200?text=Image+Error',
                title: post.title,
                description: `${post.body.split(' ').slice(0, 5).join(' ')}<br>${post.body.split(' ').slice(5).join(' ')}`,
                linkText: 'Learn More'
              });
            };
            
            img.src = imgSrc;
          });
        });
        
        // Ждем загрузки всех изображений
        const loadedCards = await Promise.all(imagePromises);
        setCards(loadedCards);
        setError(null);
      } catch (err) {
        console.error('Error loading cards:', err);
        setError('Failed to load cards. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [limit]);

  if (loading) {
    return (
      <div className="col-12 text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-12 alert alert-danger">
        {error}
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-link"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
  <>
    {/* Показываем прогресс загрузки */}
    {loading && (
      <div className="col-12 mb-3">
        <div className="progress">
          <div 
            className="progress-bar" 
            style={{ width: `${(loadedCount / limit) * 100}%` }}
          >
            Загружено: {loadedCount} из {limit}
          </div>
        </div>
      </div>
    )}
    
    {/* Отображаем карточки по мере загрузки */}
    {cards.map(card => (
      <div className="col-md-3" key={card.id}>
        <div className="card">
          <img 
            src={card.imgSrc} 
            className="card-img-top" 
            alt={card.title} 
            loading="lazy" // Ленивая загрузка
          />
          <div className="overlay">
            <h5 className="card-title">{card.title}</h5>
            <p 
              className="card-text" 
              dangerouslySetInnerHTML={{ __html: card.description }} 
            />
            <a href="#" className="text-white">
              {card.linkText}
            </a>
          </div>
        </div>
      </div>
    ))}
    
    {/* Сообщение об ошибке */}
    {error && (
      <div className="col-12 alert alert-danger">
        {error}
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-link"
        >
          Try again
        </button>
      </div>
    )}
  </>
);
}
export default CardsContainer;