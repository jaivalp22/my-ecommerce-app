import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';
import SignupForm from './component/SignupForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;