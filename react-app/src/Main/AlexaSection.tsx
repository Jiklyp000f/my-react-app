export default function AlexaSection() {
  return (
    <div className="container-fluid p-0">
      <div className="row align-items-center p-3">
        <div className="col-md-6 text-left" data-type="alexa-container">
          <img src="src/assets/images/logo_autonexus2.png" alt="Эмблема" className="mb-2" />
          <h3>AutoNexus Intelligence</h3>
          <p>
            Наши автомобили оснащены интеллектуальными <br />
            системами контроля. Управляй параметрами, <br />
            отслеживай производительность и настрой <br />
            авто под себя голосом.
          </p>
          <button type="button" className="btn btn-info learn-more-button">Технологии</button>
        </div>
        <div className="col-md-6 text-center p-0">
          <img src="src/assets/images/turbo.webp" className="img-fluid" alt="Изображение" />
          <small className="small-text">
            AutoNexus Intelligence – эксклюзивная разработка. <br />
            Функциональность зависит от комплектации.
          </small>
        </div>
      </div>
    </div>
  );
}