import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Preloader from './Preloader/Preloader';
import HomePage from './Main/HomePage';
import CardsPage from './Main/CardsPage';
import NotFoundPage from './Main/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;