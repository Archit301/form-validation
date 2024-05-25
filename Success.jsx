import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data submitted</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Submitted Data</h1>
      <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(formData, null, 2)}</pre>
      <button
        onClick={() => navigate('/')}
        className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Go Back
      </button>
    </div>
  );
}

export default Success;