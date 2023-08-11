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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-delay: 0.3s;
`;
