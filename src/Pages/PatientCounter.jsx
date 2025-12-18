import { useState } from "react";

export default function PatientCounter() {
  const [patients, setPatients] = useState(0);

  return (
    <div className="flex justify-center items-center py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          OPD Daily Patient Counter
        </h2>

        {/* Counter */}
        <div className="text-5xl font-extrabold text-blue-600 dark:text-yellow-400 mb-8">
          {patients}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setPatients(patients + 1)}
            className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Patient Arrived
          </button>

          <button
            onClick={() => setPatients(Math.max(0, patients - 1))}
            className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            Patient Left
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={() => setPatients(0)}
          className="w-full py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Reset Day Counter
        </button>

      </div>
    </div>
  );
}
