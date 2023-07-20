import React from "react";
import styled from "styled-components";
import { BTNHover } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";
import { BsBagCheck, BsBag } from "react-icons/bs";
import { CardShopping } from "../components/CardShopping";
import { useSelector } from "react-redux";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";

function Shopping() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart);

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
      height: 100vh;
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
