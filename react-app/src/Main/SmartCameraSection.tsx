export default function SmartCameraSection() {
  return (
    <div className="container-fluid p-0 mt-5" data-type="mama_doch">
      <div className="text-center">
        <h1>Smart Camera keeps every <br /> moment front and center</h1>
        <img src="src/assets/images/ctol.jpg" className="img-fluid" alt="Изображение" />
        <div className="row mt-3">
          <div className="col-md-6">
            <h5>Keeps up with the action</h5>
            <p className="picture">
              Smart Camera automatically pans and zooms <br />
              to keep up with the action. Move and talk freely <br />
              and always stay in frame.
            </p>
            <a href="#" className="text-darkblue">Learn More</a>
          </div>
          <div className="col-md-6">
            <h5>Keeps everyone in view</h5>
            <p className="picture">
              As more people enter a room, Smart Camera <br />
              automatically widens to keep everyone in view, <br />
              so you don’t miss a moment.
            </p>
            <a href="#" className="text-darkblue">Learn More</a>
          </div>
        </div>
      </div>
      <div className="background-rectangle"></div>
    </div>
  );
}