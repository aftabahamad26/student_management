import React, { useEffect, useState } from "react";
import Dashboard from "./Component/Dashboard.jsx";
import StudentList from "./Component/StudentList.jsx";
import AddStudent from "./Component/ AddStudent.jsx";


export default function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const courses = ["B.Tech", "B.Sc", "MCA", "BBA"];
        const transformed = data.users.map((u) => ({
          studentId: u.id,
          name: `${u.firstName} ${u.lastName}`,
          email: u.email,
          course: courses[Math.floor(Math.random() * courses.length)],
          status: Math.random() > 0.3 ? "Active" : "Inactive",
        }));
        setStudents(transformed);
      });
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, studentId: prev.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-indigo-100 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto p-6 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700 tracking-tight">Student Management System</h1>
        <Dashboard total={students.length} />
        <AddStudent onAdd={addStudent} />
        <StudentList students={students} search={search} setSearch={setSearch} />
      </div>
    </div>
  );
}
