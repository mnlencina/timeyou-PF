import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const MyRoutes = () => {
  const location = useLocation();
  //mostrar NavBar
  const showNav =
    location.pathname === "/" || location.pathname === "/product/:id";

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MyRoutes;
