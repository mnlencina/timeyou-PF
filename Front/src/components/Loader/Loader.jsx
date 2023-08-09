import React from "react";
import styled from "styled-components";
import Interior from "../../assets/load01.svg";
import Animacion from "../../assets/load02.svg";

export const Loader = () => {
  return (
    <Container>
      <div className="container">
        <img className="fijo" src={Interior} alt="logo svg" />
        <img className="movil" src={Animacion} alt="animacion svg" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 42%,
    rgba(85, 85, 85, 1) 100%
  );
  .container {
    width: 400px;
    height: 400px;
    position: relative;

    .fijo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
    }
    .movil {
      position: absolute;
      top: 8%;
      left: 23%;
      transform: translate(-50%, -50%);
      width: 200px;
      animation: animate 2s infinite linear;
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
