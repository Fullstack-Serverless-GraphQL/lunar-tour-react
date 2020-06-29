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
