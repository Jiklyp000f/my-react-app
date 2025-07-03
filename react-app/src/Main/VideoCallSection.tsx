
export default function VideoCallSection() {
  return (
    <div className="container-fluid p-0">
      <div className="container-fluid p-0">
        <div className="row align-items-center">
          <div className="col-md-6" data-type="image-container-left">
            <img src="src/assets/images/speed_hunter.jpg" className="img-fluid speed" alt="Изображение слева" />
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-start" data-type="text-container">
              <div className="mb-2">
                <img src="src/assets/images/molniya.jpg" className="img-fluid" alt="Эмблема 1" />
              </div>
              <h1>Тюнинг, <br /> который говорит <br /> сам за себя</h1>
              <p>
                Каждый проект – уникальное произведение автомобильного искусства. <br />
                Превращаем серийные модели в эксклюзив.
              </p>
              <small>
                Эксклюзивные решения ограничены. Требуется консультация специалиста. <br />
                Отдельные услуги недоступны для некоторых моделей.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}