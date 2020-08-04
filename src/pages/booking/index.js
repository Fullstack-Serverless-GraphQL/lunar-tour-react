import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_A_LISTING } from "../../graphql/Queries";
import Tabs from "../../components/navs/Tabs";
import CustomerDetails from "./CustomerDetails";
import Customers from "./Customers";
import Checkout from "./Checkout";
import ConfirmationTab from "./ConfirmationTab";
import { Skeleton } from "antd";
import { HeadingOne } from "../../components/typography";

const BookingIndex = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [fields, setFields] = useState({});
  const [bookingData, setBookingData] = useState({});
  // const { data, loading, error } = useQuery(GET_FORM_DATA);
  // console.log("fff", props);
  const { loading, data: listing, error } = useQuery(GET_A_LISTING, {
    variables: {
      listingId: props.id,
    },
  });

  if (loading) return <Skeleton />;
  if (error) return <p className="text-red">{error}</p>;

  const bookingName = listing.getAListing.listingName;
  return (
    <>
      <HeadingOne className="text-center">Booking for {bookingName}</HeadingOne>
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
          <Checkout
            setActiveTab={setActiveTab}
            id={props.id}
            setBookingData={setBookingData}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="4" className="flex justify-center">
          <ConfirmationTab
            setActiveTab={setActiveTab}
            navigate={props.navigate}
            bookingData={bookingData}
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;
