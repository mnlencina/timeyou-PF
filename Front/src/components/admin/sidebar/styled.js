import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideDiv = styled.div`
  background-color: grey;
  margin-top: 70px;
  color: white;
  height: 450px;
  width: 190px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 8px 0;
`;
export const BtnSideBar = styled.button`
  background-color:${(props)=> props.alter !== "true" ? "black" : "rgb(255,255,255,0.5)"};
  color: white;
  width: 80%;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 1s;
  ${(props)=> props.alter == "true" ? "transform: scale(0.9)" : "null"};
  
  &:hover{
  background-color: rgb(255,255,255,0.7);
  color: black;
  transform: scale(0.9);
  
  }
`;
