import React, { useState } from "react";
import styled from "styled-components";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/Actions";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart);
  const stripe = useStripe();
  const elemets = useElements();

  const price = cart.items.reduce((acc, e) => acc + e.price, 0);

  /* Informacion del usuario que realiza la compra */
  const [onValuesComplete, setOnValuesComplete] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    usuario: "",
    nombre: "",
    dni: "",
  });
  const [userPayInfrmation, setUserPayInfrmation] = useState({});
  /* Controlador de formValues */

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSelectChange = (e) => {
    const { value, name } = e.target;
    setUserPayInfrmation({
      ...userPayInfrmation,
      [name]: value,
    });
  };

  const handleValuesSubmit = (e) => {
    e.preventDefault();
    setUserPayInfrmation(formValues);
    setFormValues({
      email: "",
      usuario: "",
      nombre: "",
      dni: "",
    });
    setOnValuesComplete(true);
  };

  /* Informacion que llega a stripe x el back */
  const handleStripeSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elemets.getElement(CardElement),
      });
      if (error) {
        console.log(error.message);
        return;
      }
      const { id } = paymentMethod;
      const response = await axios.post("http://localhost:3001/buy/checkout", {
        id,
        userName: userPayInfrmation.usuario,
        amount: userPayInfrmation["selec-pay-method"],
        model: cart.items.map((e) => e.model).join(),
        colorName: cart.items.map((e) => e.color).join(),
      });
      if (response.status === 200) {
        alert("compra registrada con exito");
      }
      elemets.getElement(CardElement).clear();
      dispatch(clearCart());
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const renderUser = () => (
    <UserContainer onValuesComplete={onValuesComplete.toString()}>
      <div className="title-form">
        <span>1</span>
        <h3>identificacion</h3>
      </div>
      {onValuesComplete ? (
        <>
          <div className="container-form-complete">
            <div className="content">
              <div className="form-complete">
                <h4>
                  Apellido y Nombre:
                  {userPayInfrmation.nombre}
                </h4>
                <h4>Correo Electronico: {`${userPayInfrmation.email}`}</h4>
              </div>
              <hr />
              <button onClick={() => setOnValuesComplete(false)}>
                Editar datos
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="parrafo">
            solicitamos unicamente la informacion necesaria para realiza la
            compra
          </p>
          <div className="form-container">
            <form
              action="POST"
              onSubmit={handleValuesSubmit}
              className="form-user"
            >
              <div className="input-field">
                <label htmlFor="">Correo*</label>
                <input
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleValueChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">Usuario*</label>
                <input
                  type="text"
                  name="usuario"
                  value={formValues.usuario}
                  onChange={handleValueChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">nombre*</label>
                <input
                  type="text"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleValueChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="">DNI*</label>
                <input
                  type="text"
                  name="dni"
                  value={formValues.dni}
                  onChange={handleValueChange}
                />
              </div>
              <div className="btn">
                <BTNCarritoDeCompras>Continuar</BTNCarritoDeCompras>
              </div>
            </form>
          </div>
        </>
      )}
    </UserContainer>
  );

  const renderPay = () => (
    <PayContainer>
      <div className={`title-form ${!onValuesComplete ? " blur" : ""}`}>
        <span>2</span>
        <h3>Metodo de pago</h3>
      </div>
      <div
        className={`targeta-container ${!onValuesComplete ? " desactive" : ""}`}
      >
        <form action="" onSubmit={handleStripeSubmit} className="form-targeta">
          <div className="tarjeta">
            <span>Ingrese los datos de la targeta</span>
            <div className="card-element">
              <CardElement />
            </div>
          </div>

          <div className="coutas">
            <select name="selec-pay-method" onChange={handleSelectChange}>
              <option value="default">En cuantas cuotas deseas pagar?</option>
              <option value={price * 500}>Total - ${price * 500}</option>
              <option value={parseInt((price * 500) / 3)}>
                3 cuotas de ${parseInt((price * 500) / 3)} sin interes
              </option>
              <option value={parseInt((price * 500) / 6)}>
                6 cuotas de $ {parseInt((price * 500) / 6)} sin interes
              </option>
            </select>
          </div>
          <div className="dni">
            <label htmlFor="">DNI del pagador</label>
            <input type="text" />
          </div>
          <div className="btn">
            <BTNCarritoDeCompras>finalizar pago</BTNCarritoDeCompras>
          </div>
        </form>
      </div>
    </PayContainer>
  );

  const renderCheck = () => <CheckContainer></CheckContainer>;

  return (
    <Container>
      {renderUser()}
      {renderPay()}
      {renderCheck()}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title-form {
    width: 100%;
    height: 30px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    gap: 10px;
    span {
      display: inline-block;
      background: #333;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
      color: #fff;
      font-size: 1.2em;
    }
  }

  .container-form-complete {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .content {
      margin-top: 20px;
      width: 90%;
      height: 210px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      border: 1px solid #111;
      opacity: 0.6;
      border-radius: 10px;
      .form-complete {
        margin-left: 20px;
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
      }
      hr {
        width: 80%;
        height: 1px;
        margin: 10px 10%;
      }
      button {
        margin-left: 20px;
      }
    }
  }
  .parrafo {
    width: 90%;
    height: 50px;
    margin: 10px 0;
  }
  .form-container {
    width: 100%;
    height: 100%;
    display: ${({ onValuesComplete }) =>
      onValuesComplete == "true" ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .form-user {
      width: 350px;
      height: 410px;
      border-radius: 30px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .input-field {
        width: 90%;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        label {
          text-transform: capitalize;
        }
        input {
          width: 100%;
          min-height: 35px;
          border-radius: 5px;
          background: none;
          outline: none;
          border: 1px solid #111;
        }
      }
      .btn {
        width: 50%;
        height: 50px;
        button {
          text-transform: uppercase;
        }
      }
    }
  }
`;
const PayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .blur {
    opacity: 0.4;
  }
  .title-form {
    width: 100%;
    height: 30px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    gap: 10px;
    span {
      display: inline-block;
      background: #333;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
      color: #fff;
      font-size: 1.2em;
    }
  }
  .desactive {
    visibility: hidden;
  }
  .targeta-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    .form-targeta {
      width: 350px;
      height: 410px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .tarjeta {
        width: 90%;
        height: 100px;
        span {
          display: inline-block;
          width: 100%;
          height: 50px;
          margin-bottom: 10px;
          line-height: 50px;
          text-align: center;
          text-transform: capitalize;
        }
      }
      .coutas {
        width: 90%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        select {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: none;
        }
      }
      .dni {
        width: 90%;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        input {
          width: 100%;
          height: 35px;
          border-radius: 5px;
          border: 1px solid #111;
        }
      }
      .btn {
        margin-top: 40px;
        width: 70%;
        height: 50px;
        button {
          text-transform: uppercase;
        }
      }
    }
  }
`;

const CheckContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;
