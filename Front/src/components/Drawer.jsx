import React from "react";
import styled from "styled-components";
import { FiltersAll } from "./index.js";

export const Drawer = ({ show, setPage }) => {
  return (
    <Container show={show.toString()}>
      
        
          <FiltersAll setPage={setPage} show={show.toString()} />
       
      
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
  left: ${(props) => (props.show === "true" ? "0" : "-1000px")};
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
`;
