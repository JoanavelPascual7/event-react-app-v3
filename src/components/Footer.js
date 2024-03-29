import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Footer.css'

import logo from "../Images/Reviews.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="left-content">
            <p className='copy-rights'>© {new Date().getFullYear()} Metro Hub <img id="footer-logo" src={logo} alt="MetroHubLogo" />- All rights reserved.</p>
            <p className='joanavel-link'>
              Developed by <a href="https://github.com/JoanavelPascual7">Joanavel Pascual</a>
            </p>
          </div>
          <div className="right-content">
            <Link className='back-home-link' to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
