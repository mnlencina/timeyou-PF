import React from "react";
import styled from "styled-components";
import { BTNHover } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";
import { BsBagCheck, BsBag } from "react-icons/bs";
import { CardShopping } from "../components/CardShopping";
import { useDispatch, useSelector } from "react-redux";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { totalPrice } from "../redux/Actions";

function Shopping() {
  const dispatch = useDispatch()
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
        <BTNHover alter onClick={() => navigate("/")}>
          {"<"}
        </BTNHover>
      </div>
      <div className="main-Container">
        <header className="header-shpping">
          <div className="header">
            <span className="check">
              <BsBagCheck />
            </span>
            <h1>
              time<span>you</span>
            </h1>
            <span className="no-check">
              <BsBag />
            </span>
          </div>
        </header>
        <div className="main-card">
          <div className="main-products">
            <div className="products">
              {cart.items.length === 0 ? (
                <ContainerEmpty>
                  <h1>No tienes elementos cargados en el carrito</h1>
                </ContainerEmpty>
              ) : (
                cart.items.map((e, index) => (
                  <CardShopping key={index} reloj={e} />
                ))
              )}
            </div>
          </div>
        </div>
        {cart.items.length > 0 ? (
          <div className="resumen-container">
            <div className="resumen-text">
              <h4>Resumen del pedido</h4>
              <p>
                Vea todas las opciones de envío para sus productos, incluyendo
                los plazos y los precios de envío
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
                <BTNCarritoDeCompras onClick={handleCheckOut}>
                  FINALIZAR COMPRA
                </BTNCarritoDeCompras>
              </div>
              <div className="btn-comprarmas">
                <BTNCarritoDeCompras alter onClick={() => navigate("/")}>
                  VER OTROS PRODUCTOS
                </BTNCarritoDeCompras>
              </div>
            </div>
          </div>
        ) : null}

        <footer className="footer-shopping">
          <div className="text-info">
            <p>TimeYou © 2019 - Todos los derechos reservados</p>
          </div>
        </footer>
      </div>
    </Container>
  );

  return <>{renderCart()}</>;
}

export default Shopping;

const Container = styled.main`
  width: 100vw;
  min-height: 500px;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .header-shpping {
      width: 100%;
      height: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      .header {
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
          visibility: hidden;
          text-transform: uppercase;
          span {
            font-weight: 300;
          }
        }
        .check,
        .no-check {
          width: 40px;
          height: auto;
          font-size: 20px;
          font-weight: 300;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .main-card {
      margin: 40px 0;
      width: 100%;
      min-height: 300px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .main-products {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .products {
          width: 90%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
      }
    }
    .resumen-container {
      width: 90%;
      height: 200px;
      display: flex;
      flex-direction: row;
      .resumen-text {
        width: calc(100% / 3);
        height: 100%;
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
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;
        hr {
          width: 80%;
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
        width: calc(100% / 3);
        height: 100%;
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
    .footer-shopping {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.1);
      .text-info {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
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

const ContainerProduct = styled.div``;
