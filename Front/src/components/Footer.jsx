import React from "react";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <div className="margin">
        <section className="media">
          <div className="about">
            <h3 className="title">TimeYou</h3>
            <ul>
              <li>sobre nosotros</li>
              <li>contacto</li>
              <li>mi cuenta</li>
              <li>servicio tecnico</li>
            </ul>
          </div>
          <div className="help">
            <h3 className="title">ayuda</h3>
            <ul>
              <li>preguntas frecuentes</li>
              <li>Privacidad</li>
              <li>Terminos & condiciones</li>
            </ul>
          </div>
          <div className="social">
            <h3>Seguinos</h3>
            <ul>
              <li>
                <AiOutlineFacebook />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="copy">
          <h4>
            <span>TimeYou</span> {<AiOutlineCopyrightCircle />} 2023 
          </h4>
        </section>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  width: 100vw;
  height: 250px;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  hr {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  .margin {
    width: 80%;
    margin: 0 auto;
    .media {
      width: 100%;
      height: 240px;
      display: flex;
      align-items: center;
      .about,
      .help,
      .social {
        width: 33.33%;
        height: 100%;
        color: #fff;
        text-transform: capitalize;
        ul {
          list-style: none;
          text-transform: capitalize;
          li {
            font-weight: 300;
          }
        }
      }
      .about {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 10px;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 10px;
        }
      }
      .help {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 10px;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 10px;
        }
      }
      .social {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 10px;
        ul {
          width: 100%;
          display: flex;
          gap: 10px;
          li {
            font-size: 2rem;
          }
        }
      }
    }
    .copy {
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
      h4 {
        font-size: 0.8rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 300;
        span {
          font-weight: 600;
        }
      }
    }
  }
`;
