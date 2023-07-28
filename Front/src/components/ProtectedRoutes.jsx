import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, user, redirectTo = "/" }) => {
  if (user.token.trim() === "") {
    return <Navigate to={redirectTo} />;
  }
  if (user.role === "admin") {
    return <Navigate to={redirectTo} />;
  }
  return children;
};
