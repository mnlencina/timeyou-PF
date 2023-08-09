import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {BTNCarritoDeCompras} from '../utils/ComponentsStyle'

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_82luhvo",
        "template_f10h2js",
        form.current,
        "4liVfBKern8qYzMcv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('mensaje enviado con éxito')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container1>
      <form ref={form} onSubmit={sendEmail} className="field">

        <div className="inputField">
        <label>Name</label>
        <input type="text" name="user_name" />
        </div>

        <div className="inputField">
        <label>Email</label>
        <input type="email" name="user_email" />
        </div>

        <div className="inputArea">
        <label>Message</label>
        <div className="textArea">
        <textarea name="message" />
        </div>
        </div>
        <div className="btn">
        <BTNCarritoDeCompras>Enviar</BTNCarritoDeCompras>
        </div>

      </form>
    </Container1>
  );
}

const Container1 = styled.div`
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 55px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    border-radius: 25px;
    width: 30%;
    height: 450px;
  .field {
    width: 100%;
    height: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    .inputField {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .gaptexto {
          width: 100%;
          height: 30px;
          border: 1px solid black;
          border-radius: 30px;
        }
        label{
            font-size: 16px;
            font-weight: 400;
            text-transform: capitalize;
        }
        input {
            width: 98%;
            font-size: 16px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 2px 4px;
            border: 1px solid black;
            border-radius: 20px;
            padding: 2px 10px;
        }
    }
    .btn {
        width: 50%;
        height: 50px;
    }
    .inputArea{
        display: grid;
        grid-template-rows: 40px auto;
        place-items: center;
        width: 100%;
        height: 250px;
        label {
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 40px;
            text-transform: uppercase;
            text-decoration: underline;
        }
        .textArea {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 150px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 5px 5px 5px;
            textArea {
                display: grid;
                place-items: center;
                width: 100%;
                height: 100%;
                margin: 0 auto;
                border: none;
                outline: none;
            }
        }
    }
  }
`;
