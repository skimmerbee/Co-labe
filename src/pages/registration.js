import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const result = await response.text();
      if (response.ok) {
        console.log('Registration success:', result);
        navigate('/main'); // Redirect to /main
      } else {
        console.error('Registration failed:', result);
        alert(result); // Display server response as an alert
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
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
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <button type="submit" className="button-56">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
