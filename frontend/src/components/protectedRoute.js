import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("authToken"); 
  return token ? element : <Navigate to='/login' replace />;
};

export default ProtectedRoute;
