import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil.js';
import Avatares from './pages/Avatares.js';
import './App.css';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Perfil />} />
        <Route path="/avatares" element={<Avatares />} />
      </Routes>
    </Router>
  );
};

export default App;
