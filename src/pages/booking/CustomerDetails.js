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
  console.log(props);

  const [mutate, { data, loading, error }] = useMutation(UPDATE_FORM_DATA);

  return (
    <>
      <Form
        // fields={props.fields}
        onValuesChange={(changedValues, allValues) => {
          console.log("rrr", allValues.date);

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
              text="Proceed"
              className="mr-5 s:mb-5 lg:mb-0"
              onClick={() => props.setActiveTab("2")}
            />

            <RedOutlineButton text="Cancel" />
          </div>
        </div>
      </Form>
    </>
  );
};

export default CustomerDetails;
