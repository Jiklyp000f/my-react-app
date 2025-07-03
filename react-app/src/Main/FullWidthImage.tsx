import "./FullWidthImage.css";

export default function FullWidthImage() {
  return (
    <div 
      className="container-fluid p-0 position-relative"
      data-type="story-hero" 
    >
      <div className="image-container position-relative">
        <div className="position-absolute w-100 h-100" ></div>
        
        <img 
          src="src/assets/images/shelby.jpg" 
          className="img-fluid w-100" 
          alt="Дети играют с AR-масками" 
        />
        <div className="content-overlay position-absolute start-0">
          <div className="text-white px-4 px-md-5 py-3">
            <h1 className="display-4 fw-bold mb-4">
              Не просто машина – твое продолжение.
            </h1>
          
            <p className="lead fs-3 mb-4">
              Создаем автомобили, которые становятся легендами улиц и треков.
            </p>
            

            <button className="btn btn-light btn-lg px-4 py-2 mb-4 fw-medium">
              Создать
            </button>

            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center">
                <span className="me-2">•</span>
                <span>Агрессивный дизайн, отражающий твой характер</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">•</span>
                <span>нженерная точность и бескомпромиссное качество</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}