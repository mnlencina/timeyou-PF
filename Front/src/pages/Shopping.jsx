import React from "react";
import styled from "styled-components";
import { BTNHover } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";
import { BsBagCheck, BsBag } from "react-icons/bs";
import { CardShopping } from "../components/CardShopping";

function Shopping() {
  const navigate = useNavigate();
  return (
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
              <CardShopping/>
              <CardShopping/>
              <CardShopping/>
              <CardShopping/>
              <CardShopping/>
            
            </div>
          </div>
          <div className="main-resumen">
            <div className="resumen"></div>
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
      height: calc(100vh - 18%);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .main-products {
        width: 65%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        .products {
          width: 90%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center ;
        }
      }
      .main-resumen {
        width: 35%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center:;
        .resumen {
          width: 90%;
          height: 600px;
          border-radius: 20px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          display: flex;
          align-items: flex-start; justify-content: flex-start;
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
