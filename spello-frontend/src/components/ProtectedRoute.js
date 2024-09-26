import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  // If user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/" />;
  }

  // Otherwise, render the children (i.e., the protected page)
  return children;
};

export default ProtectedRoute;
