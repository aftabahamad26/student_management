import React, { useState } from "react";

export default function AddStudent({ onAdd }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    year: "",
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!form.firstName || !form.lastName || !form.email || !form.course || !form.year) return;

    onAdd?.({
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      course: form.course,
      year: form.year,
      status: "Active",
    });

    setForm({ firstName: "", lastName: "", email: "", course: "", year: "" });
    setTouched({});
    setSubmitted(false);
  };

  const handleBlur = (field) => setTouched((p) => ({ ...p, [field]: true }));

  return (
    <div className="mb-8">
      <div className="card-surface p-6">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-indigo-800">Add New Student</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              onBlur={() => handleBlur("firstName")}
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full bg-white text-gray-800"
            />
            {(!form.firstName && (touched.firstName || submitted)) && (
              <div className="text-xs text-red-500 mt-1">First name is required</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              onBlur={() => handleBlur("lastName")}
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full bg-white text-gray-800"
            />
            {(!form.lastName && (touched.lastName || submitted)) && (
              <div className="text-xs text-red-500 mt-1">Last name is required</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={() => handleBlur("email")}
              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full bg-white text-gray-800"
            />
            {(!form.email && (touched.email || submitted)) && (
              <div className="text-xs text-red-500 mt-1">Email is required</div>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Course *</label>
              <select
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                onBlur={() => handleBlur("course")}
                className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full bg-white text-gray-800"
              >
                <option value="">Select a course</option>
                <option value="computer science">Computer Science & Eng</option>
             
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="business">Business</option>
              </select>
              {(!form.course && (touched.course || submitted)) && (
                <div className="text-xs text-red-500 mt-1">Course is required</div>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
              <select
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                onBlur={() => handleBlur("year")}
                className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition w-full bg-white text-gray-800"
              >
                <option value="">Select year</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
              </select>
              {(!form.year && (touched.year || submitted)) && (
                <div className="text-xs text-red-500 mt-1">Year is required</div>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold py-3 rounded-full shadow-lg hover:scale-[1.01] active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
