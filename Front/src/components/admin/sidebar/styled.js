import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideDiv = styled.div`
  background-color: grey;
  margin-top: 15px;
  color: white;
  height: 550px;
  width: 190px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  border-radius: 0 8px 8px 0;
`;
export const BtnSideBar = styled.button`
  background-color: black;
  color: white;
  width: 80%;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 1s;
  
  &:hover{
  background-color: rgb(255,255,255,0.7);
  color: black;
  transform: scale(0.9);
  
  }
`;
export const StyledLink = styled(Link)`
  margin-left: -22px;
  width: 100%;
`;