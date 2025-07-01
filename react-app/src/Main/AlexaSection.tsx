export default function AlexaSection() {
  return (
    <div className="container-fluid p-0">
      <div className="row align-items-center p-3">
        <div className="col-md-6 text-left" data-type="alexa-container">
          <img src="src/assets/images/zapyate.png" alt="Эмблема" className="mb-2" />
          <h3>Alexa Built-in</h3>
          <p>
            Portal comes with Alexa Built-in, so you can see and do <br />
            more. Use your voice to control your smart home and check <br />
            the weather, who’s at the front door, listen to your favorite <br />
            music, watch the news and more, hands-free. Just ask.
          </p>
          <button type="button" className="btn btn-info learn-more-button">Learn More</button>
        </div>
        <div className="col-md-6 text-center p-0">
          <img src="src/assets/images/turbo.webp" className="img-fluid" alt="Изображение" />
          <small className="small-text">
            Amazon, Alexa and all related logos are trademarks of Amazon.com, Inc. or its affiliate. <br />
            Additional account registration, terms and fees may apply. Features may vary by location.
          </small>
        </div>
      </div>
    </div>
  );
}