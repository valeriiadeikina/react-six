import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Nav from './Nav.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/task-1/ClockPage.tsx';
import MainPage from './components/task-2/MainPage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Если нужны JS-компоненты

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/task1" element={<Store />} />
        <Route path="/task2" index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
