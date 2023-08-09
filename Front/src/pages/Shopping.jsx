import React, { useState } from "react";
import styled from "styled-components";
import { BTNHover } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";
import { CardShopping } from "../components/CardShopping";
import { useDispatch, useSelector } from "react-redux";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { setCart, totalPrice } from "../redux/Actions";
import { ProductMP } from "../components/mercadoPago/MercadoPago";
import { BsStripe } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NVgnTAYvuvU8SQ49gIo7GAYFVsJvzbxM4nYtK4dTWvvmSTBQgssGmwQbzqlWvznnEtmq7AMt8eVMuG3ZDy5Ex4L00Pkqqwp0w"
); // Reemplaza con tu clave secreta de Stripe

function Shopping() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoadingCart);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userName = user.userName;
  const cart = useSelector((state) => state.Cart);

  const [toogle, setToogle] = useState(false);

  const compraTotal = Math.floor(
    cart?.reduce((acc, e) => acc + e.price, 0) * 500
  );

  const toogleState = () => {
    setToogle(!toogle);
  };

  const handleStripeButton = async (event) => {
    try {
      const stripe = await stripePromise;
      const response = await axios.post(
        "http://localhost:3001/api/payment/create-checkout-session"
      );
      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const renderCart = () => (
    <Container>
      <div className="btn-goback">
        <BTNHover alter="true" onClick={() => navigate(-1)}>
          {"<"}
        </BTNHover>
      </div>
      <div className="main-Container">
        <div className="main-card">
          {cart.length === 0 ? (
            <ContainerEmpty>
              <h1>No tienes elementos cargados en el carrito</h1>
            </ContainerEmpty>
          ) : (
            <div className="main-products">
              <div className="products">
                {loading ? (
                  <h1>cargandoo</h1>
                ) : (
                  cart.map((e, index) => <CardShopping key={index} reloj={e} />)
                )}
              </div>
              {cart.length > 0 ? (
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
                  <Acordion className={toogle ? "active" : ""}>
                    <div className="MP">
                      <div className="btn">
                        <ProductMP carrito={cart} />
                      </div>
                    </div>
                    <hr />
                    <div className="Stripe">
                      <div className="btn">
                        <BTNCarritoDeCompras
                          alter="true"
                          onClick={handleStripeButton}
                        >
                          <span className="icon-stripe">
                            <BsStripe />
                          </span>
                          Pagar con Stripe
                        </BTNCarritoDeCompras>
                        <p>All your details are protected</p>
                      </div>
                    </div>
                  </Acordion>
                  <div className="btn-checkout">
                    <div className="btn-check">
                      <BTNCarritoDeCompras alter="false" onClick={toogleState}>
                        FINALIZAR COMPRA
                      </BTNCarritoDeCompras>
                    </div>
                    <div className={`btn-comprarmas`}>
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
  z-index: 100;
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
          .active {
            visibility: visible;
            bottom: -18px;
            transition: 0.5s ease-in;
            z-index: 200;
          }
          .btn-checkout {
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: auto;
            position: relative;
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

const Acordion = styled.div`
  width: 300px;
  height: 180px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 145px;
  bottom: 180px;
  z-index: -100;
  visibility: hidden;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  display: grid;
  grid-template-rows: 45% 10% 45%;
  place-items: center;
  overflow: hidden;
  .MP {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      button {
        width: 100% !important;
        height: 50px;
        text-transform: none;
        background-color: rgba(0, 0, 0, 0.9);
        transition: 0.3s ease-in-out;
        font-size: 18px;
        letter-spacing: 1px;
        display: grid;
        grid-template-columns: 100%;
        place-content: center;
        border-radius: 5px !important;
        &:hover {
          transform: none;
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
  hr {
    width: 90%;
    height: 1px;
    margin: 0 auto;
    background-color: #111;
    opacity: 0.5;
  }
  .Stripe {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      p {
        width: 100%;
        text-align: center;
        font-size: 10px;
        opacity: 0.6;
      }
      button {
        height: 50px;
        text-transform: none;
        background-color: rgba(0, 0, 0, 0.9);
        transition: 0.3s ease-in-out;
        font-size: 18px;
        letter-spacing: 1px;
        display: grid;
        grid-template-columns: 15% 75%;
        place-items: center;
        border-radius: 5px !important;
        &:hover {
          transform: none;
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
`;
