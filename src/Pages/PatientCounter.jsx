import { useState } from "react";
import ScrollReveal from "../components/common/ScrollReveal";

export default function PatientCounter() {
  const [patients, setPatients] = useState(0);

  return (
    <div className="pt-20 pb-20 text-gray-900 dark:text-gray-100">
      
      {/* HEADER WITH SCROLL REVEAL */}
      <ScrollReveal direction="left">
        <section className="text-center max-w-3xl mx-auto mb-16 px-6">
          <h1 className="text-4xl font-semibold mb-4 tracking-tight animate-soft-blink">
            Daily Patient Counter
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Track the number of patients visiting our OPD (Outpatient Department) throughout the day for better resource management.
          </p>
        </section>
      </ScrollReveal>

      {/* COUNTER CARD WITH SCROLL REVEAL */}
      <ScrollReveal direction="right">
        <section className="flex justify-center px-6 mb-16">
          <div className="w-full max-w-md bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/40 dark:border-gray-700">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              OPD Patient Count
            </h2>

            {/* Counter Display */}
            <div className="text-6xl font-extrabold text-blue-600 dark:text-yellow-400 mb-10 text-center animate-soft-blink">
              {patients}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setPatients(patients + 1)}
                className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition shadow-lg"
              >
                + Arrived
              </button>

              <button
                onClick={() => setPatients(Math.max(0, patients - 1))}
                className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition shadow-lg"
              >
                - Left
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => setPatients(0)}
              className="w-full py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition font-semibold"
            >
              Reset Counter
            </button>

          </div>
        </section>
      </ScrollReveal>

      {/* INFO SECTION */}
      <ScrollReveal direction="left">
        <section className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-white/40 dark:border-gray-700">
              <p className="text-3xl mb-2">👥</p>
              <h3 className="font-semibold mb-2">Click Arrived</h3>
              <p className="text-sm opacity-80">Patient arrives at OPD clinic</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-white/40 dark:border-gray-700">
              <p className="text-3xl mb-2">⏱️</p>
              <h3 className="font-semibold mb-2">Track Count</h3>
              <p className="text-sm opacity-80">Monitor real-time patient numbers</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-white/40 dark:border-gray-700">
              <p className="text-3xl mb-2">🚪</p>
              <h3 className="font-semibold mb-2">Click Left</h3>
              <p className="text-sm opacity-80">Patient departs from OPD</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
