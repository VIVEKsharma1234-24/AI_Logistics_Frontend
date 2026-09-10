const API_BASE = "http://localhost:8000/api";

export const endpoints = {
  healthCheck: `${API_BASE}/health`,
  incidents: {
    fetchAll: `${API_BASE}/incidents`,
    fetchById: (id) => `${API_BASE}/incidents/${id}`,
    create: `${API_BASE}/incidents`,
    update: (id) => `${API_BASE}/incidents/${id}`,
  },
  risk: {
    current: `${API_BASE}/risk/current`,
    predict: `${API_BASE}/risk/predict`,
    forecast: `${API_BASE}/risk/forecast`,
  },
  roads: {
    fetchAll: `${API_BASE}/roads`,
    fetchById: (id) => `${API_BASE}/roads/${id}`,
    updateStatus: (id) => `${API_BASE}/roads/${id}/status`,
  },
  villages: {
    fetchAll: `${API_BASE}/villages`,
    fetchById: (id) => `${API_BASE}/villages/${id}`,
  },
  alerts: {
    fetchAll: `${API_BASE}/alerts`,
    create: `${API_BASE}/alerts`,
    generate: `${API_BASE}/alerts/generate`,
  },
  emergency: {
    priorities: `${API_BASE}/emergency/priorities`,
  },
  routes: {
    optimize: `${API_BASE}/routes/optimize`,
  },
  simulation: {
    heavyRainfall: `${API_BASE}/simulation/heavy-rainfall`,
    reset: `${API_BASE}/simulation/reset`,
  },
};