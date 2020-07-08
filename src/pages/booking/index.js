import React, { useState } from "react";
import Tabs from "../../components/navs/Tabs";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORM_DATA } from "../../graphql/Queries";
import CustomerDetails from "./CustomerDetails";
import Customers from "./Customers";
import Checkout from "./Checkout";
import ConfirmationTab from "./ConfirmationTab";
const BookingIndex = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [fields, setFields] = useState({});
  // const { data, loading, error } = useQuery(GET_FORM_DATA);
  // console.log("fff", props);

  return (
    <>
      <Tabs activeKey={activeTab}>
        <Tabs.TabPane key="1" className="flex justify-center">
          <CustomerDetails
            setActiveTab={setActiveTab}
            fields={fields}
            setFields={setFields}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" className="flex justify-center">
          <Customers
            setActiveTab={setActiveTab}
            setFields={setFields}
            fields={fields}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" className="flex justify-center">
          <Checkout setActiveTab={setActiveTab} id={props.id} />
        </Tabs.TabPane>
        <Tabs.TabPane key="4" className="flex justify-center">
          <ConfirmationTab
            setActiveTab={setActiveTab}
            navigate={props.navigate}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;
