// Login.js
import React from 'react';
import './Login.css'; // Ensure you're importing the CSS file

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit" className="login-btn">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
