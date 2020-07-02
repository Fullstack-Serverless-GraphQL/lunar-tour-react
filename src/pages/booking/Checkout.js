import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const StripeElements = () => {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <>
      <CardElement />
    </>
  );
};
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Checkout = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeElements />
    </Elements>
  );
};

export default Checkout;
