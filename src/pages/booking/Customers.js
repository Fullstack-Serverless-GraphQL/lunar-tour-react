import React, { useState } from "react";
import { UPDATE_FORM_DATA } from "../../graphql/Mutations";
import { GET_FORM_DATA } from "../../graphql/Queries";
import { useMutation, useQuery } from "@apollo/react-hooks";
import BodyOne from "../../components/typography/BodyOne";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const { data } = useQuery(GET_FORM_DATA);
  const [mutate] = useMutation(UPDATE_FORM_DATA);

  const addCustomer = () => {
    const o = [...customers];
    o.push({
      name: null,
      physioScore: null,
      surname: null,
      passportNumber: null,
      country: null,
    });

    setCustomers(o);
  };

  const updateCustomer = ({ index, field, value }) => {
    const o = [...customers];
    o[index][field] = value;
    console.log("oo", o);
    mutate({
      variables: {
        email: data.formData.email,
        date: data.formData.date,
        customer: o,
      },
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

            <Input
              placeholder="Bog Iger"
              type="name"
              onChange={(e) =>
                updateCustomer({
                  index,
                  field: "name",
                  value: e.currentTarget.value,
                })
              }
            />

            <BodyOne> customer country </BodyOne>

            <Input
              placeholder="Iran"
              type="text"
              onChange={(e) =>
                updateCustomer({
                  index,
                  field: "country",
                  value: e.currentTarget.value,
                })
              }
            />

            <BodyOne> Physio score </BodyOne>

            <Input
              placeholder="4"
              type="text"
              onChange={(e) =>
                updateCustomer({
                  index,
                  field: "physioScore",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <BodyOne> Customer surname </BodyOne>

            <Input
              placeholder="iGER"
              type="text"
              onChange={(e) =>
                updateCustomer({
                  index,
                  field: "surname",
                  value: e.currentTarget.value,
                })
              }
            />

            <label> </label>
            <input />
            <BodyOne> Passport number </BodyOne>

            <Input
              placeholder="4"
              type="text"
              onChange={(e) =>
                updateCustomer({
                  index,
                  field: "passportNumber",
                  value: e.currentTarget.value,
                })
              }
            />

            <RemoveButton onClick={() => removeCustomer(index)} />
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="flex flex-col">
      {inputs}
      <div className="flex flex-col">
        <div className="mt-5 ">
          <BlueBlockButton onClick={() => addCustomer()}>
            Add a customer
          </BlueBlockButton>
        </div>
        <div className="flex lg:flex-row mt-5 s:flex-col">
          <RedBlockButton
            className="mr-5 s:mb-5  lg:mb-0"
            onClick={() => props.setActiveTab("3")}
          >
            Proceed
          </RedBlockButton>
          <RedOutlineButton onClick={() => props.setActiveTab("1")}>
            Back
          </RedOutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Customers;
