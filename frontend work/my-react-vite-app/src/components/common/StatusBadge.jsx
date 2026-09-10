import React from 'react';

const statusStyles = {
  active: 'bg-green-500 text-white',
  open: 'bg-blue-500 text-white',
  in_progress: 'bg-yellow-500 text-white',
  resolved: 'bg-gray-500 text-white',
  closed: 'bg-red-500 text-white',
  high_risk: 'bg-orange-500 text-white',
  critical: 'bg-red-700 text-white',
};

const StatusBadge = ({ status }) => {
  const statusClass = statusStyles[status] || 'bg-gray-300 text-black';

  return (
    <span className={`inline-block px-3 py-1 rounded-full ${statusClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;