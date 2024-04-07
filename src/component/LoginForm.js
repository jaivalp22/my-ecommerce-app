import React, { useState } from 'react';
const LoginForm = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                value = {username}
                placeholder = "Enter your Username"
                onChange = {(e) => setUsername(e.target.value)}
                required
                />
        <br/>
        <label htmlFor = "password">Password:</label>
            <input
                type = "password"
                id = "password"
                name = "password"
                value = {password}
                placeholder = "Enter your Password"
                onChange = {(e) => setPassword(e.target.value)}
                required
                />
        <br/>
        <button type="submit">Login</button>
      </form>
      <button onClick={toggleForm}>Switch to Signup</button>
    </section>
  );
};

export default LoginForm;
