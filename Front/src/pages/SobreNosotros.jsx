import React from "react";
import styled from "styled-components";

export default function SobreNosotros() {
  return (
    <>
      <Container>
        <div className="contenedor">
            Pruebas
        </div>
      </Container>
    </>
  );
}

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f3f2f2;
  .contenedor {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
  }
  h1 {
    display: flex;
    text-decoration: none;
    font-weight: bolder;
    font-size: 40px;
    color: #080808;
    margin-top: 50px;
  }
  h2 {
    display: flex;
    margin:30px 0 10px 0;
    font-weight: 400;
    font-size: 20px;
  }
  h4 {
    display: flex;
    justify-content: center;
    margin: 40px;
    font-size: 20px;
    font-weight: 300;
    color: #2e2e2e;
  }
  li {
    display: flex;
    font-weight: 300;
    color: #2e2e2e;
  }
  p {
      margin: 100px 150px 30px 150px;
      font-size: 11px;
      color: #2e2e2e;
  }
`;
