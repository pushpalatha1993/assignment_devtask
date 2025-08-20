
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingScreen.css';


const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="landing-bottom">
        <div className="landing-title">Welcome to PopX</div>
        <div className="landing-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</div>
        <button className="btn btn-primary landing-btn" onClick={() => navigate('/signup')}>Create Account</button>
        <div>
          <span>Already registered? </span>
          <button className="landing-login" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
