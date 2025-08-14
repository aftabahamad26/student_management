// components/Dashboard.jsx
import React from "react";

export default function Dashboard({ total }) {
  return (
    <div className="mb-8">
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 text-white text-center">
          <h2 className="text-3xl font-bold mb-2 tracking-tight drop-shadow">Dashboard</h2>
        </div>
        <div className="p-8 text-center">
          <p className="text-2xl font-semibold text-gray-800 mb-2">Welcome!</p>
          <p className="text-lg text-gray-600">You have <span className="font-bold text-indigo-600 text-2xl">{total}</span> students in the system.</p>
        </div>
      </div>
    </div>
  );
}
