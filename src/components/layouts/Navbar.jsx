import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/hospital-Logo.png";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Custom handler for same-page reload
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.location.reload(); // SAME PAGE → REFRESH
    } else {
      navigate(path); // DIFFERENT PAGE → NORMAL NAVIGATION
    }
  };

  const getNavClass = ({ isActive }) =>
    isActive
      ? "pb-1 font-semibold text-black dark:text-white border-b-2 border-black dark:border-white"
      : "pb-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-gray-900/20 shadow-sm border-b border-white/40 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO / TITLE → ALWAYS RELOAD */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img src={logo} className="w-10 h-10" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Mian Sharif Hospital
          </span>
        </a>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-lg font-medium">

          <span onClick={() => handleNavClick("/")} className="cursor-pointer">
            <NavLink to="/" className={getNavClass}>Home</NavLink>
          </span>

          <span onClick={() => handleNavClick("/about")} className="cursor-pointer">
            <NavLink to="/about" className={getNavClass}>About</NavLink>
          </span>

          <span onClick={() => handleNavClick("/contact")} className="cursor-pointer">
            <NavLink to="/contact" className={getNavClass}>Contact</NavLink>
          </span>

          <span onClick={() => handleNavClick("/faq")} className="cursor-pointer">
            <NavLink to="/faq" className={getNavClass}>FAQ</NavLink>
          </span>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-yellow-400 dark:text-black shadow-md hover:shadow-lg transition"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <Link to="/signin" className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition">
            Sign In
          </Link>

          <Link to="/signup" className="px-4 py-2 text-sm font-medium rounded-lg bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
