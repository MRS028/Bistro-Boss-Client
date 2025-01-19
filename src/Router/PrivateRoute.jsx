import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/auth/login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
