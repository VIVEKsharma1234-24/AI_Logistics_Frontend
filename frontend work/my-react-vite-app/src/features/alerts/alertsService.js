const API_BASE = "http://localhost:8000/api";

async function fetchAlerts() {
  const response = await fetch(`${API_BASE}/alerts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch alerts: ${response.status}`);
  }
  return response.json();
}

async function createAlert(alertData) {
  const response = await fetch(`${API_BASE}/alerts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alertData),
  });
  if (!response.ok) {
    throw new Error(`Failed to create alert: ${response.status}`);
  }
  return response.json();
}

export { fetchAlerts, createAlert };