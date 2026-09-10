const API_BASE = "http://localhost:8000/api/incidents";

async function getIncidents(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE}?${queryString}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch incidents: ${response.status}`);
  }

  return response.json();
}

async function createIncident(incidentData) {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(incidentData),
  });

  if (!response.ok) {
    throw new Error(`Failed to create incident: ${response.status}`);
  }

  return response.json();
}

export { getIncidents, createIncident };