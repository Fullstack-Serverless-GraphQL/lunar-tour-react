import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";

const StripeElements = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const pay = async () => {
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    props.setActiveTab("4");
    console.log(result);
  };
  return (
    <>
      <CardElement />
      <div class="flex flex-row mt-20">
        <RedBlockButton
          text="Pay"
          className="mr-5 s:mb-5  lg:mb-0"
          onClick={() => pay()}
        />
        <RedOutlineButton text="Back" onClick={() => props.setActiveTab("2")} />
      </div>
    </>
  );
};
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Checkout = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col">
        <HeadingOne>Your trip total</HeadingOne>
        <BodyOne>
          Test using this credit card: 4242 4242 4242 4242, and enter any 5
          digits for the zip code
        </BodyOne>
        <StripeElements setActiveTab={props.setActiveTab} />
      </div>
    </Elements>
  );
};

export default Checkout;
