import React from "react";
import styled from "styled-components";

function Checkout() {
  return (
    <Container>
      <div className="cuadrado"></div>
      <div className="main-container">
          
      </div>
    </Container>
  );
}

export default Checkout;

const Container = styled.main`
  width: 100vw;
  min-height: 500px;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .cuadrado {
    width: 550px;
    height: 550px;
    background: radial-gradient(#111 30%, #111 50%, #fff);
    transform: rotate(45deg);
    position: absolute;
    top: -50%;
    left: -20%;
    z-index: -5;
  }
  .main-container{
    width: 60%;
    height: 90%;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.8);
    border-radius: 30px;
    
  }
`;
