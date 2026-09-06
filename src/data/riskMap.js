export const mapCenter = [25.5788, 91.8933]

export const riskZones = [
  { id: 'mawphlang', location: 'Mawphlang, East Khasi Hills', position: [25.435, 91.748], radius: 4200, score: 89, level: 'CRITICAL', rainfall: 145, soilMoisture: 83, slope: 39, villages: 4, roads: 2 },
  { id: 'tawang', location: 'Sangti Valley, Tawang', position: [27.586, 91.861], radius: 3600, score: 76, level: 'HIGH', rainfall: 112, soilMoisture: 71, slope: 31, villages: 3, roads: 1 },
  { id: 'jatinga', location: 'Jatinga, Dima Hasao', position: [25.524, 93.413], radius: 3000, score: 61, level: 'MODERATE', rainfall: 88, soilMoisture: 58, slope: 24, villages: 2, roads: 1 },
  { id: 'aizawl', location: 'Aizawl southern ridge', position: [23.704, 92.717], radius: 2600, score: 34, level: 'LOW', rainfall: 54, soilMoisture: 41, slope: 17, villages: 1, roads: 0 },
]

export const mapRoads = [
  { id: 'nh13', name: 'NH-13 Tawang route', positions: [[27.63, 91.72], [27.59, 91.86], [27.51, 92.02]], status: 'Blocked' },
  { id: 'mawphlang', name: 'Mawphlang-Balat road', positions: [[25.52, 91.72], [25.435, 91.748], [25.36, 91.81]], status: 'Restricted' },
  { id: 'aizawl', name: 'Aizawl bypass', positions: [[23.78, 92.66], [23.704, 92.717], [23.64, 92.78]], status: 'Clear' },
]

export const villages = [
  { name: 'Mawphlang', position: [25.435, 91.748], population: 840 },
  { name: 'Sangti', position: [27.586, 91.861], population: 430 },
  { name: 'Jatinga', position: [25.524, 93.413], population: 610 },
  { name: 'Saitual', position: [23.9, 92.98], population: 275 },
]

export const incidents = [
  { title: 'Slope failure near school access', position: [25.448, 91.77], level: 'CRITICAL', reported: '24 min ago' },
  { title: 'Road surface displacement', position: [27.565, 91.9], level: 'HIGH', reported: '1 hr ago' },
  { title: 'Drainage overflow reported', position: [25.5, 93.39], level: 'MODERATE', reported: '2 hrs ago' },
]

export const sensors = [
  { name: 'Mawphlang rain gauge', position: [25.412, 91.72], reading: '145 mm / 24h' },
  { name: 'Tawang soil monitor', position: [27.615, 91.9], reading: '71% moisture' },
  { name: 'Jatinga slope sensor', position: [25.55, 93.44], reading: '24° slope' },
  { name: 'Aizawl weather station', position: [23.73, 92.68], reading: '54 mm / 24h' },
]

export const emergencyFacilities = [
  { name: 'Mawphlang Response Centre', position: [25.48, 91.78], type: 'Response centre' },
  { name: 'Tawang District Hospital', position: [27.585, 91.87], type: 'Medical facility' },
  { name: 'Aizawl Relief Depot', position: [23.72, 92.73], type: 'Relief depot' },
]