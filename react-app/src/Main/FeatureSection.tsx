import { Link } from "react-router-dom";


export default function FeatureSection() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-3">
        <div className="col-md-6 text-left position-relative" data-type="photo1-container">
          <img src="src/assets/images/bmw.webp" className="img-fluid" alt="Изображение 1" />
          <div className="text-overlay" data-type="fhoto1">
            <h2>Безопасность превыше всего</h2>
            <p>
              Используем сертифицированные компоненты и системы защиты. <br />
              Каждый элемент проверен на надежность.
            </p>
            <Link to="*">
              <a href="#" className="text-white">Примеры работ</a>
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-left position-relative" data-type="photo2-container">
          <img src="src/assets/images/turbo_surpa.jpg" className="img-fluid" alt="Изображение 2" />
          <div className="text-overlay" data-type="fhoto2">
            <h2>Мощь и точность</h2>
            <p>
              От турбонаддува до чип-тюнинга – <br />
              раскрываем истинный потенциал <br />
              вашего авто.
            </p>
            <Link to="*">
              <a href="#" className="text-white">Примеры работ</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}