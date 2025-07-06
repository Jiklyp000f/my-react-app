import Navbar from './Navbar/Navbar';
import Modal from './Navbar/Modal';
import type { ModalHandlers } from './Navbar/Modal';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import Preloader from './Preloader/Preloader';

function Layout() {
	const modalRef = useRef<ModalHandlers>(null);

	const handleLoginClick = () => {
		if (modalRef.current) {
			modalRef.current.show();
		}
	};

	return (
		<>
			<Preloader />
			<Modal ref={modalRef} />
			<Navbar onLoginClick={handleLoginClick} />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
