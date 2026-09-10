import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">NER-SAFE Dashboard</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/incidents">Incidents</a></li>
          <li><a href="/risk">Risk Predictions</a></li>
          <li><a href="/roads">Roads</a></li>
          <li><a href="/villages">Villages</a></li>
          <li><a href="/alerts">Alerts</a></li>
          <li><a href="/emergency">Emergency Response</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;