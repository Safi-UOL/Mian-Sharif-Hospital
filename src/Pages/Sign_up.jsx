import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import ScrollReveal from "../components/common/ScrollReveal";
import signupImg from "../assets/Images/sign-up.jpg";

export default function Sign_up() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/signin");
    } catch (err) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 pb-20 min-h-screen flex justify-center items-center px-6 text-gray-900 dark:text-gray-100">

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12">

        {/* LEFT INFO CARD */}
        <ScrollReveal >
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl 
            p-10 rounded-2xl shadow-xl border border-white/40 dark:border-gray-700">

          <h2 className="text-3xl font-semibold mb-4">Create Your Account</h2>

          <p className="opacity-90 leading-relaxed mb-6">
            Register to access appointments, medical updates, reports, and 
            personalized hospital services. Your information will remain secure 
            and confidential.
          </p>

          {/* SIGN UP IMAGE */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-2 
                          bg-gray-300 dark:bg-gray-700">
            <img
              src={signupImg}
              alt="Sign Up"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        </ScrollReveal>

        {/* RIGHT SIGN UP FORM */}
        <ScrollReveal>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl 
            p-10 rounded-2xl shadow-2xl border border-white/50 dark:border-gray-700">

          <h1 className="text-2xl font-semibold text-center mb-2">Sign Up</h1>
          <p className="text-center opacity-80 mb-8">
            Fill in your details to continue
          </p>

          {error && <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">{error}</div>}

          <form onSubmit={handleSignUp} className="space-y-6">

            {/* FULL NAME */}
            <div>
              <label className="text-sm opacity-80">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 outline-none 
                  focus:ring-2 focus:ring-blue-500 mt-1"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm opacity-80">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@gmail.com"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 outline-none 
                  focus:ring-2 focus:ring-blue-500 mt-1"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm opacity-80">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 outline-none 
                  focus:ring-2 focus:ring-blue-500 mt-1"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm opacity-80">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Re-enter your password"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 outline-none
                  focus:ring-2 focus:ring-blue-500 mt-1"
              />
            </div>

            {/* SIGN UP BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white 
                rounded-lg shadow-lg transition-all font-medium disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm pt-4">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Sign In
              </Link>
            </p>

          </form>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
