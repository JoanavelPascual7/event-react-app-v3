import React from 'react';
import { Link } from 'react-router-dom';

import nycImage from '../nyc.jpg'; // Import the image
import './Home.css'

export default function Home() {
  return (
    <div className="event-container">
      <div className="home-page-header">
        <h1 className="home-page-title">Discover Exciting Events in NYC</h1>
        <p className="home-page-description">
          Welcome to Local Events for You (NYC), your go-to platform for exploring a variety of events happening in the vibrant city of New York. Whether you're a local looking for new experiences or a visitor seeking the best events, we've got you covered.
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
      <div className="nyc-image-section">
        <img src={nycImage} alt="New York City" className="nyc-image" />
      </div>
    </div>
  );
}
