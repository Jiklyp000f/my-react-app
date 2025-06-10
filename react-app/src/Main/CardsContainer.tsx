import { useState, useEffect } from 'react';


export interface Card {
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
        const response = await fetch('src/data/cards.json'); 
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        setCards(data.cards);
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
        Loading cards...
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
      {cards.map((card, index) => (
        <div className="col-md-3" key={index}>
          <div className="card">
            <img 
              src={card.imgSrc} 
              className="card-img-top" 
              alt={card.title} 
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