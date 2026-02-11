import { Link } from 'react-router-dom';
import { memo } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  userName: string | null;
  onLogout: () => void;
}

const Navbar = memo(({ onLoginClick, userName, onLogout }: NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <Link to={'/'}>
          <img className="logo" src="src/assets/images/logo.png" alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
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
          <div className="d-flex align-items-center">
            {userName ? (
              <div className="auth-state d-flex align-items-center">
                <p className="user-greeting mb-0 me-2 d-none d-sm-block">Привет, {userName}</p>
                <button
                  className="btn btn-outline-danger logout-btn"
                  type="button"
                  onClick={onLogout}
                  aria-label="Выйти"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <button
                className="btn btn-outline-success ms-2 login-btn"
                type="button"
                onClick={onLoginClick}
              >
                Войти
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
