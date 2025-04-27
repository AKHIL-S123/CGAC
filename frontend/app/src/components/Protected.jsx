import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole, role, loading }) => {
  console.log('ProtectedRoute Rendered');
  console.log('loading:', loading);
  console.log('role:', role);
  console.log('requiredRole:', requiredRole);

  // If loading, show a loading message
  if (loading) {
    console.log('Loading...'); // Logs when loading is true
    return <div>Loading...</div>;
  }

  // If role is not set, redirect to login page
  if (!role) {
    console.log('No role found, redirecting to login...');
    return <Navigate to="/login" />;
  }

  // If the role does not match the required role, redirect to login
  if (requiredRole && role !== requiredRole) {
    console.log(`Role '${role}' does not have access to this route. Redirecting to login...`);
    return <Navigate to="/login" />;
  }

  // If all checks pass, render the children components
  console.log('Access granted. Rendering children.');
  return children;
};

export default ProtectedRoute;
