import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CommunitiesPage from './components/CommunitiesPage.js';
import Perfil from './components/Perfil.js';
import Avatares from './components/Avatares.js';
import { FavoritesProvider } from './components/FavoritesContext.js';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/communities" />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/avatares" element={<Avatares />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;