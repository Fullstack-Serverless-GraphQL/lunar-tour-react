import React, { useState } from "react";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";
import { Form } from "antd";

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);

  const addCustomer = () => {
    const o = [...customers];
    o.push({
      name: null,
      email: null,
      physioScore: null,
      surname: null,
      passportNumber: null,
    });

    setCustomers(o);
  };

  const removeCustomer = (index) => {
    const o = [...customers];
    o.splice(index, 1);
    setCustomers(o);
  };
  const inputs = customers.map((c, index) => {
    return (
      <>
        <Form
          onValuesChange={(changedValues, allValues) => {
            console.log(changedValues, allValues);

            props.setFields(allValues);
          }}
        >
          <div className="flex lg:flex-row s:flex-col mt-10" key={index}>
            <hr />
            <div className="flex flex-col mr-5">
              <BodyOne> customer name </BodyOne>
              <Form.Item name={`customers[${index}].name`}>
                <Input placeholder="Bog Iger" type="name" />
              </Form.Item>

              <BodyOne> customer country </BodyOne>

              <Form.Item name={`customers[${index}].country`}>
                <Input placeholder="Iran" type="text" />
              </Form.Item>

              <BodyOne> Physio score </BodyOne>
              <Form.Item name={`customers[${index}].physioScore`}>
                <Input
                  placeholder="4"
                  type="text"
                  name={`customers[${index}].physioScore`}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <BodyOne> Customer surname </BodyOne>

              <Form.Item name={`customers[${index}].surname`}>
                <Input placeholder="iGER" type="text" />
              </Form.Item>
              <label> </label>
              <input />
              <BodyOne> Passport number </BodyOne>

              <Form.Item name={`customers[${index}].passportNumber`}>
                <Input placeholder="4" type="text" />
              </Form.Item>

              <RemoveButton onClick={() => removeCustomer(index)} />
            </div>
          </div>
        </Form>
      </>
    );
  });
  return (
    <>
      {inputs}
      <div className="mt-5 ">
        <BlueBlockButton text="Add a customer" onClick={() => addCustomer()} />
      </div>
      <div className="flex lg:flex-row mt-5 s:flex-col">
        <RedBlockButton
          text="Proceed"
          className="mr-5 s:mb-5  lg:mb-0"
          onClick={() => props.setActiveTab("3")}
        />
        <RedOutlineButton text="Back" onClick={() => props.setActiveTab("1")} />
      </div>
    </>
  );
};

export default Customers;
