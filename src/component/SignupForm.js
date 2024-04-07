import React, { useState } from 'react';

const SignupForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() !== confirmPassword.trim()) {
      setError('The Passwords do not match. Please try again.');
      return;
    }

    if (!username.trim() || !password.trim() || !confirmPassword.trim() || !email.trim()) {
      setError('All fields are required!');
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Username"
            value={username}
            onChange={handleChange}
          />
        </section>
        <section>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handleChange}
          />
        </section>
        <section>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </section>
        <section>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleChange}
          />
        </section>
        <button type="submit">Signup</button>
      </form>
      <button onClick={toggleForm}>Switch to Login</button>
    </div>
  );
};

export default SignupForm;
