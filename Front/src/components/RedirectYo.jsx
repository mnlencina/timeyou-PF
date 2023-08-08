import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { Navigate } from "react-router-dom";

export const RedirectTo = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="content">
        <h3>¡Hola!, para ingresar a nuestros servicios, ingresa a tu cuenta</h3>
        <div className="btn">
          <BTNCarritoDeCompras onClick={() => navigate("/auth")}>
            Ir a Login
          </BTNCarritoDeCompras>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0);

  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 42%,
    rgba(85, 85, 85, 1) 100%
  );
  .content {
    width: 350px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
    background-color: #fff;
    h3 {
      width: 90%;
    }
    .btn {
      width: 80%;
      height: 50px;
    }
  }
`;
