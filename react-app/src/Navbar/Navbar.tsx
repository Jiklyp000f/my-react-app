import { Link } from "react-router-dom";

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick } : NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
            <Link to={"/"}>
            <img className="logo" src="src/assets/images/logo_auto_foot.jpg" alt="logo"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/cards" className="nav-link">
                          Наши проекты
                        </Link>
                    </li>
                </ul>
      <button 
        className="btn btn-outline-success ms-2" 
        type="button"
        onClick={onLoginClick}
      >
        Войти
      </button>
      </div>
        </div>
    </nav>
  );
};

export default Navbar;