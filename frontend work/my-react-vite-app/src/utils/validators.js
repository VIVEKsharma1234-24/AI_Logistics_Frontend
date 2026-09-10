// This file contains utility functions for validating data.

export function validateIncidentData(data) {
  const { type, latitude, longitude, severity, description } = data;
  const errors = {};

  if (!type) {
    errors.type = "Type is required.";
  }

  if (latitude === undefined || latitude < -90 || latitude > 90) {
    errors.latitude = "Latitude must be between -90 and 90.";
  }

  if (longitude === undefined || longitude < -180 || longitude > 180) {
    errors.longitude = "Longitude must be between -180 and 180.";
  }

  if (!severity) {
    errors.severity = "Severity is required.";
  }

  if (!description) {
    errors.description = "Description is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateRiskPredictionData(data) {
  const { latitude, longitude, rainfall_1h, rainfall_6h, rainfall_24h, soil_moisture, slope, elevation, historical_landslides } = data;
  const errors = {};

  if (latitude === undefined || latitude < -90 || latitude > 90) {
    errors.latitude = "Latitude must be between -90 and 90.";
  }

  if (longitude === undefined || longitude < -180 || longitude > 180) {
    errors.longitude = "Longitude must be between -180 and 180.";
  }

  if (rainfall_1h < 0) {
    errors.rainfall_1h = "Rainfall (1 hour) must be at least 0.";
  }

  if (rainfall_6h < 0) {
    errors.rainfall_6h = "Rainfall (6 hours) must be at least 0.";
  }

  if (rainfall_24h < 0) {
    errors.rainfall_24h = "Rainfall (24 hours) must be at least 0.";
  }

  if (soil_moisture < 0 || soil_moisture > 100) {
    errors.soil_moisture = "Soil moisture must be between 0 and 100.";
  }

  if (slope < 0 || slope > 90) {
    errors.slope = "Slope must be between 0 and 90.";
  }

  if (elevation < -500) {
    errors.elevation = "Elevation must be at least -500.";
  }

  if (historical_landslides < 0) {
    errors.historical_landslides = "Historical landslides must be at least 0.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}