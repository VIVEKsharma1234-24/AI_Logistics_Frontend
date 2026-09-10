import React, { useEffect, useState } from 'react';
import { getCurrentRisk, getIncidents, getRoads, getVillages, getAlerts, getEmergencyPriorities } from '../api';

const OverviewPage = () => {
  const [riskData, setRiskData] = useState(null);
  const [incidents, setIncidents] = useState([]);
  const [roads, setRoads] = useState([]);
  const [villages, setVillages] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [emergencyPriorities, setEmergencyPriorities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const risk = await getCurrentRisk();
        const incidentsData = await getIncidents();
        const roadsData = await getRoads();
        const villagesData = await getVillages();
        const alertsData = await getAlerts();
        const prioritiesData = await getEmergencyPriorities();

        setRiskData(risk);
        setIncidents(incidentsData);
        setRoads(roadsData);
        setVillages(villagesData);
        setAlerts(alertsData);
        setEmergencyPriorities(prioritiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Overview</h1>
      <section>
        <h2>Current Risk</h2>
        {riskData ? (
          <div>
            <p>Risk Score: {riskData.risk_score}</p>
            <p>Risk Level: {riskData.risk_level}</p>
          </div>
        ) : (
          <p>Loading risk data...</p>
        )}
      </section>
      <section>
        <h2>Incidents</h2>
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <div key={incident.id}>
              <h3>{incident.type}</h3>
              <p>{incident.description}</p>
            </div>
          ))
        ) : (
          <p>No incidents reported.</p>
        )}
      </section>
      <section>
        <h2>Roads</h2>
        {roads.length > 0 ? (
          roads.map((road) => (
            <div key={road.id}>
              <h3>{road.name}</h3>
              <p>Status: {road.status}</p>
            </div>
          ))
        ) : (
          <p>No road data available.</p>
        )}
      </section>
      <section>
        <h2>Villages</h2>
        {villages.length > 0 ? (
          villages.map((village) => (
            <div key={village.id}>
              <h3>{village.name}</h3>
              <p>Risk Level: {village.risk_level}</p>
            </div>
          ))
        ) : (
          <p>No village data available.</p>
        )}
      </section>
      <section>
        <h2>Alerts</h2>
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id}>
              <h3>{alert.title}</h3>
              <p>{alert.message}</p>
            </div>
          ))
        ) : (
          <p>No alerts available.</p>
        )}
      </section>
      <section>
        <h2>Emergency Priorities</h2>
        {emergencyPriorities.length > 0 ? (
          emergencyPriorities.map((priority) => (
            <div key={priority.location}>
              <h3>{priority.location}</h3>
              <p>Priority Level: {priority.priority_level}</p>
            </div>
          ))
        ) : (
          <p>No emergency priorities available.</p>
        )}
      </section>
    </div>
  );
};

export default OverviewPage;