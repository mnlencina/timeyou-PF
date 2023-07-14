import React, { useState } from "react";
import styled from "styled-components";
import { CardContext, Drawer } from "../components/index.js";

export default function HomePage() {
  const [show, setShow] = useState(false);

  return (
    <Container show={show}>
      <div className="cja1">
        <div className="btn-filter">
          <button onClick={() => setShow(!show)}>filtros</button>
        </div>
        <Drawer show={show} />
      </div>
      <div className="caja2">
      <CardContext/>
      </div>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .cja1 {
    width: ${(props) => (props.show ? "200px" : "0")};
    height: 100%;
    background: #111;
    transition: all 0.3s ease-in-out;
    position: relative;
    .btn-filter {
      position: absolute;
      left: ${(props) => (props.show ? "200px" : "0px")};
      top: 30px;
      transition: all 0.3s ease-in-out;
      button {
        width: 40px;
        height: 150px;
        background-color: #111;
        border: none;
        border-radius: 0 10px 10px 0;
        color: #fff;
        writing-mode: vertical-lr;
        text-transform: uppercase;
        letter-spacing: 3px;
        
        transition: 0.3s;
        &:hover {
          transform: scale(1.1);
          border-right: none;
        }
      }
    }
  }
  .caja2 {
    width: ${(props) => (props.show ? "calc(100% - 200px)" : "100%")};
    height: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width:768px) {
    height:1600px;
  }
  @media (max-width:500px) {
    height:2400px;
  }
`;
