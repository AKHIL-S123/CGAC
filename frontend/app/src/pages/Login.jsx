import { useState } from "react";
import ENV from "../environment";
import collegeImage from '../assets/1.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log(`${ENV.API_BASE_URL}/login`)
      console.log("enterd here")
      const response = await fetch(`${ENV.API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log('Response received:', response);
      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const token = data.access_token;

      // Store token in localStorage
      localStorage.setItem("access_token", token);

      // Decode token to get role
      const decoded = JSON.parse(atob(token.split(".")[1]));
      const userRole = decoded.role;

      // Store user role in localStorage
      localStorage.setItem("user_role", userRole);

      console.log("Login successful! Role: " + userRole);
      window.location.href = "/";  // Navigate to the dashboard
    } catch (err) {
      console.log(err);
      setError("Incorrect email or password.");
    }
  };

  return (

   
    <div className="flex h-screen">
      <div className="w-[70%] bg-cover bg-center">
      <img src={collegeImage} alt="college" className="h-full w-full object-cover" />

      </div>
      <div className="w-[30%] flex items-center justify-center bg-white p-8 shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Login;





