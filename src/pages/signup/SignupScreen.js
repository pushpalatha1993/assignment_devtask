

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupScreen.css';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleRadio = (e) => {
    setForm((prev) => ({ ...prev, agency: e.target.value }));
    setTouched((prev) => ({ ...prev, agency: true }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    // Phone validation: must be 10 digits
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9]{10}$/.test(form.phone.trim())) {
      newErrors.phone = 'Phone Number must be 10 digits';
    }
    // Email validation: basic regex
    if (!form.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^([a-zA-Z0-9_\-.+]+)@([a-zA-Z0-9\-.]+)\.([a-zA-Z]{2,})$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!form.agency) newErrors.agency = 'Please select agency option';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      password: true,
      agency: true
    });
    if (Object.keys(validationErrors).length === 0) {
      // Save email and password to localStorage for demo login
  localStorage.setItem('popx_user_email', form.email);
  localStorage.setItem('popx_user_password', form.password);
  localStorage.setItem('popx_user_fullname', form.fullName);
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-top">
        <div className="signup-title">Create your PopX account</div>
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="fullName"
            className={`signup-input${errors.fullName && touched.fullName ? ' signup-input-error' : ''}`}
            placeholder="Full Name*"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && touched.fullName && <div className="signup-error">{errors.fullName}</div>}
          <input
            type="tel"
            name="phone"
            className={`signup-input${errors.phone && touched.phone ? ' signup-input-error' : ''}`}
            placeholder="Phone Number*"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && touched.phone && <div className="signup-error">{errors.phone}</div>}
          <input
            type="email"
            name="email"
            className={`signup-input${errors.email && touched.email ? ' signup-input-error' : ''}`}
            placeholder="Email Address*"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && <div className="signup-error">{errors.email}</div>}
          <input
            type="password"
            name="password"
            className={`signup-input${errors.password && touched.password ? ' signup-input-error' : ''}`}
            placeholder="Password*"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && <div className="signup-error">{errors.password}</div>}
          <input
            type="text"
            name="company"
            className="signup-input"
            placeholder="Company Name"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
          />
          <div className="signup-agency">
            <span>Are you an agency?*</span>
            <div className="signup-radio-group">
              <label>
                <input type="radio" name="agency" value="yes" checked={form.agency === 'yes'} onChange={handleRadio} /> Yes
              </label>
              <label>
                <input type="radio" name="agency" value="no" checked={form.agency === 'no'} onChange={handleRadio} /> No
              </label>
            </div>
          </div>
          {errors.agency && touched.agency && <div className="signup-error">{errors.agency}</div>}
          <button type="submit" className="btn btn-primary signup-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
