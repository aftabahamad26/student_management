// components/AddStudent.jsx
import React, { useState } from "react";

export default function AddStudent({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) return;
    onAdd(form);
    setForm({ name: "", email: "", course: "", status: "Active" });
  };

  return (
    <div className="mb-8">
      <div className="rounded-2xl shadow-lg bg-white p-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Add Student</h2>
        <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full bg-gray-50 text-gray-800"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full bg-gray-50 text-gray-800"
          />
          <input
            type="text"
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full bg-gray-50 text-gray-800"
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full bg-gray-50 text-gray-800"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button
            type="submit"
            className="sm:col-span-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
