import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
    z-index: 60;
    left: 0;
    top:0;
    width: 100%;   
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    flex-wrap: nowrap;
    background-color: rgb(0,0,0,0.85);
    justify-content: center;
  .divResumen {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 5px;
    margin: 10px;
    border-radius: 20px;
    padding: 25px;
    background-color: rgb(255,255,255,0.8);
    align-items: center;
  h1{
    font-size: 100%;
  }
  }
 
`;