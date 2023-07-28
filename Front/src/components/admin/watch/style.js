import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    
  h2 {
    margin: 10px;
  }
`;
  
export const Formulario = styled.main`  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  margin: 20px;
  
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



