import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginFailure.css';

function LoginFailure() {
  const navigate = useNavigate();

  return (
    <div className="failure-container">
      <div className="failure-card">
        <h2>Login Failed</h2>
        <button onClick={() => navigate('/')} className="retry-btn">Retry Login</button>
        <button onClick={() => navigate('/employee')} className="employee-btn">Go to Employee Page</button>
      </div>
    </div>
  );
}

export default LoginFailure;
