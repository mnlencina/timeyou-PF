import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RedirectTo } from "./RedirectYo";

export const ProtectedRoutes = ({ children, user }) => {
  if (user.token.trim() === "") {
    return <RedirectTo />;
  }
  if (user.role === "") {
    return <RedirectTo />;
  }
  return <Outlet />;
};

export const ProtectedRoutesAdmin = ({
  children,
  user,
  redirectTo = "/home",
}) => {
  if (user.token.trim() === "") {
    return <Navigate to={redirectTo} />;
  }
  if (user.role !== "admin") {
    return <Navigate to={redirectTo} />;
  }
  return children;
};
