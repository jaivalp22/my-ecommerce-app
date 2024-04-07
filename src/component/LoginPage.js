import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      <Header />
      {showSignup ? (
        <SignupForm toggleForm={toggleForm} />
      ) : (
        <LoginForm toggleForm={toggleForm} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
