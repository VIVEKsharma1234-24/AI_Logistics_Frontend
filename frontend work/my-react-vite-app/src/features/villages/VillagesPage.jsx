import React, { useEffect, useState } from 'react';
import { getVillages } from '../../api/index';
import Card from '../../components/common/Card';
import Header from '../../components/common/Header';

const VillagesPage = () => {
  const [villages, setVillages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVillages = async () => {
      try {
        const data = await getVillages();
        setVillages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVillages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header title="Villages" />
      <div className="villages-list">
        {villages.map(village => (
          <Card key={village.id} title={village.name} content={`Risk Level: ${village.risk_level}`} />
        ))}
      </div>
    </div>
  );
};

export default VillagesPage;