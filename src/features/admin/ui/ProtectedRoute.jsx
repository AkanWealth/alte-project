import { Navigate } from "react-router-dom";

// Auth
import useAdminAuth from "../auth/useAdminAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAdminAuth();

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
