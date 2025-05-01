import { useState } from "react";
import ENV from "../environment";
import collegeImage from "../assets/1.png";
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${ENV.API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const token = data.access_token;

      localStorage.setItem("access_token", token);
      const decoded = JSON.parse(atob(token.split(".")[1]));
      const userRole = decoded.role;
      localStorage.setItem("user_role", userRole);
      
         // Notify user of successful login
         toast.success("Login successful!");

      setTimeout(() => {
        window.location.href = "/";
      }, 3000); // Adjust the delay (1000ms = 1 second)


    } catch (err) {
      console.error(err);
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src={collegeImage}
        alt="college"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 z-10" />

      {/* Login Box */}
      <div className="relative z-20 h-full flex items-center justify-end px-10">
        <div
          className="animate-fade-in backdrop-blur-xl bg-white/20 border border-white/30 p-10 rounded-3xl w-full max-w-md shadow-2xl"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:opacity-90 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
