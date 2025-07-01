

export default function HeroSection() {
  return (
    <div className="container-fluid p-0" data-type="mama_sin">
      <img className="mama_sin" src="src/assets/images/mama_sin.jpg" alt="mama_sin" />
      <div className="d-flex justify-content-center align-items-center">
        <div className="content-block">
          <h1>If you can’t be <br /> there, feel there <br /> with Portal</h1>
          <p>Smart video calling with Alexa Built‑in.</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary">Watch the Demo</button>
            <a href="#" className="text-darkblue">Compare Portals</a>
          </div>
        </div>
      </div>
    </div>
  );
}