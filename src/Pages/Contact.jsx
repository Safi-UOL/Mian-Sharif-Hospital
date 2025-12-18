import { useEffect } from "react";
import ScrollReveal from "../components/common/ScrollReveal";

export default function Contact() {

  // ALWAYS SCROLL TO TOP WHEN CONTACT PAGE OPENS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className="pt-30 pb-20 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <ScrollReveal direction="left">
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
          Contact Our Hospital
        </h1>
        <p className="text-lg opacity-90 leading-relaxed">
          For appointments, reports, consultations, or general medical queries,
          feel free to reach out to us using the contact details below.
        </p>
      </section>
      </ScrollReveal>

      {/* CONTACT GRID */}
      <section className="grid md:grid-cols-2 gap-12 mb-20">

        {/* LEFT SIDE — CONTACT DETAILS */}
        <ScrollReveal direction="left">
        <div
          id="contact-details"
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
          p-8 rounded-2xl shadow-lg border border-white/40 dark:border-gray-700"
        >
          <h2 className="text-2xl font-medium mb-4">Hospital Information</h2>

          <div className="space-y-6">

            {/* ADDRESS */}
            <div>
              <h3 className="text-xl font-medium mb-1">Address</h3>
              <p className="opacity-90 leading-relaxed">
                Mian Sharif Hospital  
                <br /> Lahore Road, More Khunda, District Nankana Sahib, Punjab, Pakistan.<br /> 
              </p>
            </div>

            {/* PHONE */}
            <div>
              <h3 className="text-xl font-medium mb-1">Phone Numbers</h3>
              <p className="opacity-90 leading-relaxed">
                General Inquiries: <b>+92 300 8368646</b>  
                <br />
                Emergency: <b>+92 300 4146432</b>
              </p>
            </div>

            {/* HOURS */}
            <div>
              <h3 className="text-xl font-medium mb-1">Working Hours</h3>
              <p className="opacity-90 leading-relaxed">
                Monday – Saturday: 10:00 AM – 6:00 PM  
                <br />
                Sunday: Limited OPD  
                <br />
                Emergency: 24/7
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <h3 className="text-xl font-medium mb-1">Email</h3>
              <p className="opacity-90">info@miansharifhospital.com</p>
            </div>

          </div>
        </div>
        </ScrollReveal>

        {/* RIGHT SIDE — CONTACT FORM */}
        <ScrollReveal direction="right">
        <div
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
          p-8 rounded-2xl shadow-lg border border-white/40 dark:border-gray-700"
        >
          <h2 className="text-2xl font-medium mb-4">Send Us a Message</h2>

          <form className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-sm opacity-90 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 outline-none 
                  focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm opacity-90 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                border border-gray-300 dark:border-gray-600 outline-none 
                focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm opacity-90 mb-1">Your Message</label>
              <textarea
                className="w-full h-32 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 outline-none 
                  focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Describe your concern or inquiry"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="button"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
        </ScrollReveal>

      </section>

      {/* MAP SECTION */}
      <ScrollReveal direction="left">
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-medium text-center mb-6">Location Map</h2>

        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            src="https://maps.google.com/maps?q=31.3228982,73.7974839&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      </ScrollReveal>

      {/* DEPARTMENT CONTACTS */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-medium text-center mb-10">
          Department Contact Details
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PEDIATRICS */}
          <div
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl 
            shadow-lg border border-white/40 dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-2">Pediatrics</h3>
            <p className="opacity-80">Supervised by: <b>Dr. Asif Mahmood</b></p>
            <p className="opacity-80">Phone: +92 300 4146432</p>
          </div>

          {/* GYNECOLOGY */}
          <div
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl 
            shadow-lg border border-white/40 dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-2">Gynecology</h3>
            <p className="opacity-80">Supervised by: <b>Dr. Rabia Manzoor</b></p>
            <p className="opacity-80">Phone: +92 300 4455667</p>
          </div>

          {/* CARDIOLOGY */}
          <div
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl 
            shadow-lg border border-white/40 dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-2">Cardiology</h3>
            <p className="opacity-80">Supervised by: <b>Dr. Ahmad Hammad</b></p>
            <p className="opacity-80">Phone: +92 300 8368646</p>
          </div>

          {/* DERMATOLOGY */}
          <div
            className="bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl 
            shadow-lg border border-white/40 dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-2">Dermatology</h3>
            <p className="opacity-80">Supervised by: <b>Dr. Hafsa Hammad</b></p>
            <p className="opacity-80">Phone: +92 300 5544332</p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
        <p className="text-lg opacity-90 mb-6">
          Our support team is available to assist with appointments,  
          medical inquiries, and patient guidance.
        </p>

        <button
          onClick={() => {
            const target = document.getElementById("contact-details");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg"
        >
          Call Now
        </button>
      </section>

    </div>
  );
}
