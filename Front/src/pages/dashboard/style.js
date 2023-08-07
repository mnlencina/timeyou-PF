import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
    width: 100%;

    .home{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
    }
    .containerTable{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: 450px;
    }
    
    .tables{
        margin-top: 0px;
        display: flex;
        width: 95%;
        flex-direction: column;
        align-items: flex-end;
        
        
        
        .title{
            
            display: flex;
            width: 95%;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .inputFilter{
            border: none;
            outline: none;
            border-radius: 15px;
            padding: 0.8em;
            background-color: #ccc;
            box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
            transition: 300ms ease-in-out;
            
            &:focus {
                background-color: white;
                transform: scale(1.05);
                box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
            }
        }
    }
    .imgTable{
        height: 30px;
    }
    
    .divAction{
        display: flex;
    }
    .tableRole{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 4px;
        width: 70px;
    }
    
    .btnDiv{
        font-size: 23px;
        transition: 1s;
        height: 30px;
        .Icon1{
            
            color: red;
            background-color: rgb(255,255,255,0);
            &:hover{
                height: 25px;
                transition: 400ms;
                transform: rotateX(180deg);
                color: green;                
            }
        }
            
        .Icon2{          
            
            &:hover{
                color: red;
                transform: scale(1.2);
                
                
            }
        }
        
    }
    .iconUser{
        font-size: 20px;
        
    }
    .dataExpan{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        flex-wrap: nowrap;
        padding: 20px;
        
        span{
        
        }
    }
`