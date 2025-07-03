

export default function ProductShowcase() {
  return (
    <div className="container-fluid p-0">
      <div className="card-Holder">
        <div className="row p-3">
          <div className="col-12 text-center mb-3" data-type="header-title-container">
            <h1>Выбери свой стиль <br /> тюнинга</h1>
          </div>
          <div className="in-block" data-type="micro-comp-container">
            <img src="src/assets/images/logo_autonexus2.png" alt="Эмблема" />
            <div>
              <a href="#" className="text-muted">Закажи пакет услуг – получи VIP-обслуживание</a>
              <p>Персональный менеджер и расширенная гарантия.</p>
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
                                        <h5 className="card-title carousel-title">Закись азота</h5>
                                        <h6 className="card-subtitle text-muted">25 000₽</h6>
                                        <img src="src/assets/images/nos.png" className="card-img-top" alt="Товар 1"></img>
                                        <p className="card-text">Мгновенный прирост мощности +150 л.с.<br></br>для драг-рейсинга</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title carousel-title">Подвеска</h5>
                                        <h6 className="card-subtitle text-muted">42 000₽</h6>
                                        <img src="src/assets/images/podveska.png" className="card-img-top" alt="Товар 2"></img>
                                        <p className="card-text">Койловеры с регулировкой жесткости<br></br>и клиренса</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title carousel-title">Нагнетатель</h5>
                                        <h6 className="card-subtitle text-muted">68 000₽</h6>
                                        <img src="src/assets/images/nagnetatel.png" className="card-img-top" alt="Товар 3"></img>
                                        <p className="card-text">Компрессорный наддув<br></br>без турбоямы</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title carousel-title">Турбина</h5>
                                        <h6 className="card-subtitle text-muted">37 000₽</h6>
                                        <img src="src/assets/images/turbina.png" className="card-img-top" alt="Товар 4"></img>
                                        <p className="card-text">Турбокит Garrett для увеличения<br></br>мощности до 40%</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
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
                                        <h5 className="card-title carousel-title">Закись азота</h5>
                                        <h6 className="card-subtitle text-muted">25 000₽</h6>
                                        <img src="src/assets/images/nos.png" className="card-img-top" alt="Товар 1"></img>
                                        <p className="card-text">Мгновенный прирост мощности +150 л.с.<br></br>для драг-рейсинга</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title carousel-title">Подвеска</h5>
                                        <h6 className="card-subtitle text-muted">42 000₽</h6>
                                        <img src="src/assets/images/podveska.png" className="card-img-top" alt="Товар 2"></img>
                                        <p className="card-text">Койловеры с регулировкой жесткости<br></br>и клиренса</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title carousel-title">Нагнетатель</h5>
                                        <h6 className="card-subtitle text-muted">68 000₽</h6>
                                        <img src="src/assets/images/nagnetatel.png" className="card-img-top" alt="Товар 3"></img>
                                        <p className="card-text">Компрессорный наддув<br></br>без турбоямы</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body" data-type="crd">
                                        <h5 className="card-title carousel-title">Турбина</h5>
                                        <h6 className="card-subtitle text-muted">37 000₽</h6>
                                        <img src="src/assets/images/turbina.png" className="card-img-top" alt="Товар 4"></img>
                                        <p className="card-text">Турбокит Garrett для увеличения<br></br>мощности до 40%</p>
                                        <div>
                                            <button className="btn btn-primary">Заказать</button>
                                            <br></br>
                                            <button className="btn btn-link">Описание</button>
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
        <button className="btn btn-secondary">Сравнить пакеты</button>
      </div>
      <div className="background-rectangle2"></div>
    </div>
  );
}