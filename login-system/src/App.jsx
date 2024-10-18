import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import EmployeePage from './components/EmployeePage';
import LoginFailure from './components/LoginFailure';
import Navbar from './components/Navbar'; // Import the Navbar

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will be displayed on all pages */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/failure" element={<LoginFailure />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
