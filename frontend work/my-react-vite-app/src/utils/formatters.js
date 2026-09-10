const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatRiskLevel = (riskScore) => {
  if (riskScore <= 30) return 'low';
  if (riskScore <= 60) return 'moderate';
  if (riskScore <= 80) return 'high';
  return 'critical';
};

const formatIncidentDescription = (incident) => {
  return `${incident.type.charAt(0).toUpperCase() + incident.type.slice(1)}: ${incident.description}`;
};

const formatCoordinates = (latitude, longitude) => {
  return `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
};

export { formatDate, formatRiskLevel, formatIncidentDescription, formatCoordinates };