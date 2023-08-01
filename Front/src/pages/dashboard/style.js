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
    }
    .tableUser{
        width: 95%;
    }
    .tableWatch{
        width: 95%;
    }
    .imgTable{
        height: 30px;
    }
    
    .divAction{
        display: flex;
    }
    
    .btnDiv{
        width: 30px;
        
        #btn1 {            
            color: white;
            background-color: red;
            border: 0px;
            width: 20px;
            
            &:hover{                
                color:  greenyellow;
                background: white;
            }
        }
        #btn2 {
            
            color:  greenyellow;
            background: white;
            cursor: pointer;
            width: 20px;            
            border-color: greenyellow;
            
            &:hover{                
                color: white;
                background-color: red;
                border: 0px;
                
            }
        }
    }
`