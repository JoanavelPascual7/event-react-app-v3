import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Reviews.png';
import '../CSS/NavBar.css'


function Logo() {
  return <img src={logo} alt="MetroHubLogo" />;
}

function NavBar() {
  return (
    <nav className="navbar">
        <div id='logo-container'>
      <Link to="/" id="MetroHubLogo" className='navbar-logo'>
        <Logo/>
      </Link>
      </div>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default NavBar;
