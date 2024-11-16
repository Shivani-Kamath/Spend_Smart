import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './frontend/auth/Login'; // Adjust the import path for Login
import Signup from './frontend/auth/Signup'; // Adjust the import path for Signup
import Dashboard from './frontend/components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Route for Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Default Route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
    // <Dashboard />
  );
};

export default App;
