import React from "react";
import styled from "styled-components";
import { Ring } from "@uiball/loaders";
import ImgTime from "../../assets/logo.svg";

export const Loader = () => {
  return (
    <Container>
      <img src={ImgTime} alt="logo" />
      <div className="container">
        <Ring size={250} lineWeight={3} speed={2} color="white" />;
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
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(51, 51, 51, 1) 10%,
    rgba(56, 56, 56, 1) 23%,
    rgba(255, 255, 255, 1) 100%
  );
  backdrop-filter: blur(10px);
  .container {
    position: absolute;
    top: 24%;
    left: 35%;
    width: 400px;
    height: 400px;
    display: grid;
    place-items: center;
  }
  img {
    width: 200px;
    height: 200px;
    fill: #fff !important;
    background: radial-gradient(
    circle,
    #111 20%, #fff
  );
    border-radius:50%;
    
  }
`;
