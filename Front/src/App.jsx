import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyRoutes from "./routes/MyRoutes";
import { allPropWatches, getProducts, setCart } from "./redux/Actions";

function App() {
  const dispatch = useDispatch();
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
  return <MyRoutes />;
}

export default App;
