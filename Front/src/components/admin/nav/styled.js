import styled from "styled-components";

export const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-image: linear-gradient(to bottom, rgb(100,100,130), black, black, rgb(230,230,255));
    height: 45px;
    
    .linkImg{
        position: fixed;
        left: 0;
        top: 0;
        padding: 20px;
        transition: 1s;
        
        
        img{
            width: 80px;
        }
        
        &:hover{
            transform: scale(1.2);
            
        }
    }
    
    h2{
        margin: 10px;
        color: rgb(255,255,255,0.9);
    }
`

export const HomeDiv = styled.div`
    display: flex;
    background-color: rgb(0,0,0,0.5);
    height: 100%;
    width: 100%;
    margin: 50px 0 0 50px;
    gap: 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    border-radius: 10px;
`
export const CardAdmin = styled.div`
    background-color: rgb(255,255,255,0.7);
    display: flex;
    border-radius: 10px;
    height: 80%;
    width: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    &:Hover{
        opacity: 0.7;
        transform: scale(1.05);
    }
    
    .iconHome{
        font-size: 800%;
        color: rgb(5,5,100,0.8);
    }

`