import { Navigate } from "react-router-dom";

// Auth
import useFreelancerAuth from "../auth/useFreelancerAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useFreelancerAuth();

  if (!isLoggedIn) {
    return <Navigate to="/freelancer/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
