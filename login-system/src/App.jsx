import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import EmployeePage from './components/EmployeePage';
import LoginFailure from './components/LoginFailure';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
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
