import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Holder from './clickNbuy/Holder';
import { AuthForm } from './clickNbuy/AuthForm.jsx'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to main page if authenticated, otherwise show login/register */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/main" /> : <AuthForm onAuth={handleAuth} />} />
        <Route path="/main" element={isAuthenticated ? <Holder /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
