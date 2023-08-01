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
    background-color: rgb(0,0,0,0.4);
    
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
  gap: 50px;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  margin-top: 10%;
  
  select {
    width: 175px;
  }
  
  input {
    width: 175px;
  }
`;

export const Container1 = styled.main`
  .funcionesDiv{
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    span{
      margin: 2px;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: #001aff55;
      border-radius: 5px;
      padding: 2px;
    }
  }
  .optionDiv{
    margin: 5px 5px 5px 0;
  }
  button {
    cursor: pointer;
  }
`;
  
export const Container2 = styled.main`
  display: flex;
  width: 350px;
  flex-wrap: wrap;
  flex-direction: row;  

  img {
      height: 150px;
      width: 150px;
  }
  
  .btnClose {
    width: 30px;
    height: 30px;
    background: #888;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out all;
    color: #fff;
    cursor: pointer;
}
   
  
`;



