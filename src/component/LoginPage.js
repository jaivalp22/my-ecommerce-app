import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleFormL = () => {
    setIsLoginForm(false);
  };

  const toggleFormS = () => {
    setIsLoginForm(true);
  };

  return (
    <div>
      <Header />
      {isLoginForm ? 
        <LoginForm toggleFormL={toggleFormL} />
       : 
        <SignupForm toggleFormS={toggleFormS} />
      }
      <Footer />
    </div>
  );
};

export default LoginPage;
