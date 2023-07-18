import styled from "styled-components";

export const BTNCarritoDeCompras = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: #4ebcc7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  gap: 10px;
  color: #fff;
  text-transform: capitalize;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: #35838a;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const BTNHover = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background: none;
  font-size: 50px;
  color: #fff;
  transition: 0.3s ease-in all;
  pointer-events: none;
  pointer-events: all;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
