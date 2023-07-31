import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, user, redirectTo = "/auth" }) => {
  if (user.token.trim() === "") {
    return <Navigate to={redirectTo} />;
  }
  if (user.role === "") {
    return <Navigate to={redirectTo} />;
  }
  return children;
};

export const ProtectedRoutesAdmin = ({ children, user, redirectTo = "/home" }) => {
  if (user.token.trim() === "") {
    return <Navigate to={redirectTo} />;
  }
  if (user.role !== "admin") {
    return <Navigate to={redirectTo} />;
  }
  return children;
};
