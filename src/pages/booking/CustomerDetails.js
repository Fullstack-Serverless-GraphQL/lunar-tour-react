import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_FORM_DATA } from "../../graphql/Mutations";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import Input from "../../components/inputs/Input";
import { Form } from "antd";
const CustomerDetails = (props) => {
  const [mutate] = useMutation(UPDATE_FORM_DATA);

  return (
    <>
      <Form
        // fields={props.fields}
        onValuesChange={(allValues) => {
          mutate({
            variables: {
              email: allValues.email,
              date: allValues.date,
            },
          });
        }}
      >
        <div className="flex flex-col p-20 ">
          <HeadingOne>Booking for Listing Name</HeadingOne>
          <div className="mt-5">
            <BodyOne>Booking date</BodyOne>
            <Form.Item name="date">
              <Input placeholder="date" type="date" />
            </Form.Item>
          </div>

          <div className="mt-5">
            <BodyOne> Email address </BodyOne>
            <Form.Item name="email">
              <Input placeholder="doku@corrisant.io" type="email" />
            </Form.Item>
          </div>
          <div className="flex lg:flex-row mt-5 s:flex-col">
            <RedBlockButton
              className="mr-5 s:mb-5 lg:mb-0"
              onClick={() => props.setActiveTab("2")}
            >
              Proceed
            </RedBlockButton>

            <RedOutlineButton>Cancel</RedOutlineButton>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CustomerDetails;
