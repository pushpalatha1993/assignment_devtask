

import React, { useRef, useState } from 'react';
import { BsCameraFill } from 'react-icons/bs';
import './ProfileScreen.css';

const ProfileScreen = () => {
  const fullName = localStorage.getItem('popx_user_fullname') || 'Marie Doe';
  const email = localStorage.getItem('popx_user_email') || 'marie.doe@email.com';
  const [profileImg, setProfileImg] = useState('/profilepic.jpg');
  const fileInputRef = useRef();

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfileImg(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-title">Account Settings</div>
      <div className="profile-row">
        <div className="profile-img-wrapper">
          <img className="profile-img" src={profileImg} alt="Profile" />
          <button type="button" className="profile-camera-btn" onClick={handleCameraClick} title="Change Photo">
            <BsCameraFill size={21} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            capture="environment"
          />
        </div>
        <div className="profile-info">
          <div className="profile-name">{fullName}</div>
          <div className="profile-email">{email}</div>
        </div>
      </div>
      <div className="profile-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.
      </div>
      <div className="profile-end">
      </div>
    </div>
  );
};

export default ProfileScreen;
