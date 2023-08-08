import styled from "styled-components";

export const SideDiv = styled.div`
  background-color: rgb(5,5,20,0.8);
  //background-image: linear-gradient(to left,rgb(5,5,20),rgb(100,100,130),rgb(5,5,20));
  height: 450px;
  width: 190px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 8px 0;
  margin-top: 70px;
`;
export const BtnSideBar = styled.button`
  
  ${(props)=> 
    props.alter !== "true"
      ? "background-image: linear-gradient(to bottom, grey, black, black)" 
      : "background-color: rgb(255,255,255,0.5)"
  };
  
  color: white;
  width: 80%;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 500ms;
  
  ${(props)=> 
    props.alter == "true" 
      ? "transform: scale(0.95)" 
      : "null"
  };
  
  &:hover{
    background-image: none;
    background-color: rgb(255,255,255,0.5);
    color: black;
    transform: scale(0.9);
  
  }
`;
