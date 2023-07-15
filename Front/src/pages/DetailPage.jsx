import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

function DetailPage() {
  return (
    <Container>
      <div className="main_container">
        <header className="title">
          <h3>
            <span>
              TimesYou {">"} RELOJES {">"}
            </span>{" "}
            reloj demo{" "}
          </h3>
        </header>
        <section className="show-clocks">
          <picture className="img-box">
            <img
              src="https://watchlandsa.vtexassets.com/arquivos/ids/165441-500-auto?v=1773761650&width=500&height=auto&aspect=true"
              alt="algo"
            />
          </picture>
          <article className="show-cart">
            <section className="body-cart">
              <header className="title-body">
                <h3>4562132-213as</h3>
                <h1>Reloj demo</h1>
              </header>
              <hr />
              <div className="price">
                <h1>$17066.00</h1>
                <div className="colors">
                  <h3>Colores:</h3>
                  <div className="color">
                    <span className="rojo"></span>
                    <span className="amarillo"></span>
                    <span className="azul"></span>
                    <span className="rojo"></span>
                    <span className="amarillo"></span>
                    <span className="azul"></span>
                  </div>
                </div>
              </div>
              <div className="btn-cart">
                <button>
                  <span>
                    <FiShoppingCart />
                  </span>
                  agregar al carrito
                </button>
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
            <p>
              RELOJ ANALOGO, CON CAJA DE ACERO, MALLA DE METAL RODINADA EN DOS
              TONOS, PLATA Y ORO ROSA. CUADRANTE AL TONO CON MARCADORES DE
              MINUTOS CON STRASS EN COLORES. SUMERGIBLE 50M. Tamaño de la caja:
              35 x 40 x 8 mm RETIRALO GRATIS en los puntos de Unicenter y
              Centro- Envío a domicilio gratis desde $20000
            </p>
          </article>
          <article className="ficha-tecnica"></article>
        </section>
        <hr />
      </div>
    </Container>
  );
}

export default DetailPage;

const Container = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
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
  .main_container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
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
      align-items: center;
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
                .rojo {
                  background-color: red;
                }
                .amarillo {
                  background-color: yellow;
                }
                .azul {
                  background-color: blue;
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
            button {
              width: 100%;
              height: 100%;
              border: none;
              border-radius: 10px;
              background-color: #4ebcc7;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.4rem;
              gap: 10px;
              color: #fff;
              text-transform: capitalize;
              transition: 0.5s ease-in-out;
              &:hover {
                transform: scale(1.1);
                background-color: #35838a;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
              }
            }
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
      width: 100%;
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
        background-color: yellow;
      }
    }
  }
`;
