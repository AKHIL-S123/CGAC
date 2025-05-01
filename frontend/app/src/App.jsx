import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Students from './pages/Students';
import Departments from './pages/Department';
import Login from './pages/Login';
import ProtectedRoute from './components/Protected';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import StudentForm from './modules/students/StudentForm';
export default function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user_role exists in localStorage
    const userRole = localStorage.getItem('user_role');
    
    if (userRole) {
      setRole(userRole); // Set role if exists
    } else {
      // Redirect to login if role is missing
      console.log('No role found in localStorage, redirecting to login...');
    }

    // Set loading to false after checking role
    setLoading(false);

    // Logging
    console.log('Fetched user role from localStorage:', userRole);
    console.log('Loading finished:', loading);
  }, []);

  console.log('App Rendered');
  console.log('Role in App:', role);
  console.log('Loading in App:', loading);

  // If no role and loading is finished, redirect to login
  const location = useLocation();

  if (loading === false && !role && location.pathname !== '/login') {
    console.log("redirected to login")
    toast.info('Redirecting to login...');
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
         <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover ={false}
      />

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute requiredRole="admin" role={role} loading={loading}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute requiredRole="admin" role={role} loading={loading}>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute requiredRole="user" role={role} loading={loading}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/departments"
          element={
            <ProtectedRoute requiredRole="admin" role={role} loading={loading}>
              <Departments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/departments/:department"
          element={
            <ProtectedRoute requiredRole="admin" role={role} loading={loading}>
              <Students />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-student"
          element={
            <ProtectedRoute requiredRole="admin" role={role} loading={loading}>
              <StudentForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-student/:id"
          element={
            <ProtectedRoute requiredRole="admin" role={role} loading={loading}>
              <StudentForm />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
    </div>
  );
}
