import React from "react";
import styled from "styled-components";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";

export const CheckoutForm = () => {

  const price = useSelector(state=> state.price)
  const stripe = useStripe();
  const elemets = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elemets.getElement(CardElement),
      });
      const {id} = paymentMethod;
      const response = await axios.post("http://localhost:3001/buy/checkout",{
        id,
        userName:"mnlencina",
        amount:+price,
        model:"lasdjsad",
        colorName:"red"
      })
      if(response.status === 200){
        alert("compra registrada con exito");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <CardElement />
      <button>comprar</button>
    </Container>
  );
};

const Container = styled.form`
  width: 80%;
  height: 80%;
  margin: auto;
`;
