import React from "react";
import styled from "styled-components";
import { BTNHover } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";
import { CardShopping } from "../components/CardShopping";
import { useDispatch, useSelector } from "react-redux";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { totalPrice } from "../redux/Actions";

function Shopping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart);

  const compraTotal = Math.floor(
    cart.items.reduce((acc, e) => acc + e.price, 0) * 500
  );

  const handleCheckOut = () => {
    dispatch(totalPrice(compraTotal));
    navigate("/shopping/checkout");
  };

  const renderCart = () => (
    <Container>
      <div className="btn-goback">
        <BTNHover alter="true" onClick={() => navigate("/")}>
          {"<"}
        </BTNHover>
      </div>
      <div className="main-Container">
        <div className="main-card">
          {cart.items.length === 0 ? (
            <ContainerEmpty>
              <h1>No tienes elementos cargados en el carrito</h1>
            </ContainerEmpty>
          ) : (
            <div className="main-products">
              <div className="products">
                {cart.items.map((e, index) => (
                  <CardShopping key={index} reloj={e} />
                ))}
              </div>
              {cart.items.length > 0 ? (
                <div className="resumen-container">
                  <div className="resumen-text">
                    <h4>Resumen del pedido</h4>
                    <p>
                      Vea todas las opciones de envío para sus productos,
                      incluyendo los plazos y los precios de envío
                    </p>
                  </div>
                  <div className="total-text">
                    <h4>
                      sub-total: <span>${compraTotal}</span>{" "}
                    </h4>
                    <hr />
                    <h2>
                      Total: <span>${compraTotal}</span>{" "}
                    </h2>
                  </div>
                  <div className="btn-checkout">
                    <div className="btn-check">
                      <BTNCarritoDeCompras
                        alter="false"
                        onClick={handleCheckOut}
                      >
                        FINALIZAR COMPRA
                      </BTNCarritoDeCompras>
                    </div>
                    <div className="btn-comprarmas">
                      <BTNCarritoDeCompras
                        alter="true"
                        onClick={() => navigate("/")}
                      >
                        VER OTROS PRODUCTOS
                      </BTNCarritoDeCompras>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </Container>
  );

  return <>{renderCart()}</>;
}

export default Shopping;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .btn-goback {
    position: absolute;
    top: 80px;
    left: 0px;
  }
  .main-Container {
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main-card {
      width: 90%;
      min-height: 600px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 20px 0;
      .main-products {
        margin-top: 20px;
        width: 90%;
        height: 100%;
        display: grid;
        grid-template-columns: 70% 30%;
        align-items: start;
        justify-items: start;
        .products {
          width: 90%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .resumen-container {
          margin-top: 30px;
          width: 100%;
          height: 550px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
          border-radius: 30px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
          .resumen-text {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            h4 {
              text-transform: uppercase;
              font-size: 24px;
              text-decoration: underline;
            }
            p {
              width: 90%;
              opacity: 0.8;
            }
          }
          .total-text {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 30px;
            hr {
              width: 90%;
              margin: 0 auto;
            }
            h4 {
              margin: 0 auto;
              font-size: 20px;
              text-decoration: underline;
              text-transform: uppercase;
              width: 80%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            h2 {
              margin: 0 auto;
              text-decoration: underline;
              text-transform: uppercase;
              width: 80%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
          .btn-checkout {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: auto;
            .btn-check,
            .btn-comprarmas {
              width: 90%;
              height: 50px;
            }
          }
        }
      }
    }
  }
`;


const ContainerEmpty = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
