const API_BASE = "http://localhost:8000/api";

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export const apiClient = {
  getHealth: () => fetchData(`${API_BASE}/health`),
  checkBackend: () => fetchData(`${API_BASE}/`),
  
  getIncidents: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchData(`${API_BASE}/incidents${queryString ? '?' + queryString : ''}`);
  },
  
  getIncidentById: (id) => fetchData(`${API_BASE}/incidents/${id}`),
  
  createIncident: (incidentData) => fetchData(`${API_BASE}/incidents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(incidentData),
  }),
  
  getCurrentRisk: () => fetchData(`${API_BASE}/risk/current`),
  
  createRiskPrediction: (riskData) => fetchData(`${API_BASE}/risk/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(riskData),
  }),
  
  getRoads: () => fetchData(`${API_BASE}/roads`),
  
  getRoadById: (id) => fetchData(`${API_BASE}/roads/${id}`),
  
  getVillages: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchData(`${API_BASE}/villages${queryString ? '?' + queryString : ''}`);
  },
  
  getVillageById: (id) => fetchData(`${API_BASE}/villages/${id}`),
  
  getAlerts: () => fetchData(`${API_BASE}/alerts`),
  
  createAlert: (alertData) => fetchData(`${API_BASE}/alerts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alertData),
  }),
  
  getEmergencyPriorities: () => fetchData(`${API_BASE}/emergency/priorities`),
  
  optimizeRoutes: (routeData) => fetchData(`${API_BASE}/routes/optimize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(routeData),
  }),
  
  simulateHeavyRainfall: () => fetchData(`${API_BASE}/simulation/heavy-rainfall`, {
    method: 'POST',
  }),
  
  resetSimulation: () => fetchData(`${API_BASE}/simulation/reset`, {
    method: 'POST',
  }),
};