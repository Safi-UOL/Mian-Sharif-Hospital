import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/hospital-Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const homePaths = ["/", "/Mian-Sharif-Hospital/"];
  const HOME_URL =
    import.meta.env.MODE === "production"
      ? "/Mian-Sharif-Hospital/"
      : "/";

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // SAME PAGE = REFRESH | DIFFERENT PAGE = NAVIGATE
  const handleNavClick = (e, path) => {
    e.preventDefault();
    const current = location.pathname;

    // Home logic (localhost + GitHub pages)
    if (path === "/" && homePaths.includes(current)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => window.location.reload(), 300);
      return;
    }

    // Same page refresh (About, Contact, FAQ, etc.)
    if (current === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => window.location.reload(), 300);
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
        <a
          href={HOME_URL}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => (window.location.href = HOME_URL), 200);
          }}
          className="flex items-center gap-3"
        >
          <img src={logo} className="w-10 h-10" />
          <span className="text-xl md:text-2xl font-bold dark:text-white">
            Mian Sharif Hospital
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <NavLink to="/" className={getNavClass} onClick={(e) => handleNavClick(e, "/")} end>Home</NavLink>
          <NavLink to="./about" className={getNavClass} onClick={(e) => handleNavClick(e, "./about")}>About</NavLink>
          <NavLink to="./contact" className={getNavClass} onClick={(e) => handleNavClick(e, "./contact")}>Contact</NavLink>
          <NavLink to="./faq" className={getNavClass} onClick={(e) => handleNavClick(e, "./faq")}>FAQ</NavLink>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white dark:bg-yellow-400 dark:text-black"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          <Link to="/signin" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sign In</Link>
          <Link to="/signup" className="px-4 py-2 bg-white/70 dark:bg-gray-700 text-gray-900 dark:text-white border rounded-lg">Sign Up</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU WITH FIXED SPACING */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 pt-4 text-lg space-y-6">

          <NavLink
            to="/"
            className={({ isActive }) => getNavClass({ isActive }) + " block"}
            onClick={(e) => handleNavClick(e, "/")}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => getNavClass({ isActive }) + " block"}
            onClick={(e) => handleNavClick(e, "/about")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => getNavClass({ isActive }) + " block"}
            onClick={(e) => handleNavClick(e, "/contact")}
          >
            Contact
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) => getNavClass({ isActive }) + " block"}
            onClick={(e) => handleNavClick(e, "/faq")}
          >
            FAQ
          </NavLink>

          <hr className="border-gray-300 dark:border-gray-700" />

          <Link to="/signin" onClick={() => setMenuOpen(false)} className="block">Sign In</Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)} className="block">Sign Up</Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full py-3 rounded-lg bg-gray-900 dark:bg-yellow-400 text-white dark:text-black mt-4"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
