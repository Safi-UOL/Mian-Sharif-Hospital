import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/hospital-Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const homePaths = ["/"];
  const HOME_URL = "/";

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const current = location.pathname;

    if (path === "/" && current === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (current === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setMenuOpen(false);
    navigate(path);
  };

  const getNavClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
      : "text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition pb-1";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10" />
          <span className="text-xl md:text-2xl font-bold dark:text-white">
            Mian Sharif Hospital
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-3 text-sm font-medium items-center">

          {/* Hospital */}
          <NavLink to="/" className={getNavClass} end>Home</NavLink>
          <NavLink to="/about" className={getNavClass}>About</NavLink>
          <NavLink to="/contact" className={getNavClass}>Contact</NavLink>
          <NavLink to="/faq" className={getNavClass}>FAQ</NavLink>

          {/* Lab */}
          <NavLink to="/patient-counter" className={getNavClass}>
            Patient Counter
          </NavLink>
          <NavLink to="/appointment" className={getNavClass}>
            Appointment
          </NavLink>

          {/* Assignment SPA */}
          <NavLink to="/assignment/patients" className={getNavClass}>
            Patients
          </NavLink>
          <NavLink to="/assignment/create" className={getNavClass}>
            Add Patient
          </NavLink>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-yellow-400 dark:text-black"
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>

          <Link to="/signin" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign In
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white border rounded-lg">
            Sign Up
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 pt-4 text-lg space-y-5">

          <NavLink to="/" className={getNavClass} end>Home</NavLink>
          <NavLink to="/about" className={getNavClass}>About</NavLink>
          <NavLink to="/contact" className={getNavClass}>Contact</NavLink>
          <NavLink to="/faq" className={getNavClass}>FAQ</NavLink>

          <hr className="border-gray-300 dark:border-gray-700" />

          <NavLink to="/patient-counter" className={getNavClass}>
            Patient Counter
          </NavLink>
          <NavLink to="/appointment" className={getNavClass}>
            Appointment
          </NavLink>

          <hr className="border-gray-300 dark:border-gray-700" />

          <NavLink to="/assignment/patients" className={getNavClass}>
            Patients
          </NavLink>
          <NavLink to="/assignment/create" className={getNavClass}>
            Add Patient
          </NavLink>

          <hr className="border-gray-300 dark:border-gray-700" />

          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full py-3 rounded-lg bg-gray-900 dark:bg-yellow-400 text-white dark:text-black"
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}
