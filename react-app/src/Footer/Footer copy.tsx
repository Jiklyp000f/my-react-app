import { Link } from "react-router-dom";


export default function Footer() {
    return <>
  <div className="container-fluid p-0 footer-bg">
    <div className="row align-items-center" data-type="footer">
      <div className="col-md-3 text-top">
        <img src="src/assets/images/logo_auto_foot.jpg" alt="footer_logo" className="footer-logo"></img>
      </div>
      <div className="col-md-8" data-type="foot">
        <div className="d-flex align-items-start">
          <div className="d-flex flex-column footer-links-container">
            <div className="d-flex footer-links-margin">
              <div className="col-md-4"> 
                <div className="d-flex flex-column">
                  <Link to="*">
                  <a href="#">Главная</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Услуги</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Технологии</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Безопасность</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Поддержка</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Карта сайта</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column">
                  <Link to="*">
                  <a href="#">Конфиденциальность</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Файлы cookie</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Условия</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Информация</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Условия</a>
                  </Link>
                  <Link to="*">
                  <a href="#">Реклама</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-0 footer-links-margin"> 
            <p className="footer-email-text">Подпишитесь на рассылку AutoNexus, <br></br>чтобы получать новости о наших услугах и акциях.</p>
            <Link to="*">
            <button className="btn btn-primary btn-sm">Подписаться</button>
            </Link>
            <button className="btn btn-link btn-sm">Россия (Русский)</button>
          </div>
        </div>
        <div className="mt-1">
          <p className="footer-disclaimer-text">Услуги и их доступность могут отличаться в зависимости от региона. Подробности уточняйте у менеджеров. Изображения на экране смоделированы.  <br></br>
                            Опыт использования может отличаться. Для некоторых услуг может потребоваться регистрация в системе AutoNexus. <br></br>
                            Некоторые функции могут быть недоступны для всех моделей автомобилей. Для доступа к некоторым функциям может потребоваться мобильное приложение AutoNexus. Дополнительная регистрация,
                            <br></br>условия и тарифы могут применяться.</p>
          <p className="footer-disclaimer-text">*Представляет экономию по сравнению с обычными неакционными ценами. Для получения скидки необходимо приобрести две услуги одновременно. Не суммируется с другими предложениями.  <br></br>
                            Не действует на предыдущие покупки. Предложение не передается. Не обменивается на наличные. Действует только на товары в наличии. <br></br>
                            Предложение может быть изменено или отменено в любое время без предварительного уведомления. В некоторых регионах предложение может не действовать.</p>
          <p className="footer-disclaimer-text">©2023 AutoNexus. Все права защищены. AutoNexus и логотип AutoNexus являются товарными знаками AutoNexus. <br></br>
                            Другие названия и бренды могут быть товарными знаками их соответствующих владельцев.</p>
        </div>
      </div>
    </div>
  </div>
    </>
}