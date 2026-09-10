import React, { useEffect, useState } from 'react';
import { fetchAlerts } from './alertsService';
import Card from '../../components/common/Card';

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAlerts = async () => {
      try {
        const data = await fetchAlerts();
        setAlerts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAlerts();
  }, []);

  if (loading) {
    return <div>Loading alerts...</div>;
  }

  if (error) {
    return <div>Error fetching alerts: {error}</div>;
  }

  return (
    <div>
      <h1>Alerts</h1>
      {alerts.length === 0 ? (
        <p>No alerts available.</p>
      ) : (
        alerts.map(alert => (
          <Card key={alert.id} title={alert.title} message={alert.message} />
        ))
      )}
    </div>
  );
};

export default AlertsPage;