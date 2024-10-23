import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Farmers from './components/Farmers';
import Orders from './components/Orders';
import MarketTrends from './components/MarketTrends';
import Appointments from './components/Appointments';
import Support from './components/Support';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/market-trends" element={<MarketTrends />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        {/* Redirect to dashboard if no match */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
