// components/StudentList.jsx
import React from "react";

export default function StudentList({ students, search, setSearch }) {
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-8">
      <div className="rounded-2xl shadow-lg bg-white p-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Students List</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full mb-6 bg-gray-50 text-gray-800"
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700">
                <th className="p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Email</th>
                <th className="p-4 font-semibold">Course</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr
                  key={s.studentId}
                  className={
                    i % 2 === 0
                      ? "bg-gray-50 hover:bg-indigo-50 transition"
                      : "bg-white hover:bg-indigo-50 transition"
                  }
                >
                  <td className="p-4 text-center rounded-l-xl">{s.studentId}</td>
                  <td className="p-4 text-gray-800">{s.name}</td>
                  <td className="p-4 text-gray-800">{s.email}</td>
                  <td className="p-4 text-gray-800">{s.course}</td>
                  <td
                    className={`p-4 font-medium text-center rounded-r-xl ${
                      s.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {s.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
