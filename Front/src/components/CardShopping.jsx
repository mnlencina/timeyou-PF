import React from "react";
import styled from "styled-components";
import { AppendBTN } from "../utils/ComponentsStyle";
import { removeFromCart } from "../redux/Actions";
import { useDispatch } from "react-redux";

export const CardShopping = ({reloj}) => {
const dispatch = useDispatch()
  const handleRemove =() =>{
    dispatch(removeFromCart(reloj.id))
  }
  return (
    <Container>
      <div className="section-card">
        <div className="top-content">
          <picture className="img-box">
         {   <img
              src={reloj.image[0]}
              alt={reloj.name}
            />}
          </picture>
          <div className="marca-modelo">
            <h5>{reloj.brandName}</h5>
            <h4>{reloj.model}</h4>
          </div>
        </div>

        <section className="content">
          <h4>${reloj.price * 500}</h4>
          <div className="inputs">
            <AppendBTN alter="true">-</AppendBTN>
            <span className="visor">1</span>
            <AppendBTN alter="true">+</AppendBTN>
          </div>
        </section>
        <div className="clear">
          <AppendBTN alter="true" onClick={handleRemove}>X</AppendBTN>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
position: relative;
  margin: 5px 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
 
  .section-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
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

