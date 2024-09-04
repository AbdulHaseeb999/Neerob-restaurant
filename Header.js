import React from 'react';
import {link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="contact-info">
        <span>(316) 555-0116</span>
        <span>order@example.com</span>
      </div>
      <div className="nav-bar">
        <h1>Neerob</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#catering">Catering</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <div className="cta-buttons">
          <button>Reservation</button>
          <button>Order Now ▼</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
