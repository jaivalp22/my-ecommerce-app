import React from 'react';

const LoginForm = ({ toggleForm }) => {


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor = "username">Username:</label>
            <input
                type = "text"
                id = "username"
                name = "username"
                placeholder = "Enter your Username"
                required
                />
        <br />
        <label htmlFor = "password">Password:</label>
            <input
                type = "password"
                id = "password"
                name = "password"
                placeholder = "Enter your Password"
                required
                />
        <br />

        <button type="submit">Login</button>
      </form>
      <button onClick={toggleForm}>Switch to Signup</button>
    </section>
  );
};

export default LoginForm;
