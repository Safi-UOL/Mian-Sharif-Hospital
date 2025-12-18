import { useState } from "react";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function Patients() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Ali", age: 30, disease: "Fever", phone: "0300-1111111", date: "2024-12-01" },
    { id: 2, name: "Ahmed", age: 45, disease: "Diabetes", phone: "0300-2222222", date: "2024-12-05" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    disease: "",
    phone: "",
    date: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new patient
  const handleAddPatient = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.disease && formData.phone && formData.date) {
      const newPatient = {
        id: patients.length > 0 ? Math.max(...patients.map((p) => p.id)) + 1 : 1,
        ...formData,
      };
      setPatients([...patients, newPatient]);
      setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
      setShowForm(false);
      alert("Patient added successfully!");
    }
  };

  // Edit patient
  const handleEditPatient = (patient) => {
    setEditingId(patient.id);
    setFormData(patient);
    setShowForm(true);
    setSelectedPatientId(null);
  };

  // Update patient
  const handleUpdatePatient = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.disease && formData.phone && formData.date) {
      setPatients(
        patients.map((p) =>
          p.id === editingId
            ? { id: p.id, ...formData }
            : p
        )
      );
      setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
      setEditingId(null);
      setShowForm(false);
      alert("Patient updated successfully!");
    }
  };

  // Delete patient
  const handleDeletePatient = (id) => {
    if (confirm("Are you sure you want to delete this patient?")) {
      setPatients(patients.filter((p) => p.id !== id));
      setSelectedPatientId(null);
      alert("Patient deleted successfully!");
    }
  };

  // View patient details
  const selectedPatient = patients.find((p) => p.id === selectedPatientId);

  return (
    <div className="pt-20 pb-20 px-6 md:px-20 text-gray-900 dark:text-gray-100 min-h-screen">
      
      <ScrollReveal direction="left">
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-semibold mb-4 tracking-tight">
            Patient Management System
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Manage all patient records, create new records, edit existing information, and view detailed patient data.
          </p>
        </section>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT: Patients List */}
        <ScrollReveal direction="left">
          <div className="md:col-span-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">All Patients ({patients.length})</h2>
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingId(null);
                  setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
                }}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition"
              >
                + Add New
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatientId(patient.id)}
                  className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                    selectedPatientId === patient.id
                      ? "bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400"
                      : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-blue-400"
                  }`}
                >
                  <p className="font-semibold text-lg">{patient.name}</p>
                  <p className="text-sm opacity-80">{patient.disease}</p>
                  <p className="text-xs opacity-70">ID: {patient.id}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* MIDDLE: Form (Create/Edit) */}
        {showForm && (
          <ScrollReveal direction="right">
            <div className="md:col-span-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-6">
                {editingId ? "Edit Patient" : "Add New Patient"}
              </h2>

              <form onSubmit={editingId ? handleUpdatePatient : handleAddPatient} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Patient Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter patient name"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter age"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Disease</label>
                  <input
                    type="text"
                    name="disease"
                    value={formData.disease}
                    onChange={handleInputChange}
                    placeholder="Enter disease/condition"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0300-0000000"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                  >
                    {editingId ? "Update Patient" : "Add Patient"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                      setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
                    }}
                    className="flex-1 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-medium transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        )}

        {/* RIGHT: Patient Details */}
        {selectedPatient && !showForm && (
          <ScrollReveal direction="right">
            <div className="md:col-span-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-6">Patient Details</h2>

              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm opacity-70">Patient ID</p>
                  <p className="text-xl font-semibold">{selectedPatient.id}</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm opacity-70">Full Name</p>
                  <p className="text-xl font-semibold">{selectedPatient.name}</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm opacity-70">Age</p>
                  <p className="text-xl font-semibold">{selectedPatient.age} years</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm opacity-70">Disease/Condition</p>
                  <p className="text-xl font-semibold">{selectedPatient.disease}</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm opacity-70">Phone Number</p>
                  <p className="text-xl font-semibold">{selectedPatient.phone}</p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm opacity-70">Registration Date</p>
                  <p className="text-xl font-semibold">{selectedPatient.date}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => handleEditPatient(selectedPatient)}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                  >
                    Edit Patient
                  </button>
                  <button
                    onClick={() => handleDeletePatient(selectedPatient.id)}
                    className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                  >
                    Delete Patient
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>

    </div>
  );
}
