

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem('popx_user_email');
    const savedPassword = localStorage.getItem('popx_user_password');
    if (form.email === savedEmail && form.password === savedPassword) {
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-top">
        <div className="login-title">Sign in to your PopX account</div>
        <div className="login-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="Email Address"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
          />
          {error && <div style={{ color: '#ff4d4f', marginBottom: '8px', marginLeft: '2px' }}>{error}</div>}
          <button type="submit" className="btn btn-primary login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
