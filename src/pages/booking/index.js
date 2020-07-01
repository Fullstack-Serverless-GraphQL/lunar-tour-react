import React, { useState } from "react";
import Tabs from "../../components/navs/Tabs";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORM_DATA } from "../../graphql/Queries";
import CustomerDetails from "./CustomerDetails";
import Customers from "./Customers";
const BookingIndex = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [fields, setFields] = useState({});
  // const { data, loading, error } = useQuery(GET_FORM_DATA);
  // console.log("fff", data);

  return (
    <>
      <Tabs activeKey={activeTab}>
        <Tabs.TabPane key="1">
          <CustomerDetails
            setActiveTab={setActiveTab}
            fields={fields}
            setFields={setFields}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="2">
          <Customers
            setActiveTab={setActiveTab}
            setFields={setFields}
            fields={fields}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;
