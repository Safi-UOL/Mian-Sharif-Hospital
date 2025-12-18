import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ScrollToTop from "./components/layouts/ScrollToTop";

/* ===== Hospital Website Pages ===== */
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./components/homeSections/Faq";
import SignIn from "./Pages/Sign_in";
import Sign_up from "./Pages/Sign_up";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Disclaimer from "./Pages/Disclaimer";

/* ===== LAB TASKS ===== */
import PatientCounter from "./Pages/PatientCounter";
import AppointmentForm from "./Pages/AppointmentForm";

/* ===== ASSIGNMENT / SPA ROUTES ===== */
import SpaHome from "./SPA_Routing/Pages/Home";
import CreatePatient from "./SPA_Routing/Pages/CreatePatient";
import Patients from "./SPA_Routing/Pages/Patients";
import PatientDetails from "./SPA_Routing/Pages/PatientDetails";
import EditPatient from "./SPA_Routing/Pages/EditPatient";

export default function App() {
  return (
    <>
      <ScrollToTop />

      {/* ===== FIXED BACKGROUND IMAGE (FULL WEBSITE) ===== */}
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/medical-bg.jpg')",
        }}
      >
        {/* ===== OVERLAY FOR READABILITY ===== */}
        <div className="min-h-screen bg-white/70 dark:bg-black/60 backdrop-blur-sm">

          <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* ===== MAIN CONTENT ===== */}
            <main className="flex-grow pt-0 md:pt-20 pb-0">
              <Routes>

                {/* ===== Hospital Website ===== */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<Sign_up />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />

                {/* ===== LAB ROUTES ===== */}
                <Route path="/patient-counter" element={<PatientCounter />} />
                <Route path="/appointment" element={<AppointmentForm />} />

                {/* ===== ASSIGNMENT ROUTES (SPA + CRUD) ===== */}
                <Route path="/SPA_Routing" element={<SpaHome />} />
                <Route path="/assignment/create" element={<CreatePatient />} />
                <Route path="/assignment/patients" element={<Patients />} />
                <Route path="/assignment/patients/:id" element={<PatientDetails />} />
                <Route path="/assignment/edit/:id" element={<EditPatient />} />

                {/* ===== Catch-all ===== */}
                <Route path="*" element={<Navigate to="/" replace />} />

              </Routes>
            </main>

            <Footer />
          </div>

        </div>
      </div>
    </>
  );
}
