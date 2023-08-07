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