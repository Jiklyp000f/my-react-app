import './VideoCallSection.css';

export const VideoCallSection = () => {
  return (
    <div className="video-call block-container">
      <img
        src="src/assets/images/tuning.jpg"
        className="image-rounded video-call__image"
        alt="Авто с открытым капотом"
      />
      <div className="video-call__content">
        <img src="src/assets/images/molniya.jpg" className="video-call__icon" alt="Эмблема 1" />
        <h1>
          Тюнинг, <br /> который говорит <br /> сам за себя
        </h1>
        <p>
          Каждый проект – уникальное произведение автомобильного искусства. Превращаем серийные
          модели в эксклюзив.
        </p>
        <p className="text-secondary">
          Эксклюзивные решения ограничены. Требуется консультация специалиста. <br />
          Отдельные услуги недоступны для некоторых моделей.
        </p>
      </div>
    </div>
  );
};
