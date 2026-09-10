import React, { useEffect, useState } from 'react';
import { getCurrentRisk, getRoads, getVillages } from '../../api/index';
import Card from '../../components/common/Card';
import StatusBadge from '../../components/common/StatusBadge';

const RiskPage = () => {
  const [riskData, setRiskData] = useState(null);
  const [roads, setRoads] = useState([]);
  const [villages, setVillages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const riskResponse = await getCurrentRisk();
        const roadsResponse = await getRoads();
        const villagesResponse = await getVillages();

        setRiskData(riskResponse);
        setRoads(roadsResponse);
        setVillages(villagesResponse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Risk Predictions</h1>
      {riskData && (
        <Card>
          <h2>Current Risk Level: {riskData.risk_level}</h2>
          <p>Risk Score: {riskData.risk_score}</p>
          <StatusBadge status={riskData.risk_level} />
        </Card>
      )}
      <h2>Roads</h2>
      {roads.map((road) => (
        <Card key={road.id}>
          <h3>{road.name}</h3>
          <p>Status: {road.status}</p>
        </Card>
      ))}
      <h2>Villages</h2>
      {villages.map((village) => (
        <Card key={village.id}>
          <h3>{village.name}</h3>
          <p>Risk Level: {village.risk_level}</p>
        </Card>
      ))}
    </div>
  );
};

export default RiskPage;