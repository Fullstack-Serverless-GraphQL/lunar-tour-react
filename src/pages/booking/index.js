import React, { useState } from "react";
import Tabs from "../../components/navs/Tabs";
import CustomerDetails from "./CustomerDetails";
const BookingIndex = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <Tabs defaultActiveKey={activeTab}>
        <Tabs.TabPane key="1">
          <CustomerDetails setActiveTab={setActiveTab} />
        </Tabs.TabPane>
        <Tabs.TabPane key="2">tab 2</Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;
