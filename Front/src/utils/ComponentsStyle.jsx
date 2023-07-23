import styled from "styled-components";

export const BTNCarritoDeCompras = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: /* #4ebcc7 */ ${(props) =>
    props.alter ? "rgba(0,0,0,0.4)" : "#4ebcc7"};
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
    background-color: /* #35838a */ ${(props) =>
      props.alter ? "rgba(0,0,0,0.8)" : "#35838a"};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const BTNHover = styled.button`
  width: 60px;
  height: 60px;
  border: ${(props) => (props.alter ? "1px solid #111" : "none")};
  border-radius: 50%;
  background: none;
  font-size: 50px;
  color: ${(props) => (props.alter ? "#111" : "#fff")};
  transition: 0.3s ease-in all;
  pointer-events: none;
  pointer-events: all;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${(props) => props.alter && "#fff"};
    border: ${(props) => props.alter && "none"};
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const AppendBTN = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.alter ? "#888" : "none")};
  border: none;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
  color: ${(props) => props.alter && "#fff"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alter ? "#888" : "rgba(0,0,0,0.8)")};
    transform: scale(1.2);
    color: ${(props) => (props.alter ? "green" : "#fff")};
  }
`;
