import { Link } from "react-router-dom";


export default function SmartCameraSection() {
  return (
    <div className="container-fluid p-0 mt-5" data-type="mama_doch">
      <div className="text-center">
        <h1>Инженерное совершенство <br /> в каждой детали</h1>
        <img src="src/assets/images/shelby_gonka.jpg" className="img-fluid" alt="shelby_gonka" />
        <div className="row mt-3">
          <div className="col-md-6">
            <h5>Индивидуальный подход</h5>
            <p className="picture">
              Мы создаем уникальные решения, <br />
              учитывая все пожелания клиента <br />
              и технические возможности авто.
            </p>
            <Link to="*">
              <a href="#" className="text-darkblue">Подробнее</a>
            </Link>
          </div>
          <div className="col-md-6">
            <h5>Технологии будущего</h5>
            <p className="picture">
              Используем инновационные материалы <br />
              и системы для максимальной <br />
              производительности.
            </p>
            <Link to="*">
              <a href="#" className="text-darkblue">Подробнее</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="background-rectangle"></div>
    </div>
  );
}