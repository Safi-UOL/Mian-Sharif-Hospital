import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import ScrollReveal from "../components/common/ScrollReveal";
import hospitalCareImg from "../assets/Images/Hospital-Care.jpg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign in successful!");
      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 pb-20 min-h-screen text-gray-900 dark:text-gray-100 flex justify-center px-6">

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE — Information Card */}
        <ScrollReveal >
        <div className="bg-white/40 dark:bg-gray-800/60 backdrop-blur-xl 
          rounded-2xl shadow-2xl p-8 border border-white/30 dark:border-gray-700 flex flex-col">

          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Welcome to Hospital Care
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
            Access appointments, lab results, prescriptions, doctor messages, 
            and your personalized healthcare dashboard.
          </p>

          {/* LOCAL IMAGE */}
          <img
            src={hospitalCareImg}
            alt="Hospital Care"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
        </div>
        </ScrollReveal>

        {/* RIGHT SIDE — Sign In Form */}
        <ScrollReveal>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl 
          border border-white/50 dark:border-gray-700 shadow-2xl p-10 rounded-2xl w-full">

          <h1 className="text-2xl font-semibold mb-2 text-center text-gray-900 dark:text-gray-100">
            Sign In
          </h1>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
            Enter your details to continue
          </p>

          {error && <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">{error}</div>}

          <form onSubmit={handleSignIn}>
            {/* Email */}
            <div className="mb-5">
              <label className="text-sm opacity-80">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg mt-1 bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 
                  focus:ring-2 focus:ring-blue-500 outline-none 
                  text-gray-900 dark:text-gray-100"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="text-sm opacity-80">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg mt-1 bg-gray-100 dark:bg-gray-700 
                  border border-gray-300 dark:border-gray-600 
                  focus:ring-2 focus:ring-blue-500 outline-none 
                  text-gray-900 dark:text-gray-100"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <p className="text-right text-sm text-blue-600 dark:text-blue-400 mb-6 cursor-pointer hover:underline">
              Forgot Password?
            </p>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 
              text-white rounded-lg font-medium transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t dark:border-gray-600"></div>

          {/* Create Account */}
          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Create Account
            </Link>
          </p>

        </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
