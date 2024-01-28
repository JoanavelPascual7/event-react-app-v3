import React from 'react';
import { Link } from 'react-router-dom';

import nycImage from '../nyc.jpg';
import logo from "../Images/Reviews.png"
import '../CSS/Home.css'

export default function Home() {
  return (
    <div className="event-container"> 
        <div className="nyc-image-section">
    <img src={nycImage} alt="New York City" className="nyc-image" />
        </div>     
      <div className="home-page-header">
        <h1 className="home-page-title"><img id="homepage-logo-icon" src={logo} alt="MetroHubLogo" /></h1>
        <p className="home-page-description">
  <h3>Welcome</h3>
  Your hub for discovering and sharing experiences on the latest events in New York City.
</p>
        <div className="home-page-links">
          <Link to="/events" className="home-page-link">
            Browse Events
          </Link>
          <Link to="/events/new" className="home-page-link">
            Create New Event
          </Link>
        </div>
      </div>
    </div>
  );
}
