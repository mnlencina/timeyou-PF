import React from "react";
import styled from "styled-components";
import { BsBagCheck, BsBag } from "react-icons/bs";

export const HeaderCheckout = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
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
`;
