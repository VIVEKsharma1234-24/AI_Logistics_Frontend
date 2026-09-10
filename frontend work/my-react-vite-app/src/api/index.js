const API_BASE = "http://localhost:8000/api";

async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API failed: ${response.status}`);
  }

  return response.json();
}

async function postJSON(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API failed: ${response.status}`);
  }

  return response.json();
}

export async function checkBackend() {
  return getJSON(`${API_BASE}/`);
}

export async function getIncidents(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  return getJSON(`${API_BASE}/incidents${queryString ? '?' + queryString : ''}`);
}

export async function getCurrentRisk() {
  return getJSON(`${API_BASE}/risk/current`);
}

export async function getRoads() {
  return getJSON(`${API_BASE}/roads`);
}

export async function getVillages(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  return getJSON(`${API_BASE}/villages${queryString ? '?' + queryString : ''}`);
}

export async function getAlerts() {
  return getJSON(`${API_BASE}/alerts`);
}

export async function getEmergencyPriorities() {
  return getJSON(`${API_BASE}/emergency/priorities`);
}

export async function createIncident(data) {
  return postJSON(`${API_BASE}/incidents`, data);
}

export async function createRiskPrediction(data) {
  return postJSON(`${API_BASE}/risk/predict`, data);
}

export async function predictRisk(data) {
  return createRiskPrediction(data);
}

export async function optimizeRoutes(data) {
  return postJSON(`${API_BASE}/routes/optimize`, data);
}

export async function evaluateRoute(data) {
  return optimizeRoutes(data);
}

export async function simulateHeavyRainfall(data) {
  return postJSON(`${API_BASE}/simulation/heavy-rainfall`, data);
}

export async function resetSimulation() {
  return postJSON(`${API_BASE}/simulation/reset`, {});
}