import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Shopping from "../pages/Shopping";
import Checkout from "../pages/Checkout";
import RegisterAndLogin from "../pages/RegisterAndLogin";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";
import TerminosCondiciones from "../pages/Terminos&Condiciones";
import Privacidad from "../pages/Privacidad";
import Preguntas from "../pages/Preguntas";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import Contacto from "../pages/Contacto";
import MiCuenta from "../pages/MiCuenta";
import Resumen from "../components/Resumen";
import {
  ProtectedRoutes,
  ProtectedRoutesAdmin,
} from "../components/ProtectedRoutes";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { HeaderCheckout } from "../components/HeaderCheckout";
import { FooterCheckOut } from "../components/FooterCheckout";

const MyRoutes = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  //const cart = useSelector((state) => state.Cart);
  //mostrar NavBar
  const showNav =
    location.pathname !== "/admin/dashboard" &&
    location.pathname !== "/shopping" &&
    location.pathname !== "/shopping/checkout";

  const showFoot =
    location.pathname !== "/admin/dashboard" &&
    location.pathname !== "/shopping" &&
    location.pathname !== "/shopping/checkout";

  const ShowCheckoutNav =
    location.pathname === "/shopping" ||
    location.pathname === "/shopping/checkout";
  const showCheckoutFoot =
    location.pathname === "/shopping" ||
    location.pathname === "/shopping/checkout";
    
  

  return (
    <>
      {showNav && <Navbar />}
      {ShowCheckoutNav && <HeaderCheckout />}
      <Routes>
        <Route path="/auth" element={<RegisterAndLogin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route element={<ProtectedRoutes user={user} redirectTo={"/auth"} />}>
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/shopping/checkout" element={<Checkout />} />
          <Route path="/shopping/resumen" element={<Resumen/>} />
        </Route>
        <Route path="/terminosycondiciones" element={<TerminosCondiciones />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoutesAdmin user={user}>
              <Dashboard />
            </ProtectedRoutesAdmin>
          }
        />
      </Routes>
      {showFoot && <Footer />}
      {showCheckoutFoot && <FooterCheckOut />}
    </>
  );
};

export default MyRoutes;
