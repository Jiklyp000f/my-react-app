import { Link } from "react-router-dom";


export default function PromotionBanner() {
  return (
    <div className="container-fluid p-0">
      <div className="independent-block">
        <img src="src/assets/images/logo_autonexus2.png" alt="Эмблема" />
        <div>
          <Link to="*">
            <a href="#" className="text-muted">Закажи 2 услуги – получи скидку 15%*</a>
          </Link>
          <p className="red">Доставка деталей по всей России без переплат.</p>
        </div>
      </div>
    </div>
  );
}