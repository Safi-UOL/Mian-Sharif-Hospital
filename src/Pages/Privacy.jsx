import { useEffect } from "react";
import ScrollReveal from "../components/common/ScrollReveal";

export default function Privacy() {

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-30 pb-20 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <ScrollReveal direction="left">
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-lg opacity-90 leading-relaxed">
          At Mian Sharif Hospital, we value your trust. This Privacy Policy explains 
          how we collect, use, and protect your personal information when you interact 
          with our website or hospital services.
        </p>
      </section>
      </ScrollReveal>

      {/* PRIVACY CONTENT CARD */}
      <ScrollReveal direction="right">
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
                        p-10 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">

          {/* INTRODUCTION */}
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Mian Sharif Hospital is committed to protecting your personal and medical 
            information. This policy outlines how data is collected, stored, and secured 
            in compliance with standard healthcare privacy practices.
          </p>

          {/* DATA WE COLLECT */}
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90 mb-8">
            <li>Personal details (Name, Email, Phone)</li>
            <li>Appointment and consultation details</li>
            <li>Medical history and diagnostic information</li>
            <li>Website usage data (IP address, browser type)</li>
            <li>Messages submitted through our contact forms</li>
          </ul>

          {/* HOW WE USE DATA */}
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90 mb-8">
            <li>To schedule appointments and provide healthcare services</li>
            <li>To respond to inquiries and support requests</li>
            <li>To improve our website and patient services</li>
            <li>To maintain medical records as required by law</li>
            <li>To send important updates or notifications</li>
          </ul>

          {/* INFORMATION SHARING */}
          <h2 className="text-2xl font-semibold mb-4">4. Sharing of Your Information</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            We do <b>not</b> sell or share your personal data with third parties, except:
          </p>
          <ul className="list-disc pl-6 space-y-2 opacity-90 mb-8">
            <li>When required by medical regulations or government authorities</li>
            <li>With specialist doctors involved in your treatment</li>
            <li>With your consent for referrals or medical procedures</li>
          </ul>

          {/* DATA SECURITY */}
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            We implement strong administrative and technical safeguards to protect 
            your information from unauthorized access, modification, or misuse.
            However, no online system is fully guaranteed to be secure.
          </p>

          {/* COOKIES SECTION */}
          <h2 className="text-2xl font-semibold mb-4">6. Cookies & Website Tracking</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Our website may use cookies to improve browsing experience. Cookies 
            do not collect personal medical information and can be disabled from 
            your browser settings.
          </p>

          {/* PATIENT RIGHTS */}
          <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90 mb-8">
            <li>Right to request access to your personal data</li>
            <li>Right to correct inaccurate information</li>
            <li>Right to request deletion of non-medical data</li>
            <li>Right to withdraw consent for communication</li>
          </ul>

          {/* CHANGES TO POLICY */}
          <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
          <p className="opacity-90 mb-8 leading-relaxed">
            Mian Sharif Hospital may update this Privacy Policy occasionally. 
            Any changes will be posted on this page with the latest revision date.
          </p>

          {/* CONTACT DETAILS */}
          <h2 className="text-2xl font-semibold mb-4">9. Contact for Privacy Concerns</h2>
          <p className="opacity-90 mb-2 leading-relaxed">
            If you have any questions about this policy, please contact:
          </p>
          <p className="opacity-90 leading-relaxed">
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
