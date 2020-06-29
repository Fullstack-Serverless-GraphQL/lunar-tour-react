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
        <div className="flex lg:flex-row s:flex-col mt-10" key={index}>
          <hr />
          <div className="flex flex-col mr-5">
            <BodyOne> customer name </BodyOne>
            <Form.Item name={`${index}.name`}>
              <Input
                placeholder="Bog Iger"
                type="name"
                value={customers.name}
              />
            </Form.Item>

            <BodyOne> customer country </BodyOne>

            <Form.Item name={`${index}.country`}>
              <Input placeholder="Iran" type="text" value={customers.country} />
            </Form.Item>

            <BodyOne> Physio score </BodyOne>
            <Form.Item name={`${index}.physioScore`}>
              <Input
                placeholder="4"
                type="text"
                value={customers.physioScore}
              />
            </Form.Item>
          </div>
          <div className="flex flex-col">
            <BodyOne> Customer surname </BodyOne>

            <Form.Item name={`${index}.surname`}>
              <Input placeholder="iGER" type="text" value={customers.surname} />
            </Form.Item>
            <label> </label>
            <input />
            <BodyOne> Passport number </BodyOne>

            <Form.Item name={`${index}.passportNumber`}>
              <Input
                placeholder="4"
                type="text"
                value={customers.passportNumber}
              />
            </Form.Item>

            <RemoveButton onClick={() => removeCustomer(index)} />
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <Form
        onValuesChange={(changedValues, allValues) => {
          console.log(changedValues, allValues);

          props.setFields(allValues);
        }}
      >
        {inputs}
      </Form>

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
