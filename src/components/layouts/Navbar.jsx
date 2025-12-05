import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/hospital-Logo.png";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();
  const navigate = useNavigate();

  // GitHub Pages home paths
  const homePaths = ["/", "/Mian-Sharif-Hospital/"];

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // ⭐ SAME PAGE = REFRESH | DIFFERENT PAGE = NAVIGATE
  const handleNavClick = (e, path) => {
    e.preventDefault();
    const current = location.pathname;

    // --- HOME PAGE CASE ---
    if (path === "/" && homePaths.includes(current)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => window.location.reload(), 300);
      return;
    }

    // --- SAME PAGE REFRESH (ABOUT / CONTACT / FAQ) ---
    if (current === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => window.location.reload(), 300);
      return;
    }

    // --- DIFFERENT PAGE (NO REFRESH) ---
    navigate(path);
  };

  // Styling active tab
  const getNavClass = ({ isActive }) =>
    isActive
      ? "pb-1 font-semibold text-black dark:text-white border-b-2 border-black dark:border-white"
      : "pb-1 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition";

  // Correct HOME URL for logo click
  const HOME_URL =
    import.meta.env.MODE === "production"
      ? "/Mian-Sharif-Hospital/"
      : "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 dark:bg-gray-900/20 shadow-sm border-b border-white/40 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO — Always refresh and scroll to top */}
        <a
          href={HOME_URL}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
              window.location.href = HOME_URL;
            }, 200);
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

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-yellow-400 dark:text-black shadow-md hover:shadow-lg transition"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <Link
            to="/signin"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
          >
            Sign In
          </Link>

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
