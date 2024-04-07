import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {authenticator} from "./authenticator";

const LoginForm = ({ toggleForm }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigator = useNavigate();

  const {setIsLoggedIn} = useContext(authenticator);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.message === 'Login successful') {
            console.log(data);
            setIsLoggedIn(true);
            navigator('/products');
          } else {
            setError(data.message);
          }
        } else {
          const data = await response.json();
          setError(data.message);
        }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to login');
    }
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
                />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <button onClick={toggleForm}>Switch to Signup</button>
    </section>
  );
};

export default LoginForm;
