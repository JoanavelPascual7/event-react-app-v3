import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="event-container">
      <p className='home-page-title'>Find Local Events Near You</p>
      <Link to="/events">Browse Events</Link>
      <div></div>
      <Link to="/events/new">Create New Event</Link>
    </div>
  );
}

