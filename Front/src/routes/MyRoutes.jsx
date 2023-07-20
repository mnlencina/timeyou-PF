import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Shopping from "../pages/Shopping";

const MyRoutes = () => {
  const location = useLocation();
  //mostrar NavBar
  const showNav =
    location.pathname === "/" || location.pathname === "/product/:id";

  const showFoot =
    location.pathname === "/" || location.pathname === "/product/:id";

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:model" element={<DetailPage />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
      {showFoot && <Footer />}
    </>
  );
};

export default MyRoutes;
