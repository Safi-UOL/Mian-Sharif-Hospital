export default function ServicesSection() {
  const services = [
    {
      title: "Pediatric Care",
      description:
        "Routine child checkups, vaccinations, neonatal care, and treatment of common pediatric illnesses.",
    },
    {
      title: "Gynecology & Obstetrics",
      description:
        "Maternal care, antenatal visits, fertility guidance, and gynecological evaluations.",
    },
    {
      title: "Cardiology",
      description:
        "Heart examinations, ECG interpretation, cardiac risk assessment, and management of heart diseases.",
    },
    {
      title: "Dermatology",
      description:
        "Treatment for acne, pigmentation, allergies, hair loss, and general clinical skin care.",
    },
    {
      title: "Laboratory Services",
      description:
        "Standard diagnostic tests including blood work, urinalysis, cultures, and clinical screening.",
    },
    {
      title: "Emergency Care",
      description:
        "24/7 medical assistance for urgent clinical conditions and emergency management.",
    },
    {
      title: "Pharmacy Services",
      description:
        "Essential medicines and prescription drugs available within the hospital premises.",
    },
    {
      title: "General Medicine",
      description:
        "Treatment for fever, infections, blood pressure, diabetes, and routine medical consultations.",
    },
    {
      title: "Ultrasound & Imaging",
      description:
        "Diagnostic ultrasound and imaging facilities for accurate evaluation of medical conditions.",
    },
  ];

  return (
    <section className="pt-10 pb-24 text-gray-900 dark:text-gray-100">

      {/* SECTION HEADER */}
      <h2 className="text-4xl font-semibold text-center mb-12 px-6">
        Our Clinical Services
      </h2>

      {/* SERVICE CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl
            rounded-2xl p-8 shadow-lg border border-white/40 dark:border-gray-700
            hover:shadow-2xl transition-all"
          >
            {/* IMAGE PLACEHOLDER */}
            <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 
              rounded-xl mb-6 flex items-center justify-center text-gray-600 
              dark:text-gray-300">
              <span>Service Image</span>
            </div>

            <h3 className="text-2xl font-medium mb-2">{s.title}</h3>
            <p className="opacity-90 leading-relaxed">{s.description}</p>
          </div>
        ))}

      </div>

      {/* EXTRA INFORMATION SECTION */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Committed to Patient Wellbeing</h3>
        <p className="text-lg opacity-90 leading-relaxed mx-auto max-w-3xl">
          Our hospital ensures that all essential clinical services are available under one roof.
          Every department follows standard medical guidelines to provide safe, ethical, and 
          evidence-based treatment. Whether it’s routine care or specialized evaluation, our 
          team is dedicated to supporting patients with clear communication and timely care.
        </p>
      </div>

    </section>
  );
}
