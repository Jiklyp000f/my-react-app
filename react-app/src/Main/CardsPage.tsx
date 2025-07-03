import { useSearchParams } from 'react-router-dom';
import CardsContainer from "./CardsContainer";

export default function CardsPage() {
  const [searchParams] = useSearchParams();
  const limitParam = searchParams.get('limit');
  
  // Безопасное преобразование с проверкой на число
  const limit = limitParam && !isNaN(Number(limitParam)) 
    ? parseInt(limitParam, 10)
    : 10;

  return (
    <div>
      <h2 className="text-center mb-4">Наши проекты</h2>
      <CardsContainer limit={limit} />
    </div>
  );
}