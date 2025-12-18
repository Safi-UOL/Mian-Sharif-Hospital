import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/hospital-Logo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  
  // Appointment form state
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    age: "",
    phone: "",
    disease: "",
    date: "",
  });

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

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", appointmentData);
    alert("Appointment booked successfully!");
    setAppointmentData({ name: "", age: "", phone: "", disease: "", date: "" });
    setAppointmentOpen(false);
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

          {/* Appointment Modal Button */}
          <button
            onClick={() => setAppointmentOpen(true)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
          >
            Appointment
          </button>

          {/* Assignment SPA - Single Patients Page */}
          <NavLink to="/assignment/patients" className={getNavClass}>
            Patients
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
          
          <button
            onClick={() => {
              setAppointmentOpen(true);
              setMenuOpen(false);
            }}
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition text-left px-4"
          >
            Appointment
          </button>

          <hr className="border-gray-300 dark:border-gray-700" />

          <NavLink to="/assignment/patients" className={getNavClass}>
            Patients
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

      {/* ===== APPOINTMENT MODAL ===== */}
      {appointmentOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-40 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Book Appointment
              </h2>
              <button
                onClick={() => setAppointmentOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Patient Name"
                value={appointmentData.name}
                onChange={handleAppointmentChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={appointmentData.age}
                onChange={handleAppointmentChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={appointmentData.phone}
                onChange={handleAppointmentChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="disease"
                placeholder="Disease / Problem"
                value={appointmentData.disease}
                onChange={handleAppointmentChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="date"
                name="date"
                value={appointmentData.date}
                onChange={handleAppointmentChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  onClick={() => setAppointmentOpen(false)}
                  className="flex-1 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
