import Navbar from './Navbar/Navbar';
import Modal from './Navbar/Modal';
import type { ModalHandlers } from './Navbar/Modal';
import { useCallback, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import Preloader from './Preloader/Preloader';

function Layout() {
  const modalRef = useRef<ModalHandlers>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const handleLoginClick = () => {
    if (modalRef.current) {
      modalRef.current.show();
    }
  };

  const handleLogin = useCallback((name: string) => {
    setUserName(name);
  }, []);

  const handleLogout = useCallback(() => {
    setUserName(null);
  }, []);

  return (
    <>
      <Preloader />
      <Navbar onLoginClick={handleLoginClick} userName={userName} onLogout={handleLogout} />
      <Modal ref={modalRef} onLogin={handleLogin} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
