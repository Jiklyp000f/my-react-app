import { useState, useEffect } from 'react';

export interface Card {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  linkText: string;
}

const CardsContainer = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const posts = await response.json();
        
        // Используем стабильные изображения с Unsplash
        const images = [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80',
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80',
          'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80',
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1164&q=80'
        ];
        
        const transformedCards = posts.map((post: any, index: number) => ({
          id: post.id,
          imgSrc: images[index % images.length], // Циклически используем изображения
          title: post.title,
          description: `${post.body.split(' ').slice(0, 5).join(' ')}<br>${post.body.split(' ').slice(5).join(' ')}`,
          linkText: 'Learn More'
        }));
        
        setCards(transformedCards);
        setError(null);
      } catch (err) {
        console.error('Error loading cards:', err);
        setError('Failed to load cards. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

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
      {cards.map(card => (
        <div className="col-md-3" key={card.id}>
          <div className="card">
            <img 
              src={card.imgSrc} 
              className="card-img-top" 
              alt={card.title} 
              onError={(e) => {
                // Fallback на placeholder, если изображение не загрузится
                (e.target as HTMLImageElement).src = 'https://placehold.co/300x200?text=Image+Error';
              }}
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
    </>
  );
};

export default CardsContainer;