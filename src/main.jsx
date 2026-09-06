import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SimulationProvider } from './context/SimulationContext'
import { LiveDataProvider } from './context/LiveDataContext'
import { AppProvider } from './context/AppContext'

createRoot(document.getElementById('root')).render(<StrictMode><AppProvider><LiveDataProvider><SimulationProvider><App /></SimulationProvider></LiveDataProvider></AppProvider></StrictMode>)