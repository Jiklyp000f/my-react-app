

export default function FeatureSection() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-3">
        <div className="col-md-6 text-left position-relative" data-type="photo1-container">
          <img src="src/assets/images/imgR.jpg" className="img-fluid" alt="Изображение 1" />
          <div className="text-overlay" data-type="fhoto1">
            <h2>Private by design</h2>
            <p>
              Easily disable the camera and the microphone, or block the lens <br />
              with the camera cover. And all Portal video calls are encrypted.
            </p>
            <a href="#" className="text-white">Learn More</a>
          </div>
        </div>
        <div className="col-md-6 text-left position-relative" data-type="photo2-container">
          <img src="src/assets/images/imgL.jpg" className="img-fluid" alt="Изображение 2" />
          <div className="text-overlay" data-type="fhoto2">
            <h2>Work smarter from home</h2>
            <p>
              Whether you and your co-workers use Workplace, BlueJeans, <br />
              GoToMeeting, Webex or Zoom, Portal’s got the tools to keep <br />
              you productive while working from home.
            </p>
            <a href="#" className="text-white">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}