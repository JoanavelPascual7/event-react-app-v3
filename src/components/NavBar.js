import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link> 
    </nav>
  );
}

export default NavBar;
