import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Shopping from "../pages/Shopping";
import Checkout from "../pages/Checkout";
import RegisterAndLogin from "../pages/RegisterAndLogin";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/DashBoard/DashBoard";

const MyRoutes = () => {
  const location = useLocation();
  //mostrar NavBar
  const showNav = location.pathname !== "/admin/dashboard" // location.pathname === "/" || location.pathname === "/product/:model";

  const showFoot = location.pathname !== "/shopping" && location.pathname !== "/admin/dashboard";

  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/auth" element={<RegisterAndLogin/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/checkout" element={<Checkout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />        
      </Routes>
      {showFoot && <Footer />}
    </>
  );
};

export default MyRoutes;