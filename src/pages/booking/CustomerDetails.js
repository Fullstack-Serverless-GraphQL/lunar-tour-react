import React from "react";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import Input from "../../components/inputs/Input";
import { Form } from "antd";
const CustomerDetails = (props) => {
  console.log(props);
  return (
    <>
      <Form
        fields={props.fields}
        onFieldsChange={(changedFields, allFields) => {
          console.log(allFields);
          props.onChange(allFields);
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
            <Input placeholder="doku@corrisant.io" name="email" type="email" />
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
