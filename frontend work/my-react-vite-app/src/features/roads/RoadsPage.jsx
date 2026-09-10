import React, { useEffect, useState } from 'react';
import { getRoads } from '../../api/index';
import Card from '../../components/common/Card';
import './RoadsPage.css'; // Assuming you have some styles for this page

const RoadsPage = () => {
  const [roads, setRoads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoads = async () => {
      try {
        const data = await getRoads();
        setRoads(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoads();
  }, []);

  if (loading) {
    return <div>Loading roads...</div>;
  }

  if (error) {
    return <div>Error fetching roads: {error}</div>;
  }

  return (
    <div className="roads-page">
      <h1>Roads Information</h1>
      <div className="roads-list">
        {roads.map((road) => (
          <Card key={road.id} title={road.name}>
            <p>Status: {road.status}</p>
            <p>Risk Score: {road.risk_score}</p>
            <p>Last Updated: {new Date(road.last_updated).toLocaleString()}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoadsPage;