import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submittedStudents, setSubmittedStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.course.trim()) {
      return;
    }

    setSubmittedStudents((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Student registration
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Swaraj Kumar"
              className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="swarajkumarsahoo08@gmail.com"
              className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="B.Tech Computer Science"
              className="w-full h-10 px-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {submittedStudents.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-700 mb-3">
              Registered students
            </h2>
            <div className="space-y-3">
              {submittedStudents.map((student, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 text-sm"
                >
                  <p className="font-medium text-gray-800">{student.name}</p>
                  <p className="text-gray-500">{student.email}</p>
                  <p className="text-gray-500">{student.course}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
