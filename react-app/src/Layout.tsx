import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Modal from './Navbar/Modal';
import type { ModalHandlers } from './Navbar/Modal'; 
import { useRef } from 'react';
import { Outlet } from 'react-router-dom'; // Импорт Outlet

function Layout() {
  const modalRef = useRef<ModalHandlers>(null);

  const handleLoginClick = () => {
    if (modalRef.current) {
      modalRef.current.show();
    }
  };

  return (
    <>  
      <Modal ref={modalRef} />
      <Navbar onLoginClick={handleLoginClick} />
      <Outlet /> {/* Заменяем <Main /> на Outlet */}
      <Footer />
    </>
  );
}

export default Layout;