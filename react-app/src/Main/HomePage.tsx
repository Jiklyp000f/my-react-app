import CardsContainer from "./CardsContainer";

export default function HomePage() {
    return <>
     <div className="container-fluid p-0" data-type="mama_sin">
        <img className="mama_sin" src="src/assets/images/mama_sin.jpg" alt="mama_sin"></img>
        <div className="d-flex justify-content-center align-items-center">
            <div className="content-block">
                <h1>If you can’t be <br></br> there, feel there <br></br> with Portal</h1>
                <p>Smart video calling with Alexa Built‑in.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">Watch the Demo</button>
                    <a href="#" className="text-darkblue">Compare Portals</a>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid p-0">
        <div className="independent-block">
            <img src="src/assets/images/microCOMP.png" alt="Эмблема"></img>
            <div>
                <a href="#" className="text-muted">Buy any 2 and save $50*</a>
                <p className="red">Ship to multiple addresses at no extra cost.</p>
            </div>
        </div>
    </div>
    <div className="container-fluid p-0">
        <div className="row g-3" data-type="cards">
          <CardsContainer />
        </div>
      </div>
    <div className="container-fluid p-0 mt-5" data-type="mama_doch">
      <div className="text-center">
          <h1>Smart Camera keeps every <br></br> moment front and center</h1>
          <img src="src/assets/images/ctol.jpg" className="img-fluid" alt="Изображение"></img>
          <div className="row mt-3">
              <div className="col-md-6">
                <h5>Keeps up with the action</h5>
                  <p className="picture">Smart Camera automatically pans and zooms <br></br>
                    to keep up with the action. Move and talk freely <br></br>
                    and always stay in frame.</p>
                  <a href="#" className="text-darkblue">Learn More</a>
              </div>
              <div className="col-md-6">
                <h5>Keeps everyone in view</h5>
                  <p className="picture">As more people enter a room, Smart Camera <br></br>
                    automatically widens to keep everyone in view, <br></br>
                    so you don’t miss a moment.</p>
                  <a href="#" className="text-darkblue">Learn More</a>
              </div>
          </div>
      </div>
      <div className="background-rectangle"></div>
    </div>

    <div className="container-fluid p-0">
        <div className="container-fluid p-0">
            <div className="row align-items-center">
                <div className="col-md-6" data-type="image-container-left">
                    <img src="src/assets/images/planshet.jpg" className="img-fluid" alt="Изображение слева"></img>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-start" data-type="text-container">
                        <div className="mb-2">
                            <img src="src/assets/images/molniya.jpg" className="img-fluid" alt="Эмблема 1"></img>
                            <img src="src/assets/images/whatsapp.jpg" className="img-fluid" alt="Эмблема 2"></img>
                        </div>
                        <h1>Makes video calls <br></br> with Messenger and <br></br> WhatsApp</h1>
                        <p>Easily video call with friends and family on their smartphones <br></br> and tablets, even if they don’t have Portal.</p>
                        <small>“Hey Portal” voice command availability varies. Learn more. Requires Messenger or WhatsApp account. <br></br> WhatsApp is not available on tablets.</small>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="container-fluid p-0 mt-5">
            <img src="src/assets/images/clown.jpg" className="img-fluid" alt="Изображение на весь контейнер"></img>
        </div>
    </div>
    
    <div className="container-fluid p-0">
        <div className="row align-items-center p-3">
            <div className="col-md-6 text-left" data-type="alexa-container">
                <img src="src/assets/images/zapyate.png" alt="Эмблема" className="mb-2"></img>
                <h3>Alexa Built-in</h3>
                <p>Portal comes with Alexa Built-in, so you can see and do <br></br> more. Use your voice to control your smart home and check <br></br> the weather, who’s at the front door, listen to your favorite <br></br> music, watch the news and more, hands-free. Just ask.</p>
                <button type="button" className="btn btn-info learn-more-button">Learn More</button>
            </div>
            <div className="col-md-6 text-center p-0">
                <img src="src/assets/images/rozy.jpg" className="img-fluid" alt="Изображение"></img>
                <small className="small-text">Amazon, Alexa and all related logos are trademarks of Amazon.com, Inc. or its affiliate. <br></br> Additional account registration, terms and fees may apply. Features may vary by location.</small>
            </div>
        </div>
    
        <div className="row p-3">
            <div className="col-md-6 text-left position-relative" data-type="photo1-container">
                <img src="src/assets/images/imgR.jpg" className="img-fluid" alt="Изображение 1"></img>
                <div className="text-overlay" data-type="fhoto1">
                    <h2>Private by design</h2>
                    <p>Easily disable the camera and the microphone, or block the lens <br></br> with the camera cover. And all Portal video calls are encrypted.</p>
                    <a href="#" className="text-white">Learn More</a>
                </div>
            </div>
            <div className="col-md-6 text-left position-relative" data-type="photo2-container">
                <img src="src/assets/images/imgL.jpg" className="img-fluid" alt="Изображение 2"></img>
                <div className="text-overlay" data-type="fhoto2">
                    <h2>Work smarter from home</h2>
                    <p>Whether you and your co-workers use Workplace, BlueJeans, <br></br> GoToMeeting, Webex or Zoom, Portal’s got the tools to keep <br></br> you productive while working from home.</p>
                    <a href="#" className="text-white">Learn More</a>
                </div>
            </div>
        </div>
    
        <div className="card-Holder">
            <div className="row p-3">
                <div className="col-12 text-center mb-3" data-type="header-title-container">
                    <h1>Find the Portal that’s <br></br> right for you</h1>
                </div>
                <div className="in-block" data-type="micro-comp-container">
                    <img src="src/assets/images/microCOMP.png" alt="Эмблема"></img>
                    <div>
                        <a href="#" className="text-muted">Buy any 2 and save $50*</a>
                        <p>Ship to multiple addresses at no extra cost.</p>
                    </div>
                </div>
            </div>

            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title">Portal TV</h5>
                                        <h6 className="card-subtitle text-muted">$149</h6>
                                        <img src="src/assets/images/tovar1.jpg" className="card-img-top" alt="Товар 1"></img>
                                        <p className="card-text">Smart video calling on <br></br>your TV</p>
                                        <div>
                                            <button className="btn btn-primary">Buy Now</button>
                                            <br></br>
                                            <button className="btn btn-link">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title">Portal</h5>
                                        <h6 className="card-subtitle text-muted">$179</h6>
                                        <img src="src/assets/images/tovar2.jpg" className="card-img-top" alt="Товар 2"></img>
                                        <p className="card-text">Smart video calling <br></br>on a 10” HD display</p>
                                        <div>
                                            <button className="btn btn-primary">Buy Now</button>
                                            <br></br>
                                            <button className="btn btn-link">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title">Portal+</h5>
                                        <h6 className="card-subtitle text-muted">$279</h6>
                                        <img src="src/assets/images/tovar3.jpg" className="card-img-top" alt="Товар 3"></img>
                                        <p className="card-text">Smart video calling on <br></br>a 15.6” HD display</p>
                                        <div>
                                            <button className="btn btn-primary">Buy Now</button>
                                            <br></br>
                                            <button className="btn btn-link">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title">Portal Mini</h5>
                                        <h6 className="card-subtitle text-muted">$129</h6>
                                        <img src="src/assets/images/tovar4.jpg" className="card-img-top" alt="Товар 4"></img>
                                        <p className="card-text">Smart video calling <br></br>on an 8” HD display</p>
                                        <div>
                                            <button className="btn btn-primary">Buy Now</button>
                                            <br></br>
                                            <button className="btn btn-link">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body" data-type="crd">
                                            <h5 className="card-title">Portal TV</h5>
                                            <h6 className="card-subtitle text-muted">$149</h6>
                                            <img src="src/assets/images/tovar1.jpg" className="card-img-top" alt="Товар 1"></img>
                                            <p className="card-text">Smart video calling on <br></br>your TV</p>
                                            <div>
                                                <button className="btn btn-primary">Buy Now</button>
                                                <br></br>
                                                <button className="btn btn-link">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body" data-type="crd">
                                            <h5 className="card-title">Portal</h5>
                                            <h6 className="card-subtitle text-muted">$179</h6>
                                            <img src="src/assets/images/tovar2.jpg" className="card-img-top" alt="Товар 2"></img>
                                            <p className="card-text">Smart video calling <br></br>on a 10” HD display</p>
                                            <div>
                                                <button className="btn btn-primary">Buy Now</button>
                                                <br></br>
                                                <button className="btn btn-link">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body" data-type="crd">
                                            <h5 className="card-title">Portal+</h5>
                                            <h6 className="card-subtitle text-muted">$279</h6>
                                            <img src="src/assets/images/tovar3.jpg" className="card-img-top" alt="Товар 3"></img>
                                            <p className="card-text">Smart video calling on <br></br>a 15.6” HD display</p>
                                            <div>
                                                <button className="btn btn-primary">Buy Now</button>
                                                <br></br>
                                                <button className="btn btn-link">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body" data-type="crd">
                                            <h5 className="card-title">Portal Mini</h5>
                                            <h6 className="card-subtitle text-muted">$129</h6>
                                            <img src="src/assets/images/tovar4.jpg" className="card-img-top" alt="Товар 4"></img>
                                            <p className="card-text">Smart video calling <br></br>on an 8” HD display</p>
                                            <div>
                                                <button className="btn btn-primary">Buy Now</button>
                                                <br></br>
                                                <button className="btn btn-link">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    
        <div className="text-center mb-3 compare-products-container">
            <button className="btn btn-secondary">Compare Products</button>
        </div>
        <div className="background-rectangle2"></div>
    </div>
    </>
}