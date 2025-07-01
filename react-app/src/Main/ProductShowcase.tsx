

export default function ProductShowcase() {
  return (
    <div className="container-fluid p-0">
      <div className="card-Holder">
        <div className="row p-3">
          <div className="col-12 text-center mb-3" data-type="header-title-container">
            <h1>Find the Portal that’s <br /> right for you</h1>
          </div>
          <div className="in-block" data-type="micro-comp-container">
            <img src="src/assets/images/microCOMP.png" alt="Эмблема" />
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
                                        <h5 className="card-title carousel-title">Portal TV</h5>
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
                                        <h5 className="card-title carousel-title">Portal</h5>
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
                                        <h5 className="card-title carousel-title">Portal+</h5>
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
                                        <h5 className="card-title carousel-title">Portal Mini</h5>
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
                                            <h5 className="card-title carousel-title">Portal TV</h5>
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
                                            <h5 className="card-title carousel-title">Portal</h5>
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
                                            <h5 className="card-title carousel-title">Portal+</h5>
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
                                            <h5 className="card-title carousel-title">Portal Mini</h5>
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
  );
}