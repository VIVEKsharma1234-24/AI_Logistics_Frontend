const API_BASE = "http://localhost:8000/api";

async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API failed: ${response.status}`);
  }

  return response.json();
}

export async function getCurrentRisk() {
  return getJSON(`${API_BASE}/risk/current`);
}

export async function createRiskPrediction(data) {
  const response = await fetch(`${API_BASE}/risk/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to create risk prediction: ${response.status}`);
  }

  return response.json();
}

export async function getIncidents(params) {
  const query = new URLSearchParams(params).toString();
  return getJSON(`${API_BASE}/incidents?${query}`);
}

export async function createIncident(data) {
  const response = await fetch(`${API_BASE}/incidents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to create incident: ${response.status}`);
  }

  return response.json();
}

export async function getRoads() {
  return getJSON(`${API_BASE}/roads`);
}

export async function getVillages(params) {
  const query = new URLSearchParams(params).toString();
  return getJSON(`${API_BASE}/villages?${query}`);
}

export async function getAlerts() {
  return getJSON(`${API_BASE}/alerts`);
}

export async function getEmergencyPriorities() {
  return getJSON(`${API_BASE}/emergency/priorities`);
}

export async function optimizeRoute(data) {
  const response = await fetch(`${API_BASE}/routes/optimize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to optimize route: ${response.status}`);
  }

  return response.json();
}

export async function simulateHeavyRainfall() {
  const response = await fetch(`${API_BASE}/simulation/heavy-rainfall`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error(`Failed to simulate heavy rainfall: ${response.status}`);
  }

  return response.json();
}

export async function resetSimulation() {
  const response = await fetch(`${API_BASE}/simulation/reset`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error(`Failed to reset simulation: ${response.status}`);
  }

  return response.json();
}