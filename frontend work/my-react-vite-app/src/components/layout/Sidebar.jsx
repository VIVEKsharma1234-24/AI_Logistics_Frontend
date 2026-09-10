import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>NER-SAFE</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/incidents">Incidents</Link>
          </li>
          <li>
            <Link to="/risk">Risk Predictions</Link>
          </li>
          <li>
            <Link to="/roads">Roads</Link>
          </li>
          <li>
            <Link to="/villages">Villages</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/emergency">Emergency Response</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;