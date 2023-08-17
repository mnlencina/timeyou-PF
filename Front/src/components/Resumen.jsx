import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { buyFinishClear } from "../redux/actions/buys/buyFinishClearCart";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { updateWatch } from "../redux/actions/admin/updateWatch";
import { getProducts } from "../redux/Actions";
import { ResumenCard } from "./ResumenCard";
import html2canvas from "html2canvas";

const Resumen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.Cart);

  const TotalPrice =
    cart.reduce((acc, e) => acc + e.price * e.quantity, 0) * 500;

  const handleClick = () => {
    const captureElement = document.querySelector("#capture");
    const canvasWidth = 1050; // Ancho deseado en píxeles
    const canvasHeight = 650; // Alto deseado en píxeles

    html2canvas(captureElement, {
      width: canvasWidth,
      height: canvasHeight,
    }).then((canvas) => {
      const pdfUrl = canvas.toDataURL("image/jpeg");

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "resumen.jpeg";
      link.click();
    });
  };

  const handleToHome = () => {
    dispatch(updateWatch());
    dispatch(buyFinishClear());
    dispatch(getProducts());
    navigate("/home");
  };

  return (
    <ContainerMain>
      <div className="resumenContainer" id="capture">
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
                <BTNCarritoDeCompras onClick={handleClick}>
                  Descargar resumen
                </BTNCarritoDeCompras>
              </div>
              <div className="btn">
                <BTNCarritoDeCompras onClick={handleToHome}>
                  ir a Catalogo
                </BTNCarritoDeCompras>
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
export default Resumen;
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
      border: 1px solid #111;
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
        .controles {
          position: absolute;
          bottom: 0;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 20px;
          .btn {
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
          width: 100%;
        }
      }
    }
  }
`;

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
