import React from 'react';
import './index.stylesheet.css';
import profileImage from '../../assets/images/home/profileImage.png';

export const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="text-content">
          <p className="role">UI/UX Design and QA Tester</p>
          <h1 className="name">FIKRI ZAKKA</h1>
        </div>

        <div className="image-content">
          {/* Decorative circles */}
          <div className="circle circle-large"></div>
          <div className="circle circle-small"></div>

          <img
            src={profileImage}
            alt="Fikri Zakka Profile"
            className="profile-pic absolute"
          />
        </div>

        <div className="quote-content">
          <span className="quote-mark">“</span>
          <p className="summary-text">
            I'm a dedicated and results-driven UI/UX designer and tester with a
            Bachelor's degree in Information Systems from Universitas
            Pembangunan Nasional Veteran Jakarta.
          </p>
        </div>
      </header>
    </div>
  );
};
