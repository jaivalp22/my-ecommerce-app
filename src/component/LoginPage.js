import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Header />
      {isLoginForm ? 
        <LoginForm toggleForm={toggleForm} />
       : 
        <SignupForm toggleForm={toggleForm} />
      }
      <Footer />
    </div>
  );
};

export default LoginPage;
