

export default function HeroSection() {
  return (
    <div className="container-fluid p-0" data-type="mama_sin">
      <img className="mama_sin" src="src/assets/images/nissan_gtr.jpg" alt="mama_sin" />
      <div className="d-flex justify-content-center align-items-center">
        <div className="content-block">
          <h1>Преврати свою <br /> машину в легенду <br /> с AutoNexus</h1>
          <p>Профессиональный тюнинг и премиальные решения.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary">Смотреть примеры</button>
            <a href="#" className="text-darkblue">Сравнить услуги</a>
          </div>
        </div>
      </div>
    </div>
  );
}