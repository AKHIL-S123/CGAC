import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requiredRole, role, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (role !== requiredRole) {
    console.log('Role does not match! Redirecting...');
    return <Navigate to="/login" />;
  }

  return children;
}
