// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Card } from "../components/index.js";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

export const CardContext = ({ pagination, show }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoading);

  return (
    <Container show={show}>
      <div className="context-card">
        {pagination &&
          Array.isArray(pagination) &&
          pagination.map((e, i) => <Card key={i} watch={e} />)}
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
  .context-card {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${(props) =>
      props.show ? "repeat(3, 1fr)" : "repeat(4,1fr)"};
    /* se agrega template row */
    grid-template-rows:${(props) =>
      props.show ? "repeat(4, 1fr)" : "repeat(3,1fr)"};
    align-items: start;
    justify-items: center;
    gap: 40px;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    .context-card {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 500px) {
    .context-card {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
