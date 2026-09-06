import { api } from './api'

export const normalSimulationState = { rainfall: 80, soilMoisture: 42, risk: 32, roadStatus: 'OPEN', alerts: 1, emergencyPriority: 'P3' }
export const heavyRainfallSimulationState = { rainfall: 150, soilMoisture: 83, risk: 89, roadStatus: 'BLOCKED', alerts: 5, emergencyPriority: 'P1' }

export function startHeavyRainfallSimulation() { return new Promise((resolve) => { window.setTimeout(() => resolve(heavyRainfallSimulationState), 900) }) }
export function startHeavyRainfallSimulationRequest(payload) { return api.post('/api/simulation/heavy-rainfall', payload) }
export function resetSimulationRequest() { return api.post('/api/simulation/reset') }