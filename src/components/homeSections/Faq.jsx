import { Link } from "react-router-dom";
import ScrollReveal from "../common/ScrollReveal";

export default function Faq() {
  const faqs = [
    {
      q: "What medical specialties are available at the hospital?",
      a: "We currently provide Pediatrics, Gynecology, Cardiology, Dermatology, and General Medicine. Each department is managed by qualified specialists with several years of clinical experience.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment by calling our reception, visiting the hospital in person, or using the appointment form available on our Contact page.",
    },
    {
      q: "Do you offer emergency services?",
      a: "Yes, emergency services are available 24/7 for urgent medical care. Trained staff is available to assist patients at any time.",
    },
    {
      q: "Which doctor should I consult for child-related health issues?",
      a: "Child-related medical concerns are handled by our Pediatric Specialist, Dr. Asif Mahmood, who has over 25 years of clinical experience.",
    },
    {
      q: "What services does the Gynecology department offer?",
      a: "Our Gynecology department provides antenatal care, fertility counseling, maternal evaluations, routine checkups, and gynecological procedures under the supervision of Dr. Rabia Manzoor.",
    },
    {
      q: "Do you provide cardiac evaluation?",
      a: "Yes, cardiac evaluation is available with Dr. Ahmad Hammad (MBBS, FCPS), who specializes in diagnosis and management of heart-related conditions.",
    },
    {
      q: "Is there treatment available for skin problems?",
      a: "Yes, dermatological services are provided by Dr. Hafsa Hammad (MBBS). Treatments include acne management, pigmentation care, allergy treatment, and routine dermatology care.",
    },
    {
      q: "Are follow-up visits required after treatment?",
      a: "Follow-up visits help monitor progress and ensure treatment effectiveness. Your doctor will guide you based on your condition.",
    },
    {
      q: "Does the hospital accept children for vaccinations?",
      a: "Yes. Pediatric vaccinations and routine child health checkups are available in the Pediatric Department.",
    },
    {
      q: "What should I bring for my first visit?",
      a: "Bring previous medical records, prescription notes, lab reports, and identification documents. These help the doctor evaluate your medical history correctly.",
    },
    {
      q: "Can I report a problem?",
      a: "Yes. You can report any issue through our Contact page or by informing the hospital reception.",
    },
  ];

  return (
  <div className="pt-30 pb-20 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <ScrollReveal >
      <section className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg opacity-90 leading-relaxed">
          Here are answers to commonly asked questions. If your question is not listed, 
          feel free to contact our support team for guidance.
        </p>
      </section>
      </ScrollReveal>

      {/* FAQ CARDS */}
      <section className="max-w-4xl mx-auto px-6 space-y-6">
        {faqs.map((item, i) => (
          <ScrollReveal key={i}>
          <div
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 
            rounded-xl shadow-lg border border-white/40 dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-2">{item.q}</h3>
            <p className="opacity-80 leading-relaxed">{item.a}</p>
          </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ADDITIONAL INFO */}
      <ScrollReveal>
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Additional Information
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl shadow-lg border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Patient Guidance</h3>
            <p className="opacity-80">
              Patients are encouraged to bring previous reports and medicines lists. 
              This ensures accurate evaluation and proper treatment planning.
            </p>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl shadow-lg border dark:border-gray-700">
            <h3 className="text-xl font-medium mb-3">Safety & Hygiene</h3>
            <p className="opacity-80">
              Our hospital follows clinical safety protocols, sterilization standards, 
              and hygiene guidelines to ensure a safe environment.
            </p>
          </div>

        </div>
      </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal >
      <section className="mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-lg opacity-90 mb-6">
          If your query is not listed above, feel free to reach out to us.  
          Our support team will guide you with appointment details or medical queries.
        </p>

        <Link
          to="/contact#contact-details"
          className="px-10 py-3 bg-gray-900 hover:bg-gray-700 
                     text-white rounded-full shadow-lg inline-block
                     dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black"
        >
          Contact Support
        </Link>
      </section>
      </ScrollReveal>

    </div>
  );
}
