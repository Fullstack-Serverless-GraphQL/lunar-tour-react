import React from "react";
import Tabs from "../../components/navs/Tabs";
const BookingIndex = (props) => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane key="1">tab 1</Tabs.TabPane>
        <Tabs.TabPane key="2">tab 2</Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;
