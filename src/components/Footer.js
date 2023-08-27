import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Local Events for You (NYC). All rights reserved.</p>
          <p>
            Developed by <a href="https://github.com/JoanavelPascual7">Joanavel Pascual</a>
          </p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </footer>
  );
}
