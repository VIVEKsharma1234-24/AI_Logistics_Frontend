import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Alerts from './pages/Alerts'
import CitizenReport from './pages/CitizenReport'
import Dashboard from './pages/Dashboard'
import EmergencyResponse from './pages/EmergencyResponse'
import Incidents from './pages/Incidents'
import RiskMap from './pages/RiskMap'
import Settings from './pages/Settings'

function App() {
  return <BrowserRouter><Routes><Route element={<AppLayout />}><Route index element={<Navigate to="/dashboard" replace />} /><Route path="dashboard" element={<Dashboard />} /><Route path="risk-map" element={<RiskMap />} /><Route path="incidents" element={<Incidents />} /><Route path="alerts" element={<Alerts />} /><Route path="emergency-response" element={<EmergencyResponse />} /><Route path="citizen-report" element={<CitizenReport />} /><Route path="settings" element={<Settings />} /></Route></Routes></BrowserRouter>
}

export default App