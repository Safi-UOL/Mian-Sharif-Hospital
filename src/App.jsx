import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ScrollToTop from "./components/layouts/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./components/homeSections/Faq";
import SignIn from "./Pages/Sign_in";
import Sign_up from "./Pages/Sign_up";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Disclaimer from "./Pages/Disclaimer";

export default function App() {
  return (
    <BrowserRouter
      basename={
        import.meta.env.MODE === "production"
          ? "/Mian-Sharif-Hospital"
          : "/"
      }
    >
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        
        <Navbar />

        <main className="flex-grow pt-20 pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Sign_up />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
