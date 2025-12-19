import { useState, useEffect } from "react";
import ScrollReveal from "../components/common/ScrollReveal";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [disease, setDisease] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const scrollToForm = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#appointment-form') {
        const el = document.getElementById('appointment-form');
        if (el) {
          // small timeout to ensure layout is ready then smooth scroll
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        }
      }
    };

    scrollToForm();
    window.addEventListener('hashchange', scrollToForm);
    return () => window.removeEventListener('hashchange', scrollToForm);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      age,
      phone,
      disease,
      date,
    };

    console.log("Appointment Data:", appointmentData);
    alert("Appointment booked successfully!");

    setName("");
    setAge("");
    setPhone("");
    setDisease("");
    setDate("");
  };

  return (
    <div className="pt-20 pb-20 text-gray-900 dark:text-gray-100">
      
      {/* HEADER */}
      <ScrollReveal direction="left">
        <section className="text-center max-w-3xl mx-auto mb-16 px-6">
          <h1 className="text-4xl font-semibold mb-4 tracking-tight">
            Book Your Appointment
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Schedule a consultation with our experienced specialists. Fill out the form below and we'll confirm your appointment shortly.
          </p>
        </section>
      </ScrollReveal>

      {/* FORM CARD */}
      <ScrollReveal direction="right">
        <section id="appointment-form" className="flex justify-center px-6 mb-16">
          <div className="w-full max-w-md bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/40 dark:border-gray-700">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="text"
                placeholder="Disease / Problem"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 text-white font-semibold transition shadow-lg"
              >
                Book Appointment
              </button>

            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* INFO SECTION */}
      <ScrollReveal direction="left">
        <section className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Why Book With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-white/40 dark:border-gray-700">
              <p className="text-3xl mb-2">⏱️</p>
              <h3 className="font-semibold mb-2">Quick Scheduling</h3>
              <p className="text-sm opacity-80">Book appointments in minutes</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-white/40 dark:border-gray-700">
              <p className="text-3xl mb-2">👨‍⚕️</p>
              <h3 className="font-semibold mb-2">Expert Doctors</h3>
              <p className="text-sm opacity-80">Experienced medical specialists</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-white/40 dark:border-gray-700">
              <p className="text-3xl mb-2">📞</p>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm opacity-80">Always here to help you</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
