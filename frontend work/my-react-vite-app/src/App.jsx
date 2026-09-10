import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import OverviewPage from './pages/OverviewPage';
import EmergencyPage from './pages/EmergencyPage';
import Header from './components/common/Header';
import Sidebar from './components/layout/Sidebar';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;