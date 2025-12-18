import { useEffect } from "react";
import ScrollReveal from "../components/common/ScrollReveal";

export default function Disclaimer() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-30 pb-20 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <ScrollReveal direction="left">
      <section className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
          Medical Disclaimer
        </h1>
        <p className="text-lg opacity-90 leading-relaxed">
          The information provided by Mian Sharif Hospital is for general medical 
          guidance only. It should not be considered a substitute for professional 
          diagnosis, consultation, or emergency care.
        </p>
      </section>
      </ScrollReveal>

      {/* DISCLAIMER CARD */}
      <ScrollReveal direction="right">
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
                        p-10 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">

          {/* GENERAL INFORMATION */}
          <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            All content on this website, including text, images, and descriptions, 
            is intended for informational purposes. Although we strive for accuracy, 
            medical knowledge changes over time, and some information may not reflect 
            the latest research or clinical guidelines.
          </p>

          {/* NOT A SUBSTITUTE */}
          <h2 className="text-2xl font-semibold mb-4">2. Not a Substitute for Medical Care</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            The information provided on this site does not replace in-person medical 
            consultations, diagnostic evaluations, or treatment recommendations from 
            licensed healthcare professionals. Always consult your doctor for 
            personalized advice and emergencies.
          </p>

          {/* EMERGENCY GUIDANCE */}
          <h2 className="text-2xl font-semibold mb-4">3. Emergency Situations</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            If you believe you are experiencing a medical emergency, immediately 
            contact your local emergency number or visit the nearest hospital.  
            Do <b>not</b> rely on this website for urgent medical decisions.
          </p>

          {/* EXTERNAL LINKS */}
          <h2 className="text-2xl font-semibold mb-4">4. External Links</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Our website may include links to external websites for educational 
            purposes. Mian Sharif Hospital is not responsible for the accuracy, 
            reliability, or content of third-party websites.
          </p>

          {/* LIMITATION OF LIABILITY */}
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Mian Sharif Hospital does not assume liability for any actions taken 
            based on information provided on this website. Decisions related to 
            diagnosis and treatment should always be made with your qualified 
            healthcare provider.
          </p>

          {/* PROFESSIONAL ADVICE */}
          <h2 className="text-2xl font-semibold mb-4">6. Seek Professional Advice</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Any medication changes, procedures, or health decisions should be made 
            only after consulting a licensed practitioner. This website does not 
            provide personalized treatment plans or prescriptions.
          </p>

          {/* UPDATES TO DISCLAIMER */}
          <h2 className="text-2xl font-semibold mb-4">7. Updates to This Disclaimer</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            We may update this Disclaimer periodically to reflect changes in 
            medical standards or hospital policies. Any updates will be posted 
            on this page.
          </p>

          {/* CONTACT */}
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="opacity-90 leading-relaxed">
            If you have questions regarding this Disclaimer, please contact us:
            <br /><br />
            <b>Email:</b> info@miansharifhospital.com  
            <br />
            <b>Phone:</b> +92 300 8368646
          </p>

        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
