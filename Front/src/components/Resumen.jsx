import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { buyFinishClear } from "../redux/actions/buys/buyFinishClearCart";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { updateWatch } from "../redux/actions/admin/updateWatch";
import { getProducts } from "../redux/Actions";
import { ResumenCard } from "./ResumenCard";

const Resumen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.Cart);

  const TotalPrice =
    cart.reduce((acc, e) => acc + e.price * e.quantity, 0) * 500;

  console.log(TotalPrice);

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
    <ContainerMain>
      <div className="resumenContainer">
        <div className="canvan">
          <div className="title">
            <h2>Resumen de su pedido</h2>
          </div>
          <div className="products">
            {cart?.map((e) => (
              <ResumenCard reloj={e} key={e.id} />
            ))}
            <div className="controles">
              <div className="btn">
                <BTNCarritoDeCompras>Descargar resumen</BTNCarritoDeCompras>
              </div>
              <div className="btn">
                <BTNCarritoDeCompras>ir a Catalogo</BTNCarritoDeCompras>
              </div>
            </div>
          </div>
          <div className="foter">
            <h3>Total de su pedido: ${TotalPrice}</h3>
            <p>
              Los productos disponibles en timeYou son relojes de alta calidad.
              Las descripciones, imágenes y especificaciones de los productos
              son proporcionadas de manera precisa. Sin embargo, pueden existir
              variaciones mínimas en el color y la apariencia debido a
              diferencias en la pantalla de visualización.
            </p>
          </div>
        </div>
      </div>
    </ContainerMain>
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .resumenContainer {
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    .canvan {
      width: 600px;
      height: 600px;
      display: grid;
      grid-template-rows: 10% auto 20%;
      border-radius: 30px;
      align-items: center;
      justify-items: center;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
      .title {
        width: 90%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
          text-decoration: underline;
          letter-spacing: 1px;
        }
      }
      .products {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
        justify-items: center;
        .controles{
          position: absolute;
          bottom:0;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 20px;
          .btn{
            width: 40%;
          }
        }
      }
      .foter {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        p {
          font-size: 12px;
          opacity: 0.5;
        }
      }
    }
  }
`;

export default Resumen;

/* <Container>
      <div className="divResumen">
        <h1>¡Hola {user.userName}!</h1>
        <h1>Gracias por habernos elegido para tu compra.</h1>
        <h1>Esperamos que la disfrutes.</h1>
        <h1>¡Tu satisfacción es nuestra prioridad!</h1>

        <BTNCarritoDeCompras onClick={handleClick}>
          aceptar
        </BTNCarritoDeCompras>
      </div>
    </Container> */
