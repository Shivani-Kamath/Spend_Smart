import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './frontend/auth/Login'; // Adjust the import path for Login
import Signup from './frontend/auth/Signup'; // Adjust the import path for Signup
import Dashboard from './frontend/components/Dashboard';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Set the user as authenticated
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login handleLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

