// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all top-level components
import HomePage from './HomePage';
import MenuPage from './MenuPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout" element={
            <div style={{padding: '50px', textAlign: 'center'}}>
              <h1>💳 Checkout</h1>
              <p>Proceed to payment and address selection.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 