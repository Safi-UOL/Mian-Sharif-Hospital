import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-20 text-gray-900 dark:text-gray-100">

      {/* TEXT CONTENT */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-semibold leading-tight mb-4">
          Trusted Clinical Care for Your Family
        </h1>

        <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          Our team of specialists in Pediatrics, Gynecology, Cardiology, and Dermatology 
          provide safe, reliable, and patient-focused medical care.  
          We follow evidence-based practices to ensure correct diagnosis and treatment.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/appointment#appointment-form" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 text-white rounded-full shadow-lg transition-all">
            Book Appointment
          </Link>
          <button className="px-8 py-3 border border-emerald-600 text-emerald-600 dark:text-emerald-400 
            dark:border-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/10 rounded-full transition-all">
            View Departments
          </button>
        </div>
      </div>

      {/* HERO IMAGE PLACEHOLDER */}
      <div className="max-w-5xl mx-auto h-80 bg-gray-300 dark:bg-gray-700 rounded-3xl 
        flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-xl">
        <span>Your Hero Image Here</span>
      </div>

      {/* QUICK FEATURES SECTION */}
      <div className="max-w-5xl mx-auto mt-20 grid md:grid-cols-3 gap-8">

        {/* FEATURE 1 */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 
          rounded-xl shadow-lg border border-white/40 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-3">Experienced Specialists</h3>
          <p className="opacity-80 leading-relaxed">
            Our doctors bring several years of dedicated clinical practice 
            in pediatric, gynecological, cardiac, and skincare management.
          </p>
        </div>

        {/* FEATURE 2 */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 
          rounded-xl shadow-lg border border-white/40 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-3">Patient-Focused Approach</h3>
          <p className="opacity-80 leading-relaxed">
            We listen, evaluate, and treat every patient with clarity, empathy, 
            and careful attention to their clinical needs.
          </p>
        </div>

        {/* FEATURE 3 */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 
          rounded-xl shadow-lg border border-white/40 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-3">Reliable Medical Support</h3>
          <p className="opacity-80 leading-relaxed">
            From routine checkups to specialized evaluations,  
            our hospital maintains essential diagnostic and consultation services.
          </p>
        </div>

      </div>

    </section>
  );
}
