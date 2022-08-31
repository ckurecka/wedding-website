import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from './App';
import WeddingRegistry from './pages/Registry/registry-page';
import HotelPage from './pages/Hotel/hotel-page';
import VenuePage from './pages/Venue/venue-page';
import GalleryPage from './pages/Gallery/gallery-page';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/registry" element={<WeddingRegistry />}></Route>
      <Route path="/hotel-information" element={<HotelPage />}></Route>
      <Route path="/wedding-information" element={<VenuePage />}></Route>
      <Route path="/gallery" element={<GalleryPage />}></Route>
    </Routes>
      {/* <App /> */}

  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
//<React.StrictMode>
//</React.StrictMode>
