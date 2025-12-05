import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/hospital-Logo.png";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();
  const navigate = useNavigate();

  // Correct HOME paths (Localhost + GitHub Pages)
  const homePaths = ["/", "/Mian-Sharif-Hospital/"];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // SAME PAGE → REFRESH, DIFFERENT PAGE → NAVIGATE
  const handleNavClick = (e, path) => {
    e.preventDefault();

    const current = location.pathname;

    // HOME PAGE CASE (localhost + GitHub pages)
    if (path === "/" && homePaths.includes(current)) {
      window.location.reload();
      return;
    }

    // Other pages → refresh only when already on the same page
    if (current === path) {
      window.location.reload();
      return;
    }

    navigate(path);
  };

  const getNavClass = ({ isActive }) =>
    isActive
      ? "pb-1 font-semibold text-black dark:text-white border-b-2 border-black dark:border-white"
      : "pb-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-gray-900/20 shadow-sm border-b border-white/40 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO — ALWAYS REFRESH */}
        <a
          href={import.meta.env.MODE === "production" 
                ? "/Mian-Sharif-Hospital/" 
                : "/"}
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              import.meta.env.MODE === "production"
                ? "/Mian-Sharif-Hospital/"
                : "/";
          }}
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img src={logo} className="w-10 h-10" alt="Hospital Logo" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Mian Sharif Hospital
          </span>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="flex gap-6 text-lg font-medium">

          {/* HOME */}
          <NavLink
            to="/"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/")}
            end
          >
            Home
          </NavLink>

          {/* ABOUT */}
          <NavLink
            to="/about"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/about")}
          >
            About
          </NavLink>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/contact")}
          >
            Contact
          </NavLink>

          {/* FAQ */}
          <NavLink
            to="/faq"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/faq")}
          >
            FAQ
          </NavLink>

        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">

          {/* THEME SWITCH */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-yellow-400 dark:text-black shadow-md hover:shadow-lg transition"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* SIGN IN */}
          <Link
            to="/signin"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
          >
            Sign In
          </Link>

          {/* SIGN UP */}
          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg transition"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </nav>
  );
}
