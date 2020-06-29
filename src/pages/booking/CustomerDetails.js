import React from "react";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import Input from "../../components/inputs/Input";

const CustomerDetails = (props) => {
  return (
    <>
      <div class="flex flex-col p-20 ">
        <HeadingOne>Booking for Listing Name</HeadingOne>
        <div class="mt-5">
          <BodyOne>Booking date</BodyOne>
          <Input placeholder="date" type="date" v-model="personal.date" />
        </div>

        <div class="mt-5">
          <BodyOne> Email address </BodyOne>
          <Input
            placeholder="doku@corrisant.io"
            type="email"
            v-model="personal.email"
          />
        </div>
        <div class="flex lg:flex-row mt-5 s:flex-col">
          <RedBlockButton text="Proceed" class="mr-5 s:mb-5 lg:mb-0" />

          <RedOutlineButton text="Cancel" />
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
