import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <header className="header">
        <h1>
          Times<span>You</span>
        </h1>
      </header>
      <nav className="navigation">
        <ul>
          <li>hola1</li>
          <li>hola2</li>
          <li>hola3</li>
          <li>hola4</li>
        </ul>
        <div className="icons"></div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      span {
        font-weight: 300;
      }
    }
  }
  .navigation {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .icons {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
`;
