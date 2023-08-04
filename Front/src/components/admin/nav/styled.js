import styled from "styled-components";

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: gray;
  height: 70px;

  img {
    position: fixed;
    left: 0;
    top: 0;
    width: 5%;
    padding: 10px;
  }

  input {
    margin: 10px;
    border-radius: 5px;
  }
`;
