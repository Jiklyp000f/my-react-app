import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Modal from './Navbar/Modal';
import type { ModalHandlers } from './Navbar/Modal'; 
import { useRef } from 'react';

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
      <Main />
      <Footer />
    </>
  );
}

export default Layout;
