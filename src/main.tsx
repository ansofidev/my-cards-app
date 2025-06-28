import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyCardsPage from './pages/MyCardsPage/MyCardsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/my-cards" />} />
        <Route path="/my-cards" element={<MyCardsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
