import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/product/:id")}>
      <div className="top-content">
        <span className="span-title">Envio gratis</span>
        <picture className="img-box">
          <img
            src="https://watchlandsa.vtexassets.com/arquivos/ids/165441-500-auto?v=1773761650&width=500&height=auto&aspect=true"
            alt="algo"
          />
        </picture>
      </div>
      <div className="section-content">
        <h3>reloj prune prg-5026v-01</h3>
        <h4>ecb-tt4de-ssaddd</h4>
        <h5>$350,00</h5>
      </div>
    </Container>
  );
};

const Container = styled.article`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px) translateX(5px);
    opacity: 1;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.8);
  }
  .top-content {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    .span-title {
      position: absolute;
      top: 10px;
      left: 5px;
      display: block;
      padding: 5px 10px;
      font-size: 0.6rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    .img-box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .section-content {
    width: 100%;
    height: calc(100%-380px);
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    h3 {
      width: 95%;
      text-align: center;
      font-size: 1rem;
      color: #000;
      font-weight: 600;
      text-transform: uppercase;
    }
    h4 {
      width: 95%;
      text-align: center;
      font-size: 1rem;
      color: #111;
      opacity: 0.5;
      font-weight: 600;
      text-transform: uppercase;
    }
    h5 {
      width: 95%;
      text-align: center;
      font-size: 1rem;
      color: #111;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
