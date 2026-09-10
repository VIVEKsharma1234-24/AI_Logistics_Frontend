import React, { useEffect, useState } from 'react';
import { getIncidents } from '../../api/index';
import Card from '../../components/common/Card';
import './IncidentsPage.css'; // Assuming you have some styles for this page

const IncidentsPage = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const data = await getIncidents();
        setIncidents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  if (loading) {
    return <div>Loading incidents...</div>;
  }

  if (error) {
    return <div>Error fetching incidents: {error}</div>;
  }

  return (
    <div className="incidents-page">
      <h1>Incidents</h1>
      <div className="incidents-list">
        {incidents.map((incident) => (
          <Card key={incident.id} title={incident.type} description={incident.description} />
        ))}
      </div>
    </div>
  );
};

export default IncidentsPage;