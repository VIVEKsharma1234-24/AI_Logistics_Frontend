const API_BASE = "http://127.0.0.1:8000";

async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API failed: ${response.status}`);
  }

  return response.json();
}

export async function checkBackend() {
  const response = await fetch(`${API_BASE}/`);

  if (!response.ok) {
    throw new Error(`Backend check failed: ${response.status}`);
  }

  return response.json();
}

export async function getCurrentRisk() {
  return getJSON(`${API_BASE}/risk`);
}

export async function getIncidents() {
  return getJSON(`${API_BASE}/incidents`);
}

export async function getRoads() {
  return getJSON(`${API_BASE}/roads`);
}

export async function getVillages() {
  return getJSON(`${API_BASE}/villages`);
}