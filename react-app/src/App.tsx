import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import CardsPage from './Main/CardsPage';
import NotFoundPage from './Main/NotFoundPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='cards' element={<CardsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
