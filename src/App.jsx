import React, { useEffect, useState } from "react";
import Dashboard from "./Component/Dashboard.jsx";
import StudentList from "./Component/StudentList.jsx";
import AddStudent from "./Component/AddStudent.jsx";

export default function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("directory");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const courses = ["computer science & engineering", "mathematics", "physics", "business"];
        const transformed = data.users.slice(0, 10).map((u, i) => ({
          studentId: i + 1,
          name: `${u.firstName} ${u.lastName}`,
          email: u.email,
          course: courses[i % courses.length],
          year: `${(i % 4) + 1} Year`,
          status: Math.random() > 0.3 ? "Active" : "Inactive",
        }));
        setStudents(transformed);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [
      ...prev,
      {
        ...student,
        studentId: prev.length ? prev[prev.length - 1].studentId + 1 : 1,
        year: student.year || "1 Year",
      },
    ]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.studentId !== id));
  };

  const activeCourses = [...new Set(students.map((s) => s.course))].length;
  const successRate = students.length
    ? Math.round((students.filter((s) => s.status === "Active").length / students.length) * 100)
    : 0;

  return (
    <div className="min-h-screen flex items-start justify-center py-10 px-4 sm:px-8">
      <div className="w-full max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl bg-white shadow-xl border border-indigo-50">
        {/* Header */}
        <header className="rounded-2xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 p-6 sm:p-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
              Student Management System
            </h1>
            <p className="text-indigo-100 text-sm sm:text-base max-w-2xl mx-auto">
              Manage students, courses and track performance with clarity.
            </p>
          </div>
        </header>

        {/* Dashboard Stats */}
        <Dashboard total={students.length} activeCourses={activeCourses} successRate={successRate} />

        {/* Tabs */}
        <nav className="flex gap-3 items-center mb-6">
          <div className="flex-1 flex gap-2 bg-gray-50 p-1 rounded-full">
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-shadow duration-200 ${
                tab === "directory" ? "bg-white shadow-md text-indigo-700" : "text-indigo-600 hover:bg-white/60"
              }`}
              onClick={() => setTab("directory")}
            >
              Student Directory
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-shadow duration-200 ${
                tab === "add" ? "bg-white shadow-md text-indigo-700" : "text-indigo-600 hover:bg-white/60"
              }`}
              onClick={() => setTab("add")}
            >
              Add Student
            </button>
          </div>
          <div className="ml-auto text-sm text-gray-600">
            Total: <span className="font-semibold text-indigo-700">{students.length}</span>
          </div>
        </nav>

        {/* Tab Content */}
        {tab === "directory" ? (
          <StudentList
            students={students}
            search={search}
            setSearch={setSearch}
            onDelete={deleteStudent} 
          />
        ) : (
          <AddStudent onAdd={addStudent} />
        )}
      </div>
    </div>
  );
}
