import React, { useState } from "react";
import Tabs from "../../components/navs/Tabs";
import CustomerDetails from "./CustomerDetails";
import Customers from "./Customers";
const BookingIndex = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [fields, setFields] = useState({});
  console.log(fields);
  return (
    <>
      <Tabs activeKey={activeTab}>
        <Tabs.TabPane key="1">
          <CustomerDetails
            setActiveTab={setActiveTab}
            fields={fields}
            onChange={(newFields) => {
              setFields(newFields);
            }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="2">
          <Customers
            setActiveTab={setActiveTab}
            onChange={(newFields) => {
              setFields(newFields);
            }}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;
