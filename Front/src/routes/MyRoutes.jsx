import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Shopping from "../pages/Shopping";
import Checkout from "../pages/Checkout";
import FormWatch from "../pages/Form/FormWatch";
import RegisterAndLogin from "../pages/RegisterAndLogin";
import LandingPage from "../pages/LandingPage";

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
        <Route path="/auth" element={<RegisterAndLogin/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/checkout" element={<Checkout />} />
        <Route path="/newwatch" element={<FormWatch />} />
      </Routes>
      {showFoot && <Footer />}
    </>
  );
};

export default MyRoutes;
