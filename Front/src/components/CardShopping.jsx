import React from "react";
import styled from "styled-components";
import { AppendBTN } from "../utils/ComponentsStyle";

export const CardShopping = () => {
  return (
    <Container>
      <div className="section-card">
        <div className="top-content">
          <picture className="img-box">
            <img
              src="https://watchlandsa.vteximg.com.br/arquivos/ids/165967-200-200/MQ-24S-2B.jpg?v=1689800145533"
              alt=""
            />
          </picture>
          <div className="marca-modelo">
            <h5>Cassio</h5>
            <h4>modelo de la hostia</h4>
          </div>
        </div>

        <section className="content">
          <h4>$26330.00</h4>
          <div className="inputs">
            <AppendBTN alter>+</AppendBTN>
            <span className="visor">1</span>
            <AppendBTN alter>-</AppendBTN>
          </div>
        </section>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  .section-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .top-content{
        width: 30%;
        height:100%;
        display: flex;
        margin-right: 100px;
        .img-box{
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
        .marca-modelo{
            margin-left: 5px;
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;

        }
    }
    .content{
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        h4{
        }
        .inputs{
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .visor{
                width: 40px;
                height: 40px;
                background-color: grey;
                border: none;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                color:#fff;
            }
        }
    }
  }
`;
