import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputCreate from './InputCreate';
import Home from './Home'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<InputCreate />} />
      </Routes>
    </Router>
  );
};

export default App;

