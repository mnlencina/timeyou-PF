import React, { useState } from "react";
import styled from "styled-components";
import { CardContext, Drawer, BannerSlider } from "../components/index.js";

export default function HomePage() {
  const [show, setShow] = useState(false);

  const slideContainer = () => (
    <ContainerSlide>
      <div className="slide-container">
        <BannerSlider />
      </div>
    </ContainerSlide>
  );

  const renderMostrador = () => (
    <ContainerMostrador show={show}>
      <div className="sidebar">
        <div className="btn-filter">
          <button onClick={() => setShow(!show)}>filtros</button>
        </div>
        <Drawer show={show} />
      </div>
      <section className="main-card">
        <CardContext />
      </section>
    </ContainerMostrador>
  );

  return (
    <ContainerGeneral>
      {slideContainer()}
      {renderMostrador()}
    </ContainerGeneral>
  );
}

const ContainerGeneral = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerSlide = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  .slide-container {
    width: 80%;
    height: 80%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;

const ContainerMostrador = styled.div`
  width: 100%;
  height: 160vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .sidebar {
    width: ${(props) => (props.show ? "200px" : "0")};
    height: 100%;
    background: #111;
    transition: all 0.3s ease-in-out;
    position: relative;
    border-radius: 0 10px 0 0;
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
  .main-card {
    width: ${(props) => (props.show ? "calc(100% - 200px)" : "100%")};
    height: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    height: 1600px;
  }
  @media (max-width: 500px) {
    height: 2400px;
  }
`;
