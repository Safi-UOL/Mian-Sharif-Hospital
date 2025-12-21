import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    disease: "",
    phone: "",
    date: "",
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch patient data by ID
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        setLoading(true);
        const patientRef = doc(db, "patients", id);
        const patientSnapshot = await getDoc(patientRef);
        
        if (patientSnapshot.exists()) {
          setFormData(patientSnapshot.data());
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.disease || !formData.phone || !formData.date) {
      setError("All fields are required");
      return;
    }

    try {
      setSaving(true);
      const patientRef = doc(db, "patients", id);
      await updateDoc(patientRef, {
        ...formData,
        age: parseInt(formData.age),
        updatedAt: serverTimestamp(),
      });
      alert("Patient updated successfully!");
      navigate(`/assignment/patients/${id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-20 pb-20 px-6 md:px-20 text-center min-h-screen">
        <p className="text-lg opacity-70">Loading patient data...</p>
      </div>
    );
  }

  if (error && !formData.name) {
    return (
      <div className="pt-20 pb-20 px-6 md:px-20 text-center min-h-screen">
        <p className="text-lg text-red-600 dark:text-red-400">{error}</p>
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
            Edit Patient Information
          </h1>
          <p className="text-lg opacity-90">Update {formData.name}'s details</p>
        </section>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">
            
            {error && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold mb-2">Patient Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter patient name"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter age"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Disease / Condition *</label>
                  <input
                    type="text"
                    name="disease"
                    value={formData.disease}
                    onChange={handleInputChange}
                    placeholder="Enter disease/condition"
                    className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="0300-0000000"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Appointment Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition"
                >
                  {saving ? "Updating..." : "Update Patient"}
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/assignment/patients/${id}`)}
                  className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition"
                >
                  Cancel
                </button>
              </div>

            </form>

          </div>
        </ScrollReveal>
      </div>

    </div>
  );
}
