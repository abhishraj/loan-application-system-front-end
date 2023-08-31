import React from 'react';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './views/pages/LandingPage';
import DetailsPage from './views/pages/DetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
