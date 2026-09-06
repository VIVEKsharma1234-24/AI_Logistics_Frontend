export const emergencyPriorities = [
  { id: 'p1-village-a', priority: 'P1', priorityLabel: 'IMMEDIATE', location: 'Mawphlang Village Cluster', score: 94, risk: 91, population: '2,400', road: 'HIGH_RISK', reason: 'Landslide movement above the eastern settlement edge', position: [25.435, 91.748] },
  { id: 'p1-village-b', priority: 'P1', priorityLabel: 'IMMEDIATE', location: 'Sangti Valley', score: 91, risk: 88, population: '1,180', road: 'BLOCKED', reason: 'Flooded crossing has isolated two hamlets', position: [27.586, 91.861] },
  { id: 'p2-village-a', priority: 'P2', priorityLabel: 'HIGH', location: 'Jatinga Hillside', score: 78, risk: 72, population: '860', road: 'PARTIALLY_BLOCKED', reason: 'Rockfall debris narrowing the access road', position: [25.524, 93.413] },
  { id: 'p3-village-a', priority: 'P3', priorityLabel: 'MODERATE', location: 'Aizawl Southern Ridge', score: 56, risk: 41, population: '520', road: 'OPEN', reason: 'Persistent rain with no active access disruption', position: [23.704, 92.717] },
]

export const emergencyFacilities = [
  { id: 'facility-hospital', name: 'East Khasi Hills District Hospital', type: 'Hospital', position: [25.5788, 91.8933], capacity: '120 beds' },
  { id: 'facility-centre', name: 'Mawphlang Response Centre', type: 'Emergency centre', position: [25.48, 91.78], capacity: '6 response units' },
  { id: 'facility-shelter', name: 'Sangti Community Shelter', type: 'Shelter', position: [27.61, 91.91], capacity: '300 people' },
  { id: 'facility-depot', name: 'Aizawl Relief Depot', type: 'Emergency centre', position: [23.72, 92.73], capacity: '12 vehicles' },
]

export const routeLocations = ['Mawphlang Response Centre', 'Sangti Valley', 'Jatinga Hillside', 'East Khasi Hills District Hospital']
export const safestRoute = { distance: '31 km', eta: '48 min', safetyScore: '94%', risk: 'LOW', coordinates: [[25.5788, 91.8933], [25.53, 91.84], [25.48, 91.78], [25.435, 91.748]] }