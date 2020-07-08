import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useMutation, useQuery } from "@apollo/react-hooks";

import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import { MAKE_A_BOOKING } from "../../graphql/Mutations";
import { GET_FORM_DATA } from "../../graphql/Queries";
const StripeElements = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const { data } = useQuery(GET_FORM_DATA);
  const [mutate, { data: mutationData }] = useMutation(MAKE_A_BOOKING);
  console.log("stripe", data, props);

  const pay = async () => {
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    mutate({
      variables: {
        customerEmail: data.formData.email,
        bookingDate: data.formData.date,
        customers: data.formData.customers,
        listingId: props.id,
      },
    });

    props.setActiveTab("4");
    console.log(result, mutationData);
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
        <StripeElements setActiveTab={props.setActiveTab} id={props.id} />
      </div>
    </Elements>
  );
};

export default Checkout;
