import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './register.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log('Email:', email);
    console.log('Password:', password);
    window.location.href = 'register.html';
    // You can add more functionality here, like sending data to a server
  };

  return (
    <>
      <form >
        <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" id="pass" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button class="button-56" role="button" onClick={handleSubmit}>Login</button>
      </form>
      <a href='register.html'>Don't have an account? Register today!</a>
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
}
 


const HeaderA = ReactDOM.createRoot(document.getElementById('head'));
HeaderA.render(<Header />);
const formRoot = ReactDOM.createRoot(document.getElementById('form'));
formRoot.render(<Form />);




