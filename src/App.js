import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginRegister } from './Components/LoginRegister/LoginRegister';
import { Dashboard } from './Components/Dashboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login function to simulate authentication
  const handleLogin = () => {
    setIsAuthenticated(true); // Set user as authenticated
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Login/Register route */}
          <Route path="/" element={<LoginRegister onLogin={handleLogin} />} />

          {/* Dashboard route (protected) */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
