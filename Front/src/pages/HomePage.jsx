import React, { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [show, setShow] = useState(false);

  return (
    <Container show={show}>
      <div className="btn-filter">
        <button onClick={() => setShow(!show)}>Open</button>
      </div>
      <div className="cja1"></div>
      <div className="caja2"></div>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: ${(props) => (props.show ? "300px auto" : "100%")};
  position: sticky;
  .btn-filter {
    position: absolute;
    top: 40%;
    left: 50%;
  }
  .cja1 {
    background-color: red;
   
  }
  .caja2 {
    background-color: green;
  }
`;
