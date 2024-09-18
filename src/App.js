import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Registration from './pages/registration';
import Main from './pages/main'; // Import Main component
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<>
          <Login />
          <p>Not logged in? <Link to="/register">Register now.</Link></p>
        </>} />
        <Route path="/register" element={<>
          <Registration />
          <p>Already logged in? <Link to="/login">Log in.</Link></p>
        </>} />
        <Route path="/main" element={<Main />} /> {/* Add /main route */}
      </Routes>
    </Router>
  );
};

export default App;
