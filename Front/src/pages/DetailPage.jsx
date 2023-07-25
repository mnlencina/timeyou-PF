// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addModel } from "../redux/Actions";
import { addToCart } from "../redux/Actions";

function DetailPage() {
  const [color, setColor] = useState(0);
  const [color2, setColor2] = useState(0);
  const dispatch = useDispatch();
  const { model } = useParams();
  const detailClock = useSelector((state) => state.detailClock);
  const loading = useSelector((state) => state.detailLoading);
 

  

  const handleAddToCart = () => {
   
    dispatch(addToCart(detailClock[color]));
  };

  useEffect(() => {
    dispatch(addModel(model));
  }, [dispatch]);

  return loading ? (
    <div>loanding</div>
  ) : (
    <Container>
     
     
     
      <div className="main_container">
        <header className="title">
          <h3>
            <span>
              TimesYou {">"} {detailClock[0].brandName} {">"}
            </span>{" "}
            {`${detailClock[0].model}`}
          </h3>
        </header>
        <section className="show-clocks">
        <div className="navVert">
 {(detailClock[color].image).map((img, i)=>
   <img onClick={()=> setColor2(i)} key={i+50} src={img} alt="imgB" />
 )}
 </div>
          <picture className="img-box">
            <img src={detailClock[color].image[color2]} alt="imgD" />
          </picture>
          <article className="show-cart">
            <section className="body-cart">
              <header className="title-body">
                <h3>{`${detailClock[0].model} - ${detailClock[
                  color
                ].colorName.toUpperCase()}`}</h3>
                <h1>{`${detailClock[0].brandName.toUpperCase()} | ${
                  detailClock[0].model
                }`}</h1>
              </header>
              <hr />
              <div className="price">
                <h1>$ {detailClock[0].price * 500}.- </h1>
                <div className="colors">
                  <h3>Colores:</h3>
                  <div className="color">
                    {detailClock.map((wat, i) => (
                      <img 
                        src={wat.image[0]} alt="" 
                        onClick={() => {setColor(i); setColor2(0)}}
                        key={i + wat.colorName}                                              
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="btn-cart">
                <BTNCarritoDeCompras onClick={handleAddToCart}>
                  <span>
                    <FiShoppingCart />
                  </span>
                  agregar al carrito
                </BTNCarritoDeCompras>
              </div>
              <div className="detail-compra"></div>
            </section>
          </article>
        </section>
        <hr />
        <section className="descriptions">
          <article className="description">
            <div className="title-description">
              <h3>Descripcion</h3>
            </div>
            <p>{detailClock[0].description}</p>
          </article>
          <article className="ficha-tecnica">
            <div className="title-description">
              <h3>ficha tecnica</h3>
            </div>
            <div className="body-content">
              <div className="container-mesh">
                <div className="mesh">
                  <h3>Malla</h3>
                  <ul>
                    <li>{detailClock[0].strapName}</li>
                  </ul>
                </div>
                <div className="gender">
                  <h3>genero</h3>
                  <ul>
                    <li>{detailClock[0].gender}</li>
                  </ul>
                </div>
              </div>
              <div className="container-functions">
                <h3>funciones</h3>
                <ul>
                  {detailClock[0].Functions.map((fun, i) => (
                    <li key={i + fun}>{fun.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
        <hr />
        <section className="reviews"></section>
      </div>
    </Container>
  );
}

export default DetailPage;

const Container = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom #f1f1f1, #fff);
  hr {
    width: 90%;
    height: 1px;
    background: #111;
    opacity: 0.5;
    margin: 20px auto;
  }
  .navVert{
    width: 60px;
    height: 450px;
    img{
      width:50px;
      padding: 3px;
      cursor: pointer;
    }
  }
  .main_container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      margin: 10px 0;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h3 {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        span {
          font-size: 1.1rem;
          font-weight: 500;
          color: #333;
          text-transform: capitalize;
        }
      }
    }
    .show-clocks {
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      .img-box {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img {
          width: 350px;
          object-fit: contain;
        }
      }
      .show-cart {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .body-cart {
          width: 80%;
          height: 100%;
          border-radius: 30px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .title-body {
            width: 90%;
            height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            h3 {
              font-size: 0.9rem;
              color: #333;
              font-weight: 400;
            }
            h1 {
              font-size: 1.4rem;
              font-weight: 600;
              text-transform: uppercase;
            }
          }
          hr {
            width: 90%;
            height: 1px;
            background: #111;
            opacity: 0.5;
            margin-bottom: 10px;
          }
          .price {
            width: 90%;
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            h1 {
              font-size: 2rem;
              font-weight: 500;
              letter-spacing: 1px;
            }
            .colors {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              h3 {
                font-size: 1rem;
                text-decoration: underline;
              }
              .color {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                
                img{
                  width:70px;
                  margin: 10px;
                  cursor: pointer;
                }                                         
                                              
                span {
                  position: relative;
                  display: inline-block;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  margin: 15px;
                  transition: 0.5s ease;
                  &:hover {
                    transition: 0.3s ease-in-out;
                    &::after {
                      content: "";
                      position: absolute;
                      top: -5px;
                      left: -5px;
                      width: 50px;
                      height: 50px;
                      border: 1px solid #111;
                    }
                  }
                }
              }
            }
          }
          .btn-cart {
            width: 80%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .detail-compra {
            width: 90%;
            height: calc(500px - 280px);
            margin-top: 10px;
          }
        }
      }
    }
    .descriptions {
      margin: 0 auto;
      width: 90%;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      .description {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title-description {
          width: 90%;
          height: 35px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-bottom: 1px solid #333;
          h3 {
            text-transform: uppercase;
          }
        }
        p {
          width: 90%;
          margin-bottom: 20px;
        }
      }
      .ficha-tecnica {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title-description {
          width: 90%;
          height: 35px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-bottom: 1px solid #333;
          h3 {
            text-transform: uppercase;
          }
        }
        .body-content {
          width: 100%;
          height: 62%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 50px;
          margin-left: 100px;
          .container-mesh {
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            .mesh,
            .gender {
              h3 {
                text-transform: capitalize;
              }
              ul {
                li {
                  opacity: 0.8;
                  text-transform: uppercase;
                }
              }
            }
          }
          .container-functions {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h3 {
              text-transform: capitalize;
            }
            ul {
              margin-top: 10px;
              width: 50%;
              height: auto;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              align-items: center;
              justify-items: center;
              gap: 10px;
              li {
                text-transform: uppercase;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
    .reviews {
      width: 100%;
      height: 400px;
      margin-bottom: 20px;
      background-color: red;
    }
  }
`;
