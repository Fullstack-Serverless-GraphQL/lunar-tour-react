import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/index";
import ViewListing from "./pages/ViewListing";
import BookingIndex from "./pages/booking";
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
      <ViewListing path="/listing/:id" props={props} />
      <BookingIndex path="/booking/:id" props={props} />
    </Router>
  );
};

export default Routes;
