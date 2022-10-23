import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommingSoon from './pages/LandingPage';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const helmetContext = {
  'title': 'ecoseller',
};


root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CommingSoon />} />
          </Routes>
        </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);