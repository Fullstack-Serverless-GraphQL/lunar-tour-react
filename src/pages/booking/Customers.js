import React, { useState, useEffect } from "react";
import { UPDATE_FORM_DATA } from "../../graphql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import BodyOne from "../../components/typography/BodyOne";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [mutate, { data, loading, error }] = useMutation(UPDATE_FORM_DATA);

  // useEffect(() => {
  //   mutate({
  //     variables: {
  //       customer: customers,
  //     },
  //   });
  // }, [customers, mutate]);
  const addCustomer = () => {
    const o = [...customers];
    o.push({
      name: null,
      physioScore: null,
      surname: null,
      passportNumber: null,
      country: null,
    });

    console.log("addCustomer", o);
    setCustomers(o);
  };

  const updateCustomer = ({ index, field, value }) => {
    const o = [...customers];
    o[index][field] = value;
    mutate({
      variables: {
        customer: o,
      },
    });
    console.log("updateCustomer", o);

    setCustomers(o);
  };

  const removeCustomer = (index) => {
    const o = [...customers];
    o.splice(index, 1);
    setCustomers(o);
  };

  const inputs = customers.map((c, index) => {
    const keys = Object.keys(c);

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
