import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isRegister, setIsRegister] = useState(false); // Track if user is registering

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegister) {
      // Registration form logic
      if (password !== confirmPassword) {
        console.log('Passwords do not match');
        return;
      }
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      window.location.href = 'welcome.html'; // Redirect to another page after registering
    } else {
      // Login form logic
      console.log('Email:', email);
      console.log('Password:', password);
      window.location.href = 'dashboard.html'; // Redirect after login
    }
  };

  return (
    <>
      <form>
        {isRegister && (
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <input
            type="password"
            id="confirmPass"
            name="confirmPass"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button className="button-56" role="button" onClick={handleSubmit}>
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <a href="#" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : "Don't have an account? Register today!"}
      </a>
    </>
  );
};

const Header = () => {
  return (
    <>
      <h2>Co-lab</h2>
      <h3>Find the whimsical</h3>
    </>
  );
};

const HeaderA = ReactDOM.createRoot(document.getElementById('head'));
HeaderA.render(<Header />);
const formRoot = ReactDOM.createRoot(document.getElementById('form'));
formRoot.render(<Form />);
