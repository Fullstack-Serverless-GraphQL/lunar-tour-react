import React from "react";
import RedBlockButton from "../components/buttons/RedBlockButton";
import { useQuery } from "@apollo/react-hooks";
import { GET_A_LISTING } from "../graphql/Queries";

const ViewListing = (props) => {
  console.log(props);

  const { loading, data, error } = useQuery(GET_A_LISTING, {
    variables: {
      listingId: props.id,
    },
  });

  if (loading) return <p className="text-red">loading</p>;
  if (error) return <p className="text-red">{error}</p>;

  console.log(data);
  return <></>;
};

export default ViewListing;
