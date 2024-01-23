import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const storedSignupData = JSON.parse(localStorage.getItem('signupData'));

    if (
      formData.username === storedSignupData?.username &&
      formData.password === storedSignupData?.password
    ) {

      window.location.href = '/innerhome';
    } else {
      
      alert('Invalid login credentials. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <p>
        Don't have an account?{' '}
        <Link to="/signup" className="signup-link">
          Signup here
        </Link>
      </p>
      </form>

    </div>
  );
};

export default Login;
