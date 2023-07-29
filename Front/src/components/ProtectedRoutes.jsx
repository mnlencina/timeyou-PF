import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, user }) => {
  if (user.token.trim() === "" && user.role === "user") {
    return <Navigate to="/home" />;
  }
  if (user.role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }
  return children;
};
