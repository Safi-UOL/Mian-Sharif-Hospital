import ScrollReveal from "../components/common/ScrollReveal";
import drhammad from "../assets/Images/dr-hammad.jpg";
import drAsif from "../assets/Images/Asif.jpg";
import drRabia from "../assets/Images/Rabia.jpg";
import drHafsa from "../assets/Images/Hafsa.webp";

export default function About() {
  return (
    <div className="pt-30 pb-20 text-gray-900 dark:text-gray-100">

      {/* HEADER SECTION */}
      <ScrollReveal direction="left">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-semibold mb-4 tracking-tight">
            About Our Hospital
          </h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Our hospital is focused on providing reliable, safe, and clinically sound
            healthcare services. We follow evidence-based medical practices under the
            supervision of experienced specialists dedicated to patient wellbeing.
          </p>
        </section>
      </ScrollReveal>

      {/* DOCTOR CARDS */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">

       {/* DOCTOR 1 — DR ASIF MAHMOOD */}
<ScrollReveal direction="left">
<div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
  p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">

  {/* FINAL FIXED IMAGE — Centered + lifted + no white bg */}
  <div className="w-full h-56 rounded-xl overflow-hidden mb-6 
                  bg-gray-300 dark:bg-gray-700">
    <img
      src={drAsif}
      alt="Dr. Asif Mahmood"
      className="w-full h-full object-cover object-[50%_35%]"
    />
  </div>

  <h2 className="text-3xl font-medium mb-2">Dr. Asif Mahmood</h2>
  <p className="text-blue-700 dark:text-blue-400 text-lg mb-4">
    Child Specialist (MBBS, MPH, MPhil) — Deputy Medical Superintendent  
    <br />25+ Years of Clinical Experience
  </p>

  <p className="leading-relaxed opacity-90">
    Dr. Asif Mahmood has been serving at the Children’s Hospital for over 
    25 years. His clinical work includes pediatric medicine, neonatal care, 
    infectious diseases, and general child healthcare. As Deputy Medical 
    Superintendent, he contributes to administration, patient management, 
    and monitoring of pediatric services.
  </p>
</div>
</ScrollReveal>

        {/* DOCTOR 2 — DR RABIA MANZOOR */}
        <ScrollReveal direction="right">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
          p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">

        {/* IMAGE */}
<div className="w-full h-56 rounded-xl overflow-hidden mb-6 
    bg-gray-300 dark:bg-gray-700">
  <img
    src={drRabia}
    alt="Dr. Rabia Manzoor"
    className="w-full h-full object-cover object-[60%_50%]"
  />
</div>


          <h2 className="text-3xl font-medium mb-2">Dr. Rabia Manzoor</h2>
          <p className="text-pink-600 dark:text-pink-400 text-lg mb-4">
            Consultant Gynecologist — Head of Women’s Health Division  
            <br />15 Years of Clinical Experience
          </p>

          <p className="leading-relaxed opacity-90">
            Dr. Rabia Manzoor specializes in obstetrics, gynecological care, 
            maternal health, and fertility management. With 15 years of experience, 
            she oversees the Women’s Health & Maternity unit and ensures that clinical 
            procedures, antenatal care, and patient counseling meet medical standards.
          </p>
        </div>
        </ScrollReveal>

        {/* DR AHMAD SECTION */}
        <ScrollReveal direction="left">
        <div
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
             p-8 rounded-xl shadow-lg border border-white/40 dark:border-gray-700"
        >

          {/* IMAGE */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-6 
                  bg-gray-300 dark:bg-gray-700">
            <img
              src={drhammad}
              alt="Dr. Ahmad Hammad"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h2 className="text-3xl font-medium mb-2">Dr. Ahmad Hammad</h2>

          <p className="text-red-600 dark:text-red-400 text-lg mb-4">
            Cardiologist (MBBS, FCPSⓉ — Certified in Diabetes & Hypertension)  
            <br />8+ Years of Experience
          </p>

          <p className="leading-relaxed opacity-90">
            Dr. Ahmad Hammad practices as a Cardiologist, providing diagnosis and 
            management of heart-related conditions. His expertise includes cardiac 
            evaluation, ECG interpretation, risk assessment, and management of both 
            acute and chronic cardiovascular issues.
          </p>
        </div>
        </ScrollReveal>

        {/* DOCTOR 4 — DR HAFSA HAMMAD */}
        <ScrollReveal direction="right">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
          p-8 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">

          {/* IMAGE */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-6 
              bg-gray-300 dark:bg-gray-700">
            <img
              src={drHafsa}
              alt="Dr. Hafsa Hammad"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h2 className="text-3xl font-medium mb-2">Dr. Hafsa Hammad</h2>
          <p className="text-purple-700 dark:text-purple-400 text-lg mb-4">
            Skin Specialist (MBBS)
          </p>

          <p className="leading-relaxed opacity-90">
            Dr. Hafsa Hammad provides dermatology services, including treatment of 
            acne, pigmentation disorders, hair and scalp issues, skin allergies, and 
            routine clinical skin care. She focuses on safe, evidence-based 
            dermatological procedures for patients of all ages.
          </p>
        </div>
        </ScrollReveal>

      </section>

      {/* MISSION SECTION */}
      <ScrollReveal direction="left">
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="leading-relaxed text-lg opacity-90">
          Our mission is to provide dependable and ethical healthcare services. 
          We emphasize evidence-based practice, patient safety, preventive care, 
          and clarity in diagnosis and treatment. Our team is committed to ensuring 
          that patients receive proper guidance and medical support.
        </p>
      </section>
      </ScrollReveal>

      {/* JOURNEY SECTION */}
      <ScrollReveal direction="right">
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Our Clinical Journey</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Experienced Team</h3>
            <p className="opacity-80">
              Our specialists bring years of clinical experience, ensuring patients 
              receive appropriate and reliable medical care.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Standard Facilities</h3>
            <p className="opacity-80">
              Our hospital maintains essential diagnostic, emergency, and outpatient 
              services required for routine and specialized clinical care.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Trusted by Patients</h3>
            <p className="opacity-80">
              We maintain transparency, clear communication, and patient-focused 
              care, which helps build long-term trust with families.
            </p>
          </div>

        </div>
      </section>
      </ScrollReveal>

      {/* CLOSING SECTION */}
      <ScrollReveal direction="left">
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <p className="leading-relaxed text-lg opacity-90">
          Our hospital prioritizes safe, ethical, and clinically accurate treatment. 
          With experienced specialists from different medical fields, we aim to provide 
          stable and reliable care for all patients.
        </p>
      </section>
      </ScrollReveal>

    </div>
  );
}
