import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Shopping from "../pages/Shopping";
import FormWatch from "../pages/Form/FormWatch";

const MyRoutes = () => {
  const location = useLocation();
  //mostrar NavBar
  const showNav =
    location.pathname === "/" || location.pathname === "/product/:model";

  const showFoot = location.pathname !== "/shopping";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:model" element={<DetailPage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/newwatch" element={<FormWatch/>}/>
      </Routes>
      {showFoot && <Footer />}
    </>
  );
};

export default MyRoutes;
