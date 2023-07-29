import React from "react";
import styled from "styled-components";
import { FiltersAll } from "./index.js";

export const Drawer = ({ show }) => {
  return (
    <Container show={show.toString()}>
      <ul>
        <li><FiltersAll /></li>
      </ul>
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => (props.show === "true" ? "0" : "-1000px")};
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    li {
      color: #fff;
    }
  }
`;
