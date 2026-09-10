import React, { useState } from 'react';
import { createIncident, createRiskPrediction, optimizeRoutes, simulateHeavyRainfall, resetSimulation } from '../api/index';
import Card from '../components/common/Card';

const EmergencyPage = () => {
  const [incidentData, setIncidentData] = useState({
    type: '',
    latitude: '',
    longitude: '',
    severity: '',
    description: '',
    image_url: '',
    status: 'active',
  });
  const [riskData, setRiskData] = useState({
    latitude: '',
    longitude: '',
    rainfall_1h: '',
    rainfall_6h: '',
    rainfall_24h: '',
    soil_moisture: '',
    slope: '',
    elevation: '',
    historical_landslides: '',
  });
  const [routeData, setRouteData] = useState({
    origin_latitude: '',
    origin_longitude: '',
    destination_latitude: '',
    destination_longitude: '',
    max_risk_score: '',
  });
  const [simulationResult, setSimulationResult] = useState(null);

  const handleIncidentChange = (e) => {
    const { name, value } = e.target;
    setIncidentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRiskChange = (e) => {
    const { name, value } = e.target;
    setRiskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRouteChange = (e) => {
    const { name, value } = e.target;
    setRouteData((prev) => ({ ...prev, [name]: value }));
  };

  const submitIncident = async (e) => {
    e.preventDefault();
    try {
      const response = await createIncident(incidentData);
      console.log('Incident created:', response);
    } catch (error) {
      console.error('Error creating incident:', error);
    }
  };

  const submitRiskPrediction = async (e) => {
    e.preventDefault();
    try {
      const response = await createRiskPrediction(riskData);
      console.log('Risk predicted:', response);
    } catch (error) {
      console.error('Error predicting risk:', error);
    }
  };

  const submitRouteEvaluation = async (e) => {
    e.preventDefault();
    try {
      const response = await optimizeRoutes(routeData);
      console.log('Route evaluation:', response);
    } catch (error) {
      console.error('Error evaluating route:', error);
    }
  };

  const handleHeavyRainSimulation = async () => {
    try {
      const response = await simulateHeavyRainfall();
      setSimulationResult(response);
    } catch (error) {
      console.error('Error simulating heavy rainfall:', error);
    }
  };

  const handleResetSimulation = async () => {
    try {
      const response = await resetSimulation();
      setSimulationResult(response);
    } catch (error) {
      console.error('Error resetting simulation:', error);
    }
  };

  return (
    <div>
      <h1>Emergency Management</h1>
      <Card>
        <h2>Create Incident</h2>
        <form onSubmit={submitIncident}>
          {/* Form fields for incidentData */}
          <input type="text" name="type" placeholder="Type" onChange={handleIncidentChange} required />
          <input type="number" name="latitude" placeholder="Latitude" onChange={handleIncidentChange} required />
          <input type="number" name="longitude" placeholder="Longitude" onChange={handleIncidentChange} required />
          <input type="text" name="severity" placeholder="Severity" onChange={handleIncidentChange} required />
          <textarea name="description" placeholder="Description" onChange={handleIncidentChange} required />
          <input type="url" name="image_url" placeholder="Image URL" onChange={handleIncidentChange} />
          <button type="submit">Submit Incident</button>
        </form>
      </Card>

      <Card>
        <h2>Predict Risk</h2>
        <form onSubmit={submitRiskPrediction}>
          {/* Form fields for riskData */}
          <input type="number" name="latitude" placeholder="Latitude" onChange={handleRiskChange} required />
          <input type="number" name="longitude" placeholder="Longitude" onChange={handleRiskChange} required />
          <input type="number" name="rainfall_1h" placeholder="Rainfall (1h)" onChange={handleRiskChange} required />
          <input type="number" name="rainfall_6h" placeholder="Rainfall (6h)" onChange={handleRiskChange} required />
          <input type="number" name="rainfall_24h" placeholder="Rainfall (24h)" onChange={handleRiskChange} required />
          <input type="number" name="soil_moisture" placeholder="Soil Moisture" onChange={handleRiskChange} required />
          <input type="number" name="slope" placeholder="Slope" onChange={handleRiskChange} required />
          <input type="number" name="elevation" placeholder="Elevation" onChange={handleRiskChange} required />
          <input type="number" name="historical_landslides" placeholder="Historical Landslides" onChange={handleRiskChange} required />
          <button type="submit">Predict Risk</button>
        </form>
      </Card>

      <Card>
        <h2>Evaluate Route</h2>
        <form onSubmit={submitRouteEvaluation}>
          {/* Form fields for routeData */}
          <input type="number" name="origin_latitude" placeholder="Origin Latitude" onChange={handleRouteChange} required />
          <input type="number" name="origin_longitude" placeholder="Origin Longitude" onChange={handleRouteChange} required />
          <input type="number" name="destination_latitude" placeholder="Destination Latitude" onChange={handleRouteChange} required />
          <input type="number" name="destination_longitude" placeholder="Destination Longitude" onChange={handleRouteChange} required />
          <input type="number" name="max_risk_score" placeholder="Max Risk Score" onChange={handleRouteChange} required />
          <button type="submit">Evaluate Route</button>
        </form>
      </Card>

      <Card>
        <h2>Simulate Heavy Rainfall</h2>
        <button onClick={handleHeavyRainSimulation}>Simulate</button>
        <h3>Simulation Result:</h3>
        {simulationResult && <pre>{JSON.stringify(simulationResult, null, 2)}</pre>}
      </Card>

      <Card>
        <h2>Reset Simulation</h2>
        <button onClick={handleResetSimulation}>Reset</button>
      </Card>
    </div>
  );
};

export default EmergencyPage;