import React from "react";
import styled from "styled-components";

export const ResumenCard = ({ reloj }) => {
  return (
    <Container>
      <div className="img-box">
        <img src={reloj.image} alt={reloj.brand} />
      </div>
      <div className="content">
        <h3>{reloj.brandName}</h3>
        <h3>${parseInt(reloj.price * 500)}</h3>
        <h3>Cant: {reloj.quantity}</h3>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 180px;
  height: 110px;
  display: grid;
  grid-template-columns: 30% auto;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  .img-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: contain;
    }
  }
  .content {
    margin: 0 auto;
   
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h3 {
      text-transform: capitalize;
      font-size: 16px;
      
      
    }
  }
`;
