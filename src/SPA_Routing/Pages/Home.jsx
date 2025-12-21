import { Link } from "react-router-dom";
import ScrollReveal from "../../components/common/ScrollReveal";

export default function Home() {
  return (
    <div className="pt-20 pb-20 px-6 md:px-20 text-gray-900 dark:text-gray-100 min-h-screen">
      
      <ScrollReveal>
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Hospital Management System
          </h1>
          <p className="text-xl opacity-90 mb-2">
            CRUD Application with Firebase Firestore & Dynamic Routing
          </p>
          <p className="text-lg opacity-75">
            Manage patient records efficiently with Create, Read, Update, and Delete operations
          </p>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40 dark:border-gray-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">➕</div>
                <h3 className="text-xl font-semibold mb-3">Create Patient</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Add new patient records to the system with all necessary information including name, age, medical condition, contact details, and appointment date.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40 dark:border-gray-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-3">Read All Patients</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  View a comprehensive list of all registered patients with quick access to essential information and the ability to select any patient for detailed view.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40 dark:border-gray-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">View Patient Details</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Access individual patient details using dynamic routing (/patients/:id) to view complete information with beautiful card layouts.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40 dark:border-gray-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">✎</div>
                <h3 className="text-xl font-semibold mb-3">Update Patient</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Edit existing patient records with pre-filled forms. All updates are instantly saved to Firebase Firestore with timestamps.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40 dark:border-gray-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">🗑</div>
                <h3 className="text-xl font-semibold mb-3">Delete Patient</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Remove patient records from the system with a simple click. The UI updates immediately after deletion with confirmation dialogs.
                </p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/40 dark:border-gray-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Firebase Firestore real-time listeners ensure your patient list is always up-to-date across all tabs and devices in real-time.
                </p>
              </div>

            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* CTA Buttons */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <Link
              to="/assignment/patients"
              className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-8 rounded-2xl shadow-lg border border-blue-500 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-white">View & Manage Patients</h3>
              <p className="opacity-90 text-blue-100 mb-6">
                Access the main patient management dashboard with a comprehensive list of all patients and CRUD operations.
              </p>
              <span className="inline-block bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold group-hover:bg-blue-50 transition">
                Go to Dashboard →
              </span>
            </Link>

            <Link
              to="/assignment/create"
              className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-8 rounded-2xl shadow-lg border border-green-500 transition transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">➕</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Create New Patient</h3>
              <p className="opacity-90 text-green-100 mb-6">
                Register a new patient in the system with a dedicated form that validates all required information.
              </p>
              <span className="inline-block bg-white text-green-700 px-6 py-2 rounded-lg font-semibold group-hover:bg-green-50 transition">
                Create Patient →
              </span>
            </Link>

          </div>
        </section>
      </ScrollReveal>

      {/* Tech Stack */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto mt-20 pt-12 border-t border-gray-300 dark:border-gray-600">
          <h2 className="text-3xl font-bold mb-10 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg border border-white/40 dark:border-gray-700">
              <p className="font-semibold mb-2">React.js</p>
              <p className="text-sm opacity-75">Component-based UI</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg border border-white/40 dark:border-gray-700">
              <p className="font-semibold mb-2">React Router</p>
              <p className="text-sm opacity-75">Dynamic routing & navigation</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg border border-white/40 dark:border-gray-700">
              <p className="font-semibold mb-2">Firebase Firestore</p>
              <p className="text-sm opacity-75">Real-time NoSQL database</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg border border-white/40 dark:border-gray-700">
              <p className="font-semibold mb-2">Tailwind CSS</p>
              <p className="text-sm opacity-75">Modern styling & responsive design</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
