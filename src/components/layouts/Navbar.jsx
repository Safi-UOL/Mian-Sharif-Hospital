import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/hospital-Logo.png";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();
  const navigate = useNavigate();

  const homePath = "/"; // browserRouter handles basename

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // SAME PAGE refresh, OTHER PAGE navigate
  const handleNavClick = (e, path) => {
    e.preventDefault();

    if (location.pathname === path) {
      window.location.reload(); // refresh only same-page click
      return;
    }

    navigate(path); // normal navigation
  };

  const getNavClass = ({ isActive }) =>
    isActive
      ? "pb-1 font-semibold text-black dark:text-white border-b-2 border-black dark:border-white"
      : "pb-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition";

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-gray-900/20 border-b dark:border-gray-700/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO CLICK → ALWAYS GO HOME WITHOUT WARNING */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, homePath)}
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img src={logo} className="w-10 h-10" alt="Hospital Logo" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Mian Sharif Hospital
          </span>
        </a>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-lg font-medium">
          
          <NavLink
            to="/"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/")}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/about")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavClass}
            onClick={(e) => handleNavClick(e, "/contact")}
          >
            Contact
          </NavLink>

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
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-full text-sm bg-gray-900 text-white dark:bg-yellow-400 dark:text-black shadow-md"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <Link to="/signin" className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white">
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 text-sm rounded-lg bg-white/70 dark:bg-gray-700/70 border text-gray-900 dark:text-gray-100"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
