import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon from react-icons
import { useNavigate } from 'react-router-dom'; // Use navigate to go to login page
import { toast } from 'react-toastify';


export default function Header() {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear the necessary items from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_role');
    // Or if you want to clear everything from localStorage:
    // localStorage.clear();

    // Redirect to login page

    toast.success("Logged out successful!");

    setTimeout(() => {
      navigate('/login');
    }, 3000); // Adjust the delay (1000ms = 1 second)


    // Ensure '/login' is the path to your login page
  };

  return (
    <header className="bg-white shadow-sm p-4 border-b flex justify-between items-center">
      {/* Centered Header Text */}
      <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center flex-1">CHIKKANNA GOVERNMENT ARTS COLLEGE - TIRUPUR 641602</h2>

      {/* Logout Button with Icon on the right */}
      <button
        onClick={handleLogout}
        className="text-red-500 hover:text-red-700 flex items-center space-x-2 ml-auto cursor-pointer"
      >
        <FaSignOutAlt size={20} />
        <span className="text-sm">Logout</span>
      </button>
    </header>
  );
}
