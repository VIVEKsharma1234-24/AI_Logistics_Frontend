import axios from 'axios'

export const BACKEND_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
export const api = axios.create({ baseURL: BACKEND_BASE_URL, headers: { 'Content-Type': 'application/json' } })

export function getApiErrorMessage(error) {
	if (error?.response?.data?.detail) return String(error.response.data.detail)
	if (error?.response?.status) return `Backend request failed with status ${error.response.status}.`
	if (error?.request) return 'The FastAPI backend is unavailable. Check that it is running at http://localhost:8000.'
	return error?.message || 'An unexpected backend error occurred.'
}

export async function getCurrentRisk() { return (await api.get('/api/risk/current')).data }
export async function getRiskForecast() { return (await api.get('/api/risk/forecast')).data }
export async function getIncidents(params) { return (await api.get('/api/incidents', { params })).data }
export async function createIncident(payload) { return (await api.post('/api/incidents', payload)).data }
export async function getRoads(params) { return (await api.get('/api/roads', { params })).data }
export async function getVillages(params) { return (await api.get('/api/villages', { params })).data }
export async function getSensors(params) { return (await api.get('/api/sensors', { params })).data }
export async function getAlerts(params) { return (await api.get('/api/alerts', { params })).data }
export async function getEmergencyPriorities(params) { return (await api.get('/api/emergency/priorities', { params })).data }
export async function optimizeRoute(payload) { return (await api.post('/api/routes/optimize', payload)).data }
export async function runHeavyRainfallSimulation(payload = {}) { return (await api.post('/api/simulation/heavy-rainfall', payload)).data }
export async function resetSimulation() { return (await api.post('/api/simulation/reset')).data }