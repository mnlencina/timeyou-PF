import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Pagination = ({ totalPages, page, onPrev, onNext }) => {
  return (
    <Container>
      {page > 1 && (
        <button onClick={onPrev}>
          <AiOutlineLeft />
        </button>
      )}
      <h4>
        {page} de {totalPages}
      </h4>
      {page !== totalPages && (
        <button onClick={onNext}>
          <AiOutlineRight />
        </button>
      )}
    </Container>
  );
  I;
};

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out all;
    &:hover {
      transform: scale(1.2);
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
    }
  }
`;
