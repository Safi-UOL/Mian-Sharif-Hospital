import ScrollReveal from "../components/common/ScrollReveal";

export default function TermsOfUse() {
  return (
    <div className="pt-30 pb-20 px-6 md:px-20 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <ScrollReveal >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
        <p className="opacity-80 text-lg">
          Please read these terms carefully before using our website or services.
        </p>
      </div>
      </ScrollReveal>

      {/* CONTENT CARD */}
      <ScrollReveal>
      <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
                      p-10 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700 
                      leading-relaxed space-y-8">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="opacity-90">
            By accessing or using <span className="font-semibold">Mian Sharif Hospital's</span> 
            website or online services, you agree to comply with these Terms of Use. 
            If you do not agree, please discontinue using this platform immediately.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Medical Disclaimer</h2>
          <p className="opacity-90">
            All health-related information provided on this website is for 
            <span className="font-semibold"> informational and educational purposes only</span>. 
            It should not be considered a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="opacity-90 mt-2">
            Always consult a qualified healthcare provider for any medical concerns.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Use of Website</h2>
          <ul className="list-disc ml-6 space-y-2 opacity-90">
            <li>You agree not to misuse, disrupt, or damage the website.</li>
            <li>You may not attempt to access restricted hospital systems or data.</li>
            <li>You may not use this website for unlawful or unauthorized purposes.</li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. User Accounts</h2>
          <p className="opacity-90">
            If you create an account for appointments or medical services:
          </p>
          <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
            <li>You are responsible for maintaining account confidentiality.</li>
            <li>Ensure all provided information is accurate and up to date.</li>
            <li>Notify us immediately of unauthorized activity or security concerns.</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Privacy & Data Protection</h2>
          <p className="opacity-90">
            Your personal and medical information is protected under our 
            <a href="/privacy" className="text-blue-600 dark:text-blue-400 font-medium ml-1">
              Privacy Policy
            </a>.
          </p>
          <p className="opacity-90 mt-2">
            We follow strict confidentiality and security protocols to safeguard patient data.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
          <p className="opacity-90">
            All content—including text, graphics, logos, and images—is the property of 
            <span className="font-semibold"> Mian Sharif Hospital</span> 
            and is protected by copyright laws. Unauthorized use is prohibited.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Appointment & Service Policies</h2>
          <ul className="list-disc ml-6 space-y-2 opacity-90">
            <li>Appointments may be rescheduled based on doctor availability.</li>
            <li>Emergency cases are prioritized.</li>
            <li>Service charges may vary based on treatment and diagnosis.</li>
          </ul>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
          <p className="opacity-90">
            Mian Sharif Hospital is not responsible for:
          </p>
          <ul className="list-disc ml-6 space-y-2 opacity-90 mt-2">
            <li>Technical issues or system downtime</li>
            <li>Errors or interruptions in website access</li>
            <li>User mistakes or misuse of information</li>
          </ul>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Third-Party Links</h2>
          <p className="opacity-90">
            Our website may contain links to third-party platforms.  
            We are not responsible for their content, privacy practices, or policies.
          </p>
        </section>

        {/* SECTION 10 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
          <p className="opacity-90">
            We may update these Terms of Use periodically.  
            Continued use of the website indicates your acceptance of updated terms.
          </p>
        </section>

        {/* SECTION 11 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Contact Information</h2>
          <p className="opacity-90">
            For questions or concerns regarding these terms, please contact us:
          </p>
          <p className="opacity-90 mt-2 font-medium">
            📞 Phone: 0300-1234567  
            <br />
            ✉ Email: info@miansharifhospital.com  
            <br />
            📍 Address: Mian Sharif Hospital, Pakistan
          </p>
        </section>

      </div>
      </ScrollReveal>

    </div>
  );
}
