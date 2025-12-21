import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch single patient by ID from Firestore
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        setLoading(true);
        const patientRef = doc(db, "patients", id);
        const patientSnapshot = await getDoc(patientRef);
        
        if (patientSnapshot.exists()) {
          setPatient({
            id: patientSnapshot.id,
            ...patientSnapshot.data(),
          });
        } else {
          setError("Patient not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPatient();
    }
  }, [id]);

  // Delete patient and redirect
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this patient?")) {
      try {
        await deleteDoc(doc(db, "patients", id));
        alert("Patient deleted successfully!");
        navigate("/assignment/patients");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="pt-20 pb-20 px-6 md:px-20 text-center min-h-screen">
        <p className="text-lg opacity-70">Loading patient details...</p>
      </div>
    );
  }

  if (error || !patient) {
    return (
      <div className="pt-20 pb-20 px-6 md:px-20 text-center min-h-screen">
        <p className="text-lg text-red-600 dark:text-red-400">{error || "Patient not found"}</p>
        <button
          onClick={() => navigate("/assignment/patients")}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Back to Patients List
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 px-6 md:px-20 text-gray-900 dark:text-gray-100 min-h-screen">
      <ScrollReveal>
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-semibold mb-4 tracking-tight">
            {patient.name}
          </h1>
          <p className="text-lg opacity-90">Patient Details & Information</p>
        </section>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
            
            {/* Patient Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-2">Full Name</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{patient.name}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide mb-2">Age</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{patient.age} years old</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <p className="text-sm font-semibold text-green-700 dark:text-green-300 uppercase tracking-wide mb-2">Disease / Condition</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{patient.disease}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 uppercase tracking-wide mb-2">Phone Number</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{patient.phone}</p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-2">Appointment Date</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{patient.date}</p>
              </div>

            </div>

            {/* Created/Updated Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-10 pb-10 border-b border-gray-300 dark:border-gray-600">
              {patient.createdAt && (
                <div className="text-sm opacity-70">
                  <p className="font-medium">Created At:</p>
                  <p>{new Date(patient.createdAt.toDate()).toLocaleString()}</p>
                </div>
              )}
              {patient.updatedAt && (
                <div className="text-sm opacity-70">
                  <p className="font-medium">Last Updated:</p>
                  <p>{new Date(patient.updatedAt.toDate()).toLocaleString()}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate("/assignment/patients")}
                className="flex-1 min-w-48 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition"
              >
                ← Back to List
              </button>
              <button
                onClick={() => navigate(`/assignment/edit/${id}`)}
                className="flex-1 min-w-48 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                ✎ Edit Patient
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 min-w-48 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
              >
                🗑 Delete Patient
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>

    </div>
  );
}
