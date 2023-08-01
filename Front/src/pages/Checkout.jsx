import React from "react";
import styled from "styled-components";
import { CheckoutForm } from "../components/CheckoutForm";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromesi = loadStripe(
  "pk_test_51NVgnTAYvuvU8SQ49gIo7GAYFVsJvzbxM4nYtK4dTWvvmSTBQgssGmwQbzqlWvznnEtmq7AMt8eVMuG3ZDy5Ex4L00Pkqqwp0w"
);

function Checkout() {
  return (
    <Container>
      <div className="main-container">
        <Elements stripe={stripePromesi}>
          <CheckoutForm />
        </Elements>
      </div>
    </Container>
  );
}

export default Checkout;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .main-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CheckoutContainer = styled.form`
  width: 90%;
  height: auto;
`;
