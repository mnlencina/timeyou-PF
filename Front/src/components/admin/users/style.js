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
    justify-content: center;
    gap: 10px;
    
    h2 {
    margin: 10px;
  }
  
    .divForm{
        width: 25%;
        display: flex;
        background-color: rgb(250,250,250,0.7);
        border-radius: 20px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 20px;
        
        input{
            width: 180px;
            border-radius: 5px;
        }
        
        span{
          font-size: 10px;
          color: red;
        }
        .btnUp {
        background-image: linear-gradient(to bottom, rgb(100,100,200), rgb(0,0,200), black);
        color: white;
        width: 175px;
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        transition: 500ms;
  
        &:hover{
          background-image: none;
          background-color: rgb(100,100,255);
          color: black;
          transform: scale(0.9);
  
        }
      }
    }
    .btnClose{
        background-image: linear-gradient(to bottom, rgb(100,100,200), rgb(0,0,50), black);
    color: white;
    width: 150px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: 500ms;
  
      &:hover{
        background-image: none;
        background-color: rgb(255,255,255,0.2);
        color: red;
        transform: scale(0.9);
  
      }   
    }
`