import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // CSS for styling
import Excelr from '../assets/Excelr.png'; // Import your image

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out (can be clearing user data, etc.)
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Excelr} alt="Excelr Logo" className="logo" />
        <h1>Company</h1>
      </div>
      <div className="navbar-right">
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
