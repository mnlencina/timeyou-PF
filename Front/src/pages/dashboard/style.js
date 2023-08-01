import styled from "styled-components";

export const Container = styled.div`
    .containerTable{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tableUser{
        width: 80%;
    }
    .tableWatch{
        width: 80%;
    }
    .imgTable{
        height: 30px;
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