import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/hospital-Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getNavClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-blue-400 pb-1"
      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition";

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-xl backdrop-saturate-150
        bg-white/60 dark:bg-black/50
        border-b border-white/30 dark:border-white/10
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img src={logo} alt="Hospital Logo" className="w-10 h-10" />
          <span className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Mian Sharif Hospital
          </span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 font-medium whitespace-nowrap">
          <NavLink to="/" className={getNavClass} end>Home</NavLink>
          <NavLink to="/about" className={getNavClass}>About</NavLink>
          <NavLink to="/contact" className={getNavClass}>Contact</NavLink>
          <NavLink to="/faq" className={getNavClass}>FAQ</NavLink>
          <NavLink to="/patient-counter" className={getNavClass}>Patient Counter</NavLink>
          <NavLink to="/appointment" className={getNavClass}>Appointment</NavLink>
          <NavLink to="/assignment/patients" className={getNavClass}>Patients</NavLink>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              px-4 py-2 rounded-full text-sm font-medium
              bg-gray-900 text-white
              dark:bg-yellow-400 dark:text-black
            "
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>

          <Link
            to="/signin"
            className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="
              px-4 py-2 rounded-full text-sm font-medium
              bg-white/70 dark:bg-gray-800/70
              border border-white/30 dark:border-white/10
            "
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-gray-900 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            md:hidden px-6 pb-6 pt-4 space-y-3
            glass rounded-b-xl shadow-xl border border-white/20 dark:border-gray-700/20
            z-40 transition-all duration-300
          "
        >
          <NavLink to="/" end className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/faq" className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>FAQ</NavLink>

          <hr className="border-gray-200 dark:border-gray-700 my-2" />

          <NavLink to="/patient-counter" className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>Patient Counter</NavLink>
          <NavLink to="/appointment" className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>Appointment</NavLink>
          <NavLink to="/assignment/patients" className={(nav) => `${getNavClass(nav)} block w-full text-lg py-3 px-3 rounded-md`} onClick={() => setMenuOpen(false)}>Patients</NavLink>

          <hr className="border-gray-200 dark:border-gray-700 my-2" />

          <Link to="/signin" className="block w-full py-3 px-3 rounded-md text-base font-medium hover:bg-white/20 dark:hover:bg-gray-800/30" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link to="/signup" className="block w-full py-3 px-3 rounded-md bg-white/80 dark:bg-gray-700 text-gray-900 dark:text-white text-center font-medium" onClick={() => setMenuOpen(false)}>Sign Up</Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full py-3 rounded-lg bg-gray-900 text-white dark:bg-yellow-400 dark:text-black"
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}
