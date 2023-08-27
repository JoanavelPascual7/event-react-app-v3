import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from "../components/Events";



function Index() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events`)
      .then((response) => {
        console.log('API Response:', response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div className="index-container">
      <h1 className='show-title'> List of Events </h1>
      <table>
        <thead>
          {/* Your table header */}
        </thead>
        <tbody>
          {events.map((event) => (
            <Event key={event.id} event={event} /> 
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
