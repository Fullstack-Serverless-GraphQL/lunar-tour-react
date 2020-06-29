import React, { useState } from "react";
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";

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
  const inputs = customers.map((c) => {
    return (
      <>
        <div className="flex lg:flex-row s:flex-col mt-10">
          <hr />
          <div className="flex flex-col mr-5">
            <BodyOne> customer name </BodyOne>
            <Input
              placeholder="doku@corrisant.io"
              type="email"
              v-model="customer.name"
            />
            <BodyOne> customer country </BodyOne>
            <Input
              placeholder="doku@corrisant.io"
              type="email"
              v-model="customer.country"
            />
            <BodyOne> Physio score </BodyOne>
            <Input
              placeholder="doku@corrisant.io"
              type="email"
              v-model="customer.physioScore"
            />
          </div>
          <div className="flex flex-col">
            <BodyOne> Customer surname </BodyOne>
            <Input
              placeholder="doku@corrisant.io"
              type="email"
              v-model="customer.surname"
            />
            <label> </label>
            <input />
            <BodyOne> Passport number </BodyOne>
            <Input
              placeholder="doku@corrisant.io"
              type="email"
              v-model="customer.passportNumber"
            />
            <RemoveButton />
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      {inputs}
      <div className="mt-5 ">
        <BlueBlockButton text="Add a customer" />
      </div>
      <div className="flex lg:flex-row mt-5 s:flex-col">
        <RedBlockButton text="Proceed" className="mr-5 s:mb-5  lg:mb-0" />
        <RedBlockButton text="show data" className="mr-5 s:mb-5 lg:mb-0" />
        <RedOutlineButton text="Back" />
      </div>
    </>
  );
};

export default Customers;
