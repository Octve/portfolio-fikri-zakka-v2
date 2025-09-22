import React from 'react';
import './index.stylesheet.css';

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="navbar-button portfolio-button">Portfolio</p>
      <button className="navbar-button contact-button">Contact</button>
    </div>
  );
};
