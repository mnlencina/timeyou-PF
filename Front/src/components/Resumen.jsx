import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { buyFinishClear } from "../redux/actions/buys/buyFinishClearCart";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { updateWatch } from "../redux/actions/admin/updateWatch";
import { getProducts } from "../redux/Actions";

const Resumen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.Cart);

  const handleClick = (e) => {
    e.preventDefault();
    cart.map((w) =>
      dispatch(updateWatch(w.id, { stock: w.stock - w.quantity }))
    );
    dispatch(buyFinishClear());
    setTimeout(() => {
      dispatch(getProducts());
    }, 2000);
    navigate("/home");
  };

  return (
    <ContainerMain><Container>
      <div className="divResumen">
        <h1>¡Hola {user.userName}!</h1>
        <h1>Gracias por habernos elegido para tu compra.</h1>
        <h1>Esperamos que la disfrutes.</h1>
        <h1>¡Tu satisfacción es nuestra prioridad!</h1>

        <BTNCarritoDeCompras onClick={handleClick}>
          Ir al Catalogo
        </BTNCarritoDeCompras>
      </div>
    </Container></ContainerMain>
    
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  flex-wrap: nowrap;
  background-color: rgb(0, 0, 0, 0.7);
  justify-content: center;
  .divResumen {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 5px;
    margin: 10px;
    border-radius: 20px;
    padding: 25px;
    background-color: rgb(255, 255, 255, 0.8);
    align-items: center;
    h1 {
      font-size: 100%;
    }
  }
`;

const ContainerMain = styled.div`
  width: 100%;
  height: 344px;
`;

export default Resumen;
