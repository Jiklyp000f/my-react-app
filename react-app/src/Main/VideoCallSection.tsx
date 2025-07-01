
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
                <img src="src/assets/images/whatsapp.jpg" className="img-fluid" alt="Эмблема 2" />
              </div>
              <h1>Makes video calls <br /> with Messenger and <br /> WhatsApp</h1>
              <p>
                Easily video call with friends and family on their smartphones <br />
                and tablets, even if they don’t have Portal.
              </p>
              <small>
                “Hey Portal” voice command availability varies. Learn more. Requires Messenger or WhatsApp account. <br />
                WhatsApp is not available on tablets.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}