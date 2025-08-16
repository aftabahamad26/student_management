import React from "react";

export default function Dashboard({ total = 0, activeCourses = 0, successRate = 0 }) {
  const stats = [
    {
      id: 1,
      name: "Total Students",
      value: total,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      bg: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      name: "Active Courses",
      value: activeCourses,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
      bg: "bg-indigo-50 text-indigo-600",
    },
    {
      id: 3,
      name: "Success Rate",
      value: `${successRate}%`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
      bg: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="card-surface p-5 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg} shadow-sm`}>{stat.icon}</div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
