import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({
  children,
  isAllowed,
  redirectPath,
  protect = false,
}) => {
  const location = useLocation();

  if (!protect) return children;

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
