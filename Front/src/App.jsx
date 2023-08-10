import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyRoutes from "./routes/MyRoutes";
import { allPropWatches, clearCart, getProducts, logOut, setCart } from "./redux/Actions";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* cambio realizado */
  /* Se agrega user al array de dependencias del effect */
  const user = useSelector(state=> state.user);
  /* ---- */
  const allProps = useCallback(() => {
    dispatch(getProducts());
    dispatch(allPropWatches("brands"));
    dispatch(allPropWatches("styles"));
    dispatch(allPropWatches("colors"));
    dispatch(allPropWatches("straps"));
    dispatch(allPropWatches("functions"));
  }, [dispatch]);

  useEffect(() => {
    allProps();
  }, [allProps]);
  /* cambio realizado */
  useEffect(() => {
    const userStored = localStorage.getItem("user");
    const userData = userStored ? JSON.parse(userStored) : false;
    const userName = userData ? userData.userName : null;
    const storedCart = localStorage.getItem(userName);
    if (storedCart && user) {
      console.log("se ejecuto!")
      dispatch(setCart(JSON.parse(storedCart))); // Cargar el carrito desde el almacenamiento local
    }
  }, [dispatch, user]);
  /* ---- */
  
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        // Implement logout logic here
        setIsActive(false);
      }, 60000); // 1 minutes in milliseconds

      setIsActive(true);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('click', resetTimer);

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('click', resetTimer);
    };
  }, []);
  
  const handleLogOut = () => {
    dispatch(clearCart());
    dispatch(logOut());
    setIsActive(true)
    navigate("/");
    alert("Se cerro session")
  };
  
  return (
    <div>
      {!isActive && handleLogOut()}
      <MyRoutes />
    </div>
  );
}

export default App;
