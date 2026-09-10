const API_BASE = "http://localhost:8000/api";

async function getRoads() {
  const response = await fetch(`${API_BASE}/roads`);

  if (!response.ok) {
    throw new Error(`Failed to fetch roads: ${response.status}`);
  }

  return response.json();
}

export { getRoads };