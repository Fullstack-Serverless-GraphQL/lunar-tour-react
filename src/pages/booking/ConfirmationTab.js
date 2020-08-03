import React from "react";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import vector from "../../assets/Vector.svg";
import ticket from "../../assets/confirmation_number.svg";
const ConfirmationTab = (props) => {
  return (
    <>
      <div class="flex flex-col p-20 ">
        <HeadingOne>Thanks for booking with us</HeadingOne>
        <img src={vector} alt="vector" class="mt-5" />
        <BodyOne className="mt-5">
          Your link to your ticket is in the mail. Keep it safe and we will see
          you soon on{" "}
        </BodyOne>
        <div>
          <img src={ticket} alt="ticket" />
          <a class="text-yellow font-display" href="bookingData.chargeReciept">
            Tickets
          </a>
        </div>
        <div class="flex flex-row ml-32 mt-20">
          <RedBlockButton onClick={() => props.navigate(`/`)} className="mr-5">
            Book more
          </RedBlockButton>
        </div>
      </div>
    </>
  );
};

export default ConfirmationTab;
