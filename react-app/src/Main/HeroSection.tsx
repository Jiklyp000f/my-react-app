import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <div className="container-fluid p-0" data-type="mama_sin">
      <img className="mama_sin" src="src/assets/images/nissan_gtr.png" alt="mama_sin" />
      <div className="d-flex justify-content-center align-items-center">
        <div className="content-block">
          <h1>Преврати свою <br /> машину в легенду <br /> с AutoNexus</h1>
          <p>Профессиональный тюнинг и премиальные решения.</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="*">
              <button className="btn btn-primary">Смотреть примеры</button>
            </Link>
            <Link to="*">
              <a href="#" className="text-darkblue">Сравнить услуги</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}