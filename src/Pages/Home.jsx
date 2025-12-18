import { Link } from "react-router-dom"; 
import ScrollReveal from "../components/common/ScrollReveal";
import heroImage from "../assets/Images/hero.jpeg";
import drAhmad from "../assets/Images/dr-ahmad.jpg";
import drAsif from "../assets/Images/dr-asif.jpg";
import drHafsa from "../assets/Images/dr-hafsa.avif";
import drRabia from "../assets/Images/dr-Rabia.jpg";
import logo from "../assets/Images/hospital-Logo.png";

export default function Home() {
  return (
    <div className="pt-24 pb-0 text-gray-900 dark:text-gray-100">

      {/* ===== TOP LOGO + NAME WITH SCROLL REVEAL ===== */}
      <ScrollReveal direction="left">
        <section className="px-6 md:px-20 text-center mb-12">
          <div className="flex flex-col items-center justify-center mb-3">
            <img
              src={logo}
              alt="Hospital Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-2 animate-soft-blink">
            Mian Sharif Hospital
          </h1>

          <p className="text-base max-w-xl mx-auto opacity-80 leading-relaxed">
            Providing trusted, patient-focused medical care with experienced specialists.
          </p>
        </section>
      </ScrollReveal>

      {/* ===== HERO SECTION ===== */}
      <section className="text-center mb-12 px-6">
        <h2 className="text-4xl font-semibold mb-4 leading-tight max-w-4xl mx-auto">
          Providing Reliable & Compassionate Healthcare
        </h2>

        <p className="text-lg max-w-2xl mx-auto opacity-90 mb-8">
          We focus on safe, ethical, and clinically accurate medical services — 
          supported by experienced specialists.
        </p>

        <div className="flex justify-center">
          <Link
            to="/contact#contact-details"
            className="px-8 py-3 bg-gray-900 hover:bg-gray-700 
                       text-white rounded-full shadow-lg inline-block
                       dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black"
          >
            Book Appointment
          </Link>
        </div>

        <div
          className="mt-8 w-full max-w-3xl mx-auto h-72 rounded-2xl shadow-xl 
                     overflow-hidden border border-white/40 dark:border-blue-900/40 
                     bg-white/50 dark:bg-gray-800/50"
        >
          <img
            src={heroImage}
            alt="Hospital Hero"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-10 px-6">
          Our Clinical Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            ["Pediatric Care", "Child examinations, vaccinations, neonatal care, routine treatments."],
            ["Gynecology & Obstetrics", "Maternal care, antenatal evaluations, gynecological procedures."],
            ["Cardiology", "ECG, cardiac risk assessment, hypertension & diabetes management."],
            ["Dermatology", "Acne care, pigmentation, laser treatment, PRP, hydrafacial."]
          ].map(([title, desc], idx) => (
            <ScrollReveal key={title} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="p-6 rounded-xl shadow-lg bg-white/50 dark:bg-gray-800/50">
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="opacity-90">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== DOCTOR TEAM ===== */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-10 px-6">
          Meet Our Specialist Team
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          {[
            [drAsif, "Dr. Asif Mahmood", "Specialist (MBBS, MPH, MPhil)", "25+ years experience", "text-blue-600 dark:text-blue-300"],
            [drRabia, "Dr. Rabia Manzoor", "Gynecologist (MBBS)", "15 years experience", "text-pink-600 dark:text-pink-400"],
            [drAhmad, "Dr. Ahmad Hammad", "Cardiologist (MBBS, FCPS)", "Heart specialist", "text-red-600 dark:text-red-400"],
            [drHafsa, "Dr. Hafsa Hammad", "Skin Specialist (MBBS)", "Dermatology care", "text-purple-600 dark:text-purple-400"]
          ].map(([img, name, role, exp, color], idx) => (
            <ScrollReveal key={name} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="p-6 rounded-xl shadow-lg bg-white/50 dark:bg-gray-800/50">
                <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={img} 
                    alt={name} 
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-medium">{name}</h3>
                <p className={`${color} text-sm mb-2`}>{role}</p>
                <p className="opacity-80 text-sm">{exp}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-10 px-6">
          Why Patients Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            ["Experienced Doctors", "Years of clinical excellence."],
            ["Standard Medical Practice", "Evidence-based diagnosis."],
            ["Patient-Focused Approach", "Comfort, communication & trust."]
          ].map(([title, desc], idx) => (
            <ScrollReveal key={title} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="p-8 rounded-xl shadow-lg bg-white/50 dark:bg-gray-800/50">
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="opacity-80">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="text-center mb-6 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">Need Medical Consultation?</h2>
        <p className="text-lg opacity-90 mb-6">
          Contact us to book appointments or get medical advice.
        </p>

        <Link
          to="/contact#contact-details"
          className="px-10 py-3 bg-gray-900 hover:bg-gray-700 
                     text-white rounded-full shadow-lg inline-block
                     dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}
