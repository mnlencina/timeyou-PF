import styled from "styled-components";


export const Container = styled.main`
    position: fixed;
    z-index: 1;
    left: 0;
    top:0;
    width: 100%;   
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    flex-wrap: nowrap;
    background-color: rgb(0,0,0,0.7);
    
  h2 {
    margin: 10px;
  }
  
  .btnClose{
    bottom:10%
  }
`;
  
export const Formulario = styled.main`  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-top: 10%;
  background-color: rgb(255,255,255,0.8);
  
  select {
    width: 175px;
  }
  
  input {
    width: 175px;
  }
  .funcionesDiv{
    width: 220px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    background-color: rgb(255,255,255,0.7);
    height: 100%;
    border-radius: 10px;
    h3{
      margin: 5px 0px 0px 10px;
    }
    
    span{
      margin: 2px;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: #001aff55;
      border-radius: 5px;
      padding: 5px;
    }
    .funcionesDiv2{
      border: 0px;
      padding: 0px;
      margin: 0px 10px 0px 10px;
      display: flex;
      width: 200px;
      font-size: 12px;
      flex-direction: column;
      align-items: stretch;
      flex-wrap: nowrap;
    }
  }
  .divImg{
    width: 301px;
    height: 100%;
    border-radius: 10px;
    background-color: rgb(255,255,255,0.7);
    h3{
      margin: 5px 0px 0px 10px;
    }
  }
`;

export const Container1 = styled.main`
  
  .optionDiv{
    width: 180px;
    margin: 5px 5px 5px 0;
  }
  button {
    cursor: pointer;
  }
`;
  
export const Container2 = styled.main`
  display: flex;
  width: 301px;  
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: -15px;
  
  

  img {    
    height: 150px;
    width: 150px;
  }
  
  .btnClose {
    position: relative;
    bottom: -20px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #888;
    border: none;
    border-radius: 50%;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out all;
    color: #fff;
    cursor: pointer;
}
   
  
`;



