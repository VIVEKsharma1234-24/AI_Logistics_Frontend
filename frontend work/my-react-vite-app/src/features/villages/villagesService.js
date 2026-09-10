const API_BASE = "http://localhost:8000/api/villages";

export async function getVillages(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${API_BASE}?${queryString}` : API_BASE;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch villages: ${response.status}`);
  }

  return response.json();
}

export async function getVillageById(villageId) {
  const response = await fetch(`${API_BASE}/${villageId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch village: ${response.status}`);
  }

  return response.json();
}