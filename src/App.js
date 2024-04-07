import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/authenticator';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';
import SignupForm from './component/SignupForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/products" element={<Productpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;