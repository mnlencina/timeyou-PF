import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useState } from "react";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { validateInputLogin } from "../utils/functiosAux";
import Swal from 'sweetalert2';

export default function Contacto() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorLogin, setErrorLogin] = useState({});
  const [inputEmail, setInputEmail] = useState(false);

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    setInputEmail(true);
    setErrorLogin(
      validateInputLogin({
        [name]: value,
      })
    );
  };

  const handleChangeNombre = (e) => {
    const { value } = e.target;
    setNombre(value);
  };

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
         // console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
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
          <input
            type="text"
            maxLength={15}
            name="user_name"
            onChange={handleChangeNombre}
          />
        </div>

        <div className="inputField">
          <label>Email</label>
          <input
            type="email"
            name="email"
            maxLength={30}
            onChange={handleChangeLogin}
          />
          {inputEmail && errorLogin.e2 && (
            <ContainerError>
              <p>{errorLogin.e2}</p>
            </ContainerError>
          )}
        </div>
        <div className="inputArea">
          <label>Message</label>
          <div className="textArea">
            <textarea name="message" />
          </div>
        </div>
        {!email || !nombre ? (
          <div className="falsoBoton">Enviar</div>
        ) : (
          <div className="btn">
            <BTNCarritoDeCompras>Enviar</BTNCarritoDeCompras>
          </div>
        )}
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  width: 30%;
  height: 450px;
  .falsoBoton {
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 10px;
    background-color: /* #4ebcc7 */ ${(props) =>
      props.alter === "true" ? "rgba(0,0,0,0.4)" : "gray"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    gap: 10px;
    color: #fff;
    text-transform: capitalize;
  }
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
      label {
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
    .inputArea {
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

const ContainerError = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: 150px;
  background-color: #fff;
  width: 235px;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    top: -18px;
    left: 20px;
    width: 20px;
    height: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 12px solid #fff;
  }
  p {
    width: 90%;
    height: 100%;
    display: flex;
    place-content: center;
    color: red;
    opacity: 0.6;
  }
`;
