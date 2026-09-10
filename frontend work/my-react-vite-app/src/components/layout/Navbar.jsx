import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">NER-SAFE</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/incidents">Incidents</Link>
        </li>
        <li>
          <Link to="/alerts">Alerts</Link>
        </li>
        <li>
          <Link to="/risk">Risk</Link>
        </li>
        <li>
          <Link to="/roads">Roads</Link>
        </li>
        <li>
          <Link to="/villages">Villages</Link>
        </li>
        <li>
          <Link to="/emergency">Emergency</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;