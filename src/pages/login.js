import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.text();
      if (response.ok) {
        console.log('Login success:', result);
        navigate('/main'); // Redirect to /main
      } else {
        console.log('Login failed:', result);
        setErrorMessage('Error 404: Hash not found in the system.'); // Set cool error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('System malfunction: Unable to connect to the matrix.'); // Set cool error message
    }
  };

  return (
    <>
      <div className="form">
        <div>
          <h2>Co-lab</h2>
          <h3>Find your whimsical</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="i"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="i"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button-56">Login</button>
          </form>
          {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message */}
        </div>
      </div>
    </>
  );
};

export default Login;
