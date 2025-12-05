import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/hospital-Logo.png";

export default function Footer() {
  const location = useLocation();

  // Normalize GitHub Pages path so "/" works correctly
  const normalize = (p) => p.replace("/Mian-Sharif-Hospital", "") || "/";

  const scrollOrNavigate = (path) => {
    if (normalize(location.pathname) === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="
        mt-6
        bg-white/40 dark:bg-gray-800/40 
        backdrop-blur-xl 
        border-t border-white/50 dark:border-gray-700 
        text-gray-900 dark:text-gray-200
        py-4
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT — LOGO + COPYRIGHT */}
        <div className="flex flex-col">
          <img
            src={logo}
            alt="Hospital Logo"
            className="w-28 h-auto mb-4 opacity-90 dark:opacity-100"
          />

          <p className="text-sm opacity-80 leading-relaxed">
            Providing reliable & ethical healthcare for your family.
          </p>

          <p className="mt-4 text-sm opacity-70">
            Designed by Safiullah.
            <br />All rights reserved.
          </p>
        </div>

        {/* MIDDLE — QUICK LINKS */}
        <div className="mt-2">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link to="/" onClick={() => scrollOrNavigate("/")} className="hover:opacity-100">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => scrollOrNavigate("/about")} className="hover:opacity-100">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => scrollOrNavigate("/contact")} className="hover:opacity-100">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/faq" onClick={() => scrollOrNavigate("/faq")} className="hover:opacity-100">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT — LEGAL SECTION */}
        <div className="mt-2">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>

          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link to="/terms" onClick={() => scrollOrNavigate("/terms")} className="hover:opacity-100">
                Terms of Use
              </Link>
            </li>

            <li>
              <Link to="/privacy" onClick={() => scrollOrNavigate("/privacy")} className="hover:opacity-100">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/disclaimer" onClick={() => scrollOrNavigate("/disclaimer")} className="hover:opacity-100">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
