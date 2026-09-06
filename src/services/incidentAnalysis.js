import { api } from './api'

const mockAnalysisResult = {
  classification: 'LANDSLIDE',
  confidence: 91,
  severity: 'HIGH',
  roadBlockage: 'DETECTED',
}

export function analyzeIncidentImageMock() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ...mockAnalysisResult, isMock: true }), 1200)
  })
}

export function analyzeIncidentImage(incidentId, payload) {
  return api.post(`/incidents/${incidentId}/analyze`, payload)
}