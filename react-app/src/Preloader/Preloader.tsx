import { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    // Показываем прелоадер при монтировании
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'flex';

    // Скрытие после загрузки страницы
    const handleLoad = () => {
      setTimeout(() => {
        if (preloader) preloader.style.display = 'none';
      }, 500);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;
