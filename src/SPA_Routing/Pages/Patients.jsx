import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  // Real-time listener for Firestore
  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "patients"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(data);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Add new patient to Firestore
  const handleAddPatient = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.disease || !formData.phone || !formData.date) {
      setError("All fields are required");
      return;
    }

    try {
      await addDoc(collection(db, "patients"), {
        ...formData,
        age: parseInt(formData.age),
        createdAt: serverTimestamp(),
      });
      setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
      setShowForm(false);
      alert("Patient added successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit patient
  const handleEditPatient = (patient) => {
    setEditingId(patient.id);
    setFormData(patient);
    setShowForm(true);
    setSelectedPatientId(null);
  };

  // Update patient in Firestore
  const handleUpdatePatient = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.disease || !formData.phone || !formData.date) {
      setError("All fields are required");
      return;
    }

    try {
      const patientRef = doc(db, "patients", editingId);
      await updateDoc(patientRef, {
        ...formData,
        age: parseInt(formData.age),
        updatedAt: serverTimestamp(),
      });
      setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
      setEditingId(null);
      setShowForm(false);
      alert("Patient updated successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete patient from Firestore
  const handleDeletePatient = async (id) => {
    if (confirm("Are you sure you want to delete this patient?")) {
      try {
        await deleteDoc(doc(db, "patients", id));
        setSelectedPatientId(null);
        alert("Patient deleted successfully!");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20 pb-20 px-6 md:px-20 text-gray-900 dark:text-gray-100 min-h-screen">
      
      <ScrollReveal>
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
        <ScrollReveal>
          <div className="md:col-span-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">All Patients ({patients.length})</h2>
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingId(null);
                  setFormData({ name: "", age: "", disease: "", phone: "", date: "" });
                  setError("");
                }}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition"
              >
                + Add New
              </button>
            </div>

            {loading && <p className="text-sm opacity-70">Loading patients...</p>}
            {error && <p className="text-sm text-red-600 dark:text-red-400 mb-3">{error}</p>}

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {patients.length === 0 && !loading && (
                <p className="text-sm opacity-70 text-center py-4">No patients yet. Add one to get started!</p>
              )}
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
                  <p className="text-xs opacity-70">Age: {patient.age}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* MIDDLE: Form (Create/Edit) */}
        {showForm && (
          <ScrollReveal>
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
        {selectedPatientId && !showForm && (
          <ScrollReveal>
            <div className="md:col-span-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-6">Patient Details</h2>

              {patients.find((p) => p.id === selectedPatientId) ? (
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm opacity-70">Full Name</p>
                    <p className="text-xl font-semibold">{patients.find((p) => p.id === selectedPatientId).name}</p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm opacity-70">Age</p>
                    <p className="text-xl font-semibold">{patients.find((p) => p.id === selectedPatientId).age} years</p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm opacity-70">Disease/Condition</p>
                    <p className="text-xl font-semibold">{patients.find((p) => p.id === selectedPatientId).disease}</p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm opacity-70">Phone Number</p>
                    <p className="text-xl font-semibold">{patients.find((p) => p.id === selectedPatientId).phone}</p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm opacity-70">Appointment Date</p>
                    <p className="text-xl font-semibold">{patients.find((p) => p.id === selectedPatientId).date}</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => handleEditPatient(patients.find((p) => p.id === selectedPatientId))}
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                    >
                      Edit Patient
                    </button>
                    <button
                      onClick={() => handleDeletePatient(selectedPatientId)}
                      className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                    >
                      Delete Patient
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm opacity-70">Patient not found</p>
              )}
            </div>
          </ScrollReveal>
        )}

      </div>

    </div>
  );
}
